import { useState, useEffect } from 'react';
import { labExperimentsData } from '../data/labExperiments';
import { Terminal, Play, RefreshCw, Send, Lock, Cpu, Globe, Database, Shield, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function EngineeringLab() {
  const [activeTab, setActiveTab] = useState('api-visualizer');

  // Experiment 1: API Request Visualizer State
  const [apiEndpoint, setApiEndpoint] = useState('/api/v1/sos/telemetry');
  const [apiMethod, setApiMethod] = useState('GET');
  const [apiResponse, setApiResponse] = useState(null);
  const [apiLoading, setApiLoading] = useState(false);

  const runApiBenchmark = () => {
    setApiLoading(true);
    setApiResponse(null);
    setTimeout(() => {
      setApiResponse({
        status: 200,
        statusText: 'OK',
        latencyMs: Math.floor(Math.random() * 15) + 12,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'x-signature-algorithm': 'Ed25519',
          'x-encryption-payload': 'AES-256-GCM'
        },
        body: {
          success: true,
          timestamp: new Date().toISOString(),
          metrics: { activeNodes: 48, meshRelays: 12, encryptedCapsules: 1420 }
        }
      });
      setApiLoading(false);
    }, 450);
  };

  // Experiment 2: WebSocket Stream Monitor State
  const [wsConnected, setWsConnected] = useState(false);
  const [wsFrames, setWsFrames] = useState([]);
  const [wsMessage, setWsMessage] = useState('');

  const toggleWsConnection = () => {
    if (wsConnected) {
      setWsConnected(false);
      setWsFrames(prev => [...prev, { dir: 'SYS', text: 'DISCONNECTED FROM WSS://RESQNET.NODE.IO', time: new Date().toLocaleTimeString() }]);
    } else {
      setWsConnected(true);
      setWsFrames([
        { dir: 'SYS', text: 'HANDSHAKE VERIFIED: HTTP/1.1 101 SWITCHING PROTOCOLS (ED25519)', time: new Date().toLocaleTimeString() },
        { dir: 'IN', text: '{"event":"MESH_HEALTH","status":"ONLINE","nodes":48}', time: new Date().toLocaleTimeString() }
      ]);
    }
  };

  const sendWsFrame = () => {
    if (!wsMessage.trim()) return;
    const time = new Date().toLocaleTimeString();
    setWsFrames(prev => [
      ...prev,
      { dir: 'OUT', text: wsMessage, time },
      { dir: 'IN', text: `{"ack":true,"echo":"${wsMessage}","latency":"12ms"}`, time }
    ]);
    setWsMessage('');
  };

  // Experiment 3: SQL Query Execution Analyzer State
  const [selectedQuery, setSelectedQuery] = useState('SELECT * FROM emergency_capsules WHERE priority = "CRITICAL" ORDER BY timestamp DESC LIMIT 50');
  const [explainPlan, setExplainPlan] = useState(null);

  const runSqlExplain = () => {
    setExplainPlan({
      executionTimeMs: 0.88,
      plan: [
        '-> Index Scan Backward using idx_capsules_timestamp on emergency_capsules  (cost=0.12..4.20 rows=50 width=64)',
        '   Filter: (priority = "CRITICAL")',
        '   Buffers: shared hit=2 read=0',
        'Planning Time: 0.08 ms',
        'Execution Time: 0.88 ms'
      ]
    });
  };

  // Experiment 4: JWT Inspector State
  const [jwtToken, setJwtToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaHJpdmFzYW50aC0wMWEiLCJyb2xlIjoiQ29tcHV0ZXIgU2NpZW5jZSBFbmdpbmVlciIsImlhdCI6MTc0MTIxMjAwMCwiZXhwIjoxNzcyNzQ4MDAwfQ.signature_hash_verify');

  // Experiment 5: AI Streamer State
  const [aiStreamText, setAiStreamText] = useState('');
  const [aiStreaming, setAiStreaming] = useState(false);

  const startAiStream = () => {
    setAiStreaming(true);
    setAiStreamText('');
    const fullText = "Computer Science Engineering involves designing resilient software architectures, continuous AI biometrics, BLE mesh networking, and secure offline-first systems.";
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setAiStreamText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setAiStreaming(false);
      }
    }, 28);
  };

  return (
    <section id="lab" className="py-24 bg-[#040d0a] border-t border-slate-900 font-mono-tech relative select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
            INTERACTIVE TECHNICAL EXPERIMENTS
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            THE ENGINEERING LAB
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            Demonstrating technical capability through live functional developer tools and engineering mini-apps.
          </p>
        </div>

        {/* Experiment Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {labExperimentsData.map((exp) => {
            const isSelected = activeTab === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                    : 'os-glass-panel text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
                data-cursor="RUN LAB"
              >
                <span>{exp.title}</span>
              </button>
            );
          })}
        </div>

        {/* Experiment Main Stage Container */}
        <div className="os-glass-panel rounded-2xl border border-emerald-500/30 p-6 sm:p-8 shadow-2xl min-h-[420px]">
          
          {/* LAB 1: API Visualizer */}
          {activeTab === 'api-visualizer' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-sans text-xl font-bold text-slate-100">API REQUEST & LATENCY BENCHMARK</h3>
                  <p className="text-xs text-slate-400 font-sans">Simulate FastAPI / REST HTTP execution and inspect latency metrics.</p>
                </div>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                  FASTAPI / REST / HTTP 2
                </span>
              </div>

              {/* Endpoint Request Bar */}
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={apiMethod}
                  onChange={(e) => setApiMethod(e.target.value)}
                  className="bg-slate-900 text-emerald-400 font-bold text-xs p-3 rounded-xl border border-slate-800 focus:outline-none"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                </select>
                <input
                  type="text"
                  value={apiEndpoint}
                  onChange={(e) => setApiEndpoint(e.target.value)}
                  className="flex-1 bg-slate-900 text-xs text-slate-200 p-3 rounded-xl border border-slate-800 focus:outline-none"
                />
                <button
                  onClick={runApiBenchmark}
                  disabled={apiLoading}
                  className="px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  data-cursor="BENCHMARK"
                >
                  {apiLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                  <span>EXECUTE</span>
                </button>
              </div>

              {/* Response Inspector */}
              {apiResponse ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-950 p-5 rounded-xl border border-slate-800 text-xs">
                  <div className="md:col-span-4 space-y-3">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">RESPONSE STATUS</span>
                    <div className="text-emerald-400 font-bold text-lg flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{apiResponse.status} {apiResponse.statusText}</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-500 block">LATENCY BENCHMARK</span>
                      <span className="text-emerald-300 font-bold text-sm">{apiResponse.latencyMs} ms</span>
                    </div>
                  </div>

                  <div className="md:col-span-8 space-y-3">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">JSON PAYLOAD BODY</span>
                    <pre className="p-3 bg-slate-900 rounded-lg text-emerald-300/90 text-[11px] overflow-x-auto border border-slate-800">
                      <code>{JSON.stringify(apiResponse.body, null, 2)}</code>
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl">
                  Click EXECUTE to simulate an API request and inspect live telemetry.
                </div>
              )}
            </div>
          )}

          {/* LAB 2: WebSocket Monitor */}
          {activeTab === 'websocket-simulator' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-sans text-xl font-bold text-slate-100">WEBSOCKET FRAME MONITOR</h3>
                  <p className="text-xs text-slate-400 font-sans">Bidirectional frame transmission and connection state monitor.</p>
                </div>
                <button
                  onClick={toggleWsConnection}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    wsConnected ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-400 text-slate-950'
                  }`}
                >
                  {wsConnected ? 'DISCONNECT' : 'CONNECT WSS'}
                </button>
              </div>

              {/* Console log window */}
              <div className="h-64 bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-y-auto space-y-2 text-xs">
                {wsFrames.length > 0 ? (
                  wsFrames.map((f, i) => (
                    <div key={i} className="flex items-start space-x-2 font-mono-tech">
                      <span className="text-slate-600 text-[10px]">{f.time}</span>
                      <span className={`font-bold text-[10px] px-1.5 py-0.5 rounded ${
                        f.dir === 'IN' ? 'bg-emerald-950 text-emerald-400' : f.dir === 'OUT' ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {f.dir}
                      </span>
                      <span className="text-slate-300">{f.text}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-slate-600 pt-20">Click CONNECT WSS to initiate WebSocket socket handshake.</div>
                )}
              </div>

              {/* Input bar */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={wsMessage}
                  onChange={(e) => setWsMessage(e.target.value)}
                  placeholder='{"action":"SUBSCRIBE_RESQNET_NODES"}'
                  disabled={!wsConnected}
                  className="flex-1 bg-slate-900 text-xs text-slate-200 p-3 rounded-xl border border-slate-800 focus:outline-none disabled:opacity-50"
                />
                <button
                  onClick={sendWsFrame}
                  disabled={!wsConnected}
                  className="px-6 py-3 bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND FRAME</span>
                </button>
              </div>
            </div>
          )}

          {/* LAB 3: SQL Execution Analyzer */}
          {activeTab === 'sql-visualizer' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-sans text-xl font-bold text-slate-100">SQL QUERY EXPLAIN ANALYZER</h3>
                  <p className="text-xs text-slate-400 font-sans">Simulate PostgreSQL / SQLite execution query plans & index scans.</p>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">SELECT QUERY TEMPLATE</span>
                <textarea
                  value={selectedQuery}
                  onChange={(e) => setSelectedQuery(e.target.value)}
                  className="w-full bg-slate-950 text-emerald-300 font-mono-tech text-xs p-3.5 rounded-xl border border-slate-800 h-24 focus:outline-none"
                />
                <button
                  onClick={runSqlExplain}
                  className="px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 cursor-pointer"
                >
                  <Database className="w-4 h-4" />
                  <span>EXPLAIN ANALYZER</span>
                </button>
              </div>

              {explainPlan && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between text-emerald-400 font-bold border-b border-slate-900 pb-2">
                    <span>EXECUTION PLAN RESULT</span>
                    <span>{explainPlan.executionTimeMs} ms</span>
                  </div>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    {explainPlan.plan.map((line, i) => (
                      <div key={i} className="font-mono-tech">{line}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* LAB 4: JWT Inspector */}
          {activeTab === 'jwt-inspector' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-sans text-xl font-bold text-slate-100">JWT AUTHENTICATION INSPECTOR</h3>
                  <p className="text-xs text-slate-400 font-sans">Inspect cryptographic signature verification and base64 payload decoding.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-6 space-y-3">
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">ENCODED JWT TOKEN</span>
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-[10px] break-all font-mono-tech text-slate-300">
                    {jwtToken}
                  </div>
                </div>

                <div className="md:col-span-6 space-y-3">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase block">DECODED CLAIMS PAYLOAD</span>
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-emerald-500/30 text-[11px] font-mono-tech text-emerald-300 space-y-1">
                    <div>{'{'}</div>
                    <div className="pl-4 text-emerald-300">"sub": "shrivasanth-01a",</div>
                    <div className="pl-4 text-emerald-300">"role": "CS Engineer & Full-Stack",</div>
                    <div className="pl-4 text-emerald-300">"institution": "SRM IST Tiruchirapalli",</div>
                    <div className="pl-4 text-emerald-300">"iat": 1741212000</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LAB 5: AI Streamer */}
          {activeTab === 'ai-streamer' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-sans text-xl font-bold text-slate-100">LLM SSE TOKEN STREAM VISUALIZER</h3>
                  <p className="text-xs text-slate-400 font-sans">Demonstrate chunked Server-Sent Events (SSE) streaming token by token.</p>
                </div>
                <button
                  onClick={startAiStream}
                  disabled={aiStreaming}
                  className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>GENERATE STREAM</span>
                </button>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 min-h-[160px] flex flex-col justify-between">
                <p className="text-sm font-sans text-emerald-200 leading-relaxed">
                  {aiStreamText || <span className="text-slate-600 font-mono-tech text-xs">Click GENERATE STREAM to test live SSE token streaming...</span>}
                  {aiStreaming && <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />}
                </p>
                <div className="pt-4 border-t border-slate-900 text-[10px] text-slate-500 flex justify-between font-mono-tech">
                  <span>PROTOCOL: SERVER-SENT EVENTS (SSE)</span>
                  <span className="text-emerald-400 font-bold">TTFT: 18ms</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
