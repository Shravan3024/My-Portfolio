import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, Activity } from 'lucide-react';
import './GithubShowcase.css';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface Stats {
  public_repos: number;
  followers: number;
  following: number;
}

const Showcase = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const username = "Shravan3024";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following
        });

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=4`);
        const reposData = await reposRes.json();
        setRepos(reposData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="github" className="section-container">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        GitHub Showcase
      </motion.h2>

      <div className="github-bento">
        {/* Main Contribution Graph Card */}
        <motion.div 
          className="gh-card gh-span-full glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="gh-card-header">
            <Activity className="text-gradient" />
            <h3>Contribution Graph</h3>
          </div>
          <div className="gh-chart-container">
            {/* Using an open source API to generate the contribution SVG */}
            <img 
              src={`https://ghchart.rshah.org/39d353/${username}`} 
              alt={`${username}'s chart`} 
              className="gh-chart"
            />
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div 
          className="gh-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="gh-card-header">
            <FaGithub className="text-gradient" />
            <h3>GitHub Statistics</h3>
          </div>
          {loading ? (
            <div className="gh-loading">Loading stats...</div>
          ) : (
            <div className="gh-stats-grid">
              <div className="gh-stat-item">
                <span className="gh-stat-value">{stats?.public_repos}</span>
                <span className="gh-stat-label">Repositories</span>
              </div>
              <div className="gh-stat-item">
                <span className="gh-stat-value">{stats?.followers}</span>
                <span className="gh-stat-label">Followers</span>
              </div>
              <div className="gh-stat-item">
                <span className="gh-stat-value">{stats?.following}</span>
                <span className="gh-stat-label">Following</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Top Repositories */}
        <motion.div 
          className="gh-card gh-span-2 glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="gh-card-header">
            <BookOpen className="text-gradient" />
            <h3>Top Repositories</h3>
          </div>
          
          {loading ? (
            <div className="gh-loading">Loading repositories...</div>
          ) : (
            <div className="gh-repos-grid">
              {repos.map(repo => (
                <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id} className="gh-repo-item glass">
                  <h4 className="gh-repo-name">{repo.name}</h4>
                  <p className="gh-repo-desc">{repo.description || "No description provided."}</p>
                  <div className="gh-repo-meta">
                    {repo.language && <span className="gh-repo-lang"><span className="lang-dot"></span>{repo.language}</span>}
                    <span className="gh-repo-stat"><Star size={14} /> {repo.stargazers_count}</span>
                    <span className="gh-repo-stat"><GitFork size={14} /> {repo.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
