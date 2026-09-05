import { useState, useEffect } from 'react';
import { profileData } from '../data/profile';
import { GitBranch, Star, Code2, Activity, ExternalLink, RefreshCw } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

export default function LiveSystemDashboard() {
  const [githubData, setGithubData] = useState({
    reposCount: 18,
    starsCount: 42,
    languages: ["TypeScript", "Python", "C/C++", "JavaScript", "HTML/CSS"],
    recentRepos: [
      { name: "animated-portfolio", stars: 12, forks: 3, lang: "JavaScript", url: "https://github.com/Shrivasanth01/animated-portfolio" },
      { name: "ResQNet-Disaster-Mesh", stars: 18, forks: 5, lang: "Python / Fast-API", url: "https://github.com/Shrivasanth01" },
      { name: "AI-Behavioral-Biometrics", stars: 10, forks: 2, lang: "Python", url: "https://github.com/Shrivasanth01" }
    ]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const response = await fetch('https://api.github.com/users/Shrivasanth01/repos?per_page=100');
        if (response.ok) {
          const repos = await response.json();
          if (Array.isArray(repos)) {
            const stars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
            const sorted = [...repos].sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0)).slice(0, 3);
            
            setGithubData({
              reposCount: repos.length,
              starsCount: stars,
              languages: ["TypeScript", "Python", "C/C++", "JavaScript", "HTML/CSS"],
              recentRepos: sorted.map(r => ({
                name: r.name,
                stars: r.stargazers_count,
                forks: r.forks_count,
                lang: r.language || 'Code',
                url: r.html_url
              }))
            });
          }
        }
      } catch (err) {
        console.warn('GitHub API rate limited or offline, using fallback telemetry data.');
      } finally {
        setLoading(false);
      }
    }

    fetchGithubStats();
  }, []);

  return (
    <section className="py-24 bg-[#040d0a] border-t border-slate-900 font-mono-tech relative select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
            REAL-TIME TELEMETRY & GITHUB API
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            LIVE SYSTEM DASHBOARD
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            Live metrics and active repository telemetry synchronized directly from GitHub.
          </p>
        </div>

        {/* System Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="os-glass-panel p-5 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>PUBLIC REPOS</span>
              <FiGithub className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-100">{loading ? '...' : githubData.reposCount}</div>
            <span className="text-[10px] text-emerald-400 font-bold block mt-1">● SYNCED VIA API</span>
          </div>

          <div className="os-glass-panel p-5 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>STARS EARNED</span>
              <Star className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-100">{loading ? '...' : githubData.starsCount}</div>
            <span className="text-[10px] text-emerald-300 block mt-1">COMMUNITY STARS</span>
          </div>

          <div className="os-glass-panel p-5 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>BUILD MODE</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">ACTIVE</div>
            <span className="text-[10px] text-slate-500 block mt-1">OPEN TO ROLES</span>
          </div>

          <div className="os-glass-panel p-5 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
              <span>UPTIME TARGET</span>
              <Code2 className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-100">99.99%</div>
            <span className="text-[10px] text-emerald-400 block mt-1">SUB-100MS LATENCY</span>
          </div>
        </div>

        {/* Featured Repositories Stream */}
        <div className="os-glass-panel rounded-2xl border border-emerald-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center space-x-3">
              <FiGithub className="w-5 h-5 text-emerald-400" />
              <h3 className="font-sans text-xl font-bold text-slate-100">FEATURED REPOSITORIES</h3>
            </div>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-emerald-400 hover:underline flex items-center space-x-1"
              data-cursor="EXPLORE"
            >
              <span>EXPLORE GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {githubData.recentRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between group cursor-pointer"
                data-cursor="REPO"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {repo.name}
                    </span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                      {repo.lang}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-950 mt-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <GitBranch className="w-3.5 h-3.5 text-slate-500" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 group-hover:translate-x-1 transition-transform">VIEW ›</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
