import React, { useState, useEffect } from 'react';
import { fetchGitHubStats, fetchLeetCodeStats } from '../utils/codingStatsApi';

export const CodingStatsWidget = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadStats = async () => {
      setLoading(true);
      const [gh, lc] = await Promise.all([fetchGitHubStats(), fetchLeetCodeStats()]);
      if (isMounted) {
        setGithubData(gh);
        setLeetcodeData(lc);
        setLoading(false);
      }
    };

    loadStats();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-[#320e26] border border-[#603050] p-4 rounded-lg font-mono text-xs text-[#f2b5d6] animate-pulse my-3">
        ⚡ Fetching live GitHub & LeetCode statistics from APIs...
      </div>
    );
  }

  return (
    <div className="space-y-4 my-3 max-w-4xl font-sans select-text">
      {/* GitHub Real-Time Card */}
      <div className="bg-[#320e26] border border-[#603050] rounded-xl p-4 sm:p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#603050] pb-3 mb-4">
          <div className="flex items-center gap-3">
            <img
              src={githubData.avatarUrl}
              alt="GitHub Avatar"
              className="w-12 h-12 rounded-full border-2 border-[#8adb4d] shadow"
            />
            <div>
              <div className="flex items-center gap-2 font-mono font-bold text-base text-white">
                <span>🐙 GitHub Profile</span>
                <span className="text-xs text-[#8adb4d]">@{githubData.username}</span>
              </div>
              <p className="text-xs text-[#e0d0d8]">{githubData.bio}</p>
            </div>
          </div>
          <a
            href={githubData.htmlUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#502741] hover:bg-[#603050] text-white text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-[#603050] transition-colors self-end sm:self-center"
          >
            Visit @{githubData.username} →
          </a>
        </div>

        {/* GitHub Key Stats Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 font-mono text-center mb-4">
          <div className="bg-[#28051e] p-2 sm:p-2.5 rounded-lg border border-[#502741]">
            <div className="text-base sm:text-lg font-bold text-[#8adb4d]">{githubData.publicRepos}</div>
            <div className="text-[10px] sm:text-[11px] text-[#e0d0d8] truncate">Public Repos</div>
          </div>
          <div className="bg-[#28051e] p-2 sm:p-2.5 rounded-lg border border-[#502741]">
            <div className="text-base sm:text-lg font-bold text-[#f2b5d6]">{githubData.followers}</div>
            <div className="text-[10px] sm:text-[11px] text-[#e0d0d8] truncate">Followers</div>
          </div>
          <div className="bg-[#28051e] p-2 sm:p-2.5 rounded-lg border border-[#502741]">
            <div className="text-base sm:text-lg font-bold text-[#ffb59e]">{githubData.following}</div>
            <div className="text-[10px] sm:text-[11px] text-[#e0d0d8] truncate">Following</div>
          </div>
        </div>

        {/* GitHub Contributions Heatmap Image */}
        <div>
          <div className="text-xs font-mono text-[#f2b5d6] font-bold mb-2 flex items-center justify-between flex-wrap gap-1">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">grid_view</span>
              <span>Live GitHub Activity Calendar</span>
            </div>
            <span className="text-[10px] text-[#ffb59e] font-sans md:hidden">👈 Swipe graph to scroll 👉</span>
          </div>
          <div className="overflow-x-auto p-2 bg-[#1d0316] rounded-lg border border-[#502741] scrollbar-thin touch-pan-x">
            <img
              src={githubData.chartUrl}
              alt="GitHub Contribution Calendar"
              className="min-w-[600px] sm:min-w-[650px] w-full filter contrast-125"
            />
          </div>
        </div>
      </div>

      {/* LeetCode Real-Time Card */}
      <div className="bg-[#320e26] border border-[#603050] rounded-xl p-4 sm:p-5 shadow-lg font-sans">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#603050] pb-3 mb-4">
          <div>
            <div className="flex items-center gap-2 font-mono font-bold text-base text-white">
              <span>🧠 LeetCode Competitive Coding</span>
              <span className="text-xs text-[#ffb59e]">@{leetcodeData.username}</span>
            </div>
            <p className="text-xs text-[#e0d0d8] font-mono mt-0.5">
              Contest Rating: <span className="text-[#8adb4d] font-bold">{leetcodeData.rating}</span> | Top <span className="text-[#f2b5d6] font-bold">{leetcodeData.topPercentage}%</span> ({leetcodeData.attendedContests} Contests)
            </p>
          </div>
          <a
            href={leetcodeData.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#e95420] hover:bg-[#c33900] text-white text-xs font-mono font-bold px-3.5 py-1.5 rounded-lg transition-colors self-end sm:self-center shadow"
          >
            View LeetCode Profile →
          </a>
        </div>

        {/* LeetCode Problem Solved Bars */}
        <div className="space-y-3 font-mono">
          <div className="flex flex-wrap justify-between items-center text-xs gap-2">
            <span className="text-white font-bold">
              Total Solved: <span className="text-[#8adb4d] text-sm">{leetcodeData.totalSolved}</span> / 4029 Problems
            </span>
            <span className="text-[#e0d0d8] text-xs">
              Global Rank: <span className="text-[#f2b5d6] font-bold">#{leetcodeData.ranking?.toLocaleString()}</span>
            </span>
          </div>

          <div className="space-y-2">
            {/* Easy Bar */}
            <div>
              <div className="flex justify-between text-[11px] text-[#e0d0d8] mb-1">
                <span className="text-[#8adb4d] font-bold">Easy</span>
                <span>{leetcodeData.easySolved} / 960 Solved</span>
              </div>
              <div className="w-full bg-[#1d0316] h-2.5 rounded-full overflow-hidden border border-[#502741]">
                <div className="bg-[#8adb4d] h-full rounded-full" style={{ width: `${Math.min(100, (leetcodeData.easySolved / 960) * 100)}%` }}></div>
              </div>
            </div>

            {/* Medium Bar */}
            <div>
              <div className="flex justify-between text-[11px] text-[#e0d0d8] mb-1">
                <span className="text-[#ffb59e] font-bold">Medium</span>
                <span>{leetcodeData.mediumSolved} / 2103 Solved</span>
              </div>
              <div className="w-full bg-[#1d0316] h-2.5 rounded-full overflow-hidden border border-[#502741]">
                <div className="bg-[#ffb59e] h-full rounded-full" style={{ width: `${Math.min(100, (leetcodeData.mediumSolved / 2103) * 100)}%` }}></div>
              </div>
            </div>

            {/* Hard Bar */}
            <div>
              <div className="flex justify-between text-[11px] text-[#e0d0d8] mb-1">
                <span className="text-[#ffb4ab] font-bold">Hard</span>
                <span>{leetcodeData.hardSolved} / 966 Solved</span>
              </div>
              <div className="w-full bg-[#1d0316] h-2.5 rounded-full overflow-hidden border border-[#502741]">
                <div className="bg-[#ffb4ab] h-full rounded-full" style={{ width: `${Math.min(100, (leetcodeData.hardSolved / 966) * 100)}%` }}></div>
              </div>
            </div>
          </div>

          {/* Badges Info */}
          <div className="mt-3 pt-2 border-t border-[#502741] flex flex-wrap justify-between items-center text-xs text-[#e0d0d8]">
            <div>🏆 <span className="text-white font-bold">{leetcodeData.badgesCount || 10} Badges</span></div>
            <div>Latest: <span className="text-[#8adb4d] font-bold">{leetcodeData.recentBadge || '100 Days Badge 2026'}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
