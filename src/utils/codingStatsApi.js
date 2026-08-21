// Real-time API service for GitHub and LeetCode developer stats

const GITHUB_USERNAME = 'ravixpanchal';
const LEETCODE_USERNAME = 'ravixpanchal';

export const fetchGitHubStats = async () => {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!res.ok) throw new Error('GitHub API response not ok');
    const data = await res.json();
    return {
      success: true,
      username: data.login || GITHUB_USERNAME,
      name: data.name || 'Ravi Panchal',
      avatarUrl: data.avatar_url || `https://github.com/${GITHUB_USERNAME}.png`,
      publicRepos: data.public_repos ?? 15,
      followers: data.followers ?? 2,
      following: data.following ?? 1,
      bio: data.bio || 'Btech AI&DS\'27 @GSV',
      location: data.location || 'India',
      htmlUrl: data.html_url || `https://github.com/${GITHUB_USERNAME}`,
      chartUrl: `https://ghchart.rshah.org/499300/${GITHUB_USERNAME}`
    };
  } catch (err) {
    return {
      success: false,
      username: GITHUB_USERNAME,
      name: 'Ravi Panchal',
      avatarUrl: `https://github.com/${GITHUB_USERNAME}.png`,
      publicRepos: 18,
      followers: 2,
      following: 1,
      bio: 'Btech AI&DS\'27 @GSV | Fullstack & AI/ML Engineer',
      location: 'India',
      htmlUrl: `https://github.com/${GITHUB_USERNAME}`,
      chartUrl: `https://ghchart.rshah.org/499300/${GITHUB_USERNAME}`
    };
  }
};

export const fetchLeetCodeStats = async () => {
  // Real baseline metrics from live profile
  const defaultStats = {
    success: false,
    username: LEETCODE_USERNAME,
    totalSolved: 392,
    easySolved: 145,
    mediumSolved: 200,
    hardSolved: 47,
    ranking: 324504,
    rating: 1422,
    globalRanking: 642015,
    topPercentage: 73.36,
    attendedContests: 23,
    badgesCount: 10,
    recentBadge: '100 Days Badge 2026',
    profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`
  };

  try {
    // Attempt official GraphQL endpoint fetch
    const graphqlQuery = {
      query: `query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
            reputation
          }
        }
        userContestRanking(username: $username) {
          rating
          globalRanking
          topPercentage
          attendedContestsCount
        }
      }`,
      variables: { username: LEETCODE_USERNAME }
    };

    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphqlQuery)
    });

    if (!res.ok) throw new Error('GraphQL request failed');
    const json = await res.json();

    if (json.data && json.data.matchedUser) {
      const submissions = json.data.matchedUser.submitStats?.acSubmissionNum || [];
      const totalItem = submissions.find(s => s.difficulty === 'All');
      const easyItem = submissions.find(s => s.difficulty === 'Easy');
      const mediumItem = submissions.find(s => s.difficulty === 'Medium');
      const hardItem = submissions.find(s => s.difficulty === 'Hard');
      const contest = json.data.userContestRanking || {};

      return {
        success: true,
        username: LEETCODE_USERNAME,
        totalSolved: totalItem ? totalItem.count : defaultStats.totalSolved,
        easySolved: easyItem ? easyItem.count : defaultStats.easySolved,
        mediumSolved: mediumItem ? mediumItem.count : defaultStats.mediumSolved,
        hardSolved: hardItem ? hardItem.count : defaultStats.hardSolved,
        ranking: json.data.matchedUser.profile?.ranking || defaultStats.ranking,
        rating: contest.rating ? Math.round(contest.rating) : defaultStats.rating,
        globalRanking: contest.globalRanking || defaultStats.globalRanking,
        topPercentage: contest.topPercentage || defaultStats.topPercentage,
        attendedContests: contest.attendedContestsCount || defaultStats.attendedContests,
        badgesCount: defaultStats.badgesCount,
        recentBadge: defaultStats.recentBadge,
        profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`
      };
    }
  } catch (err) {
    // Direct GraphQL blocked or CORS restriction, fallback to exact profile stats
  }

  return defaultStats;
};
