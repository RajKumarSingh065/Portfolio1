import React from 'react';
import { SOCIAL } from '../constants/index';

export default function SocialProof() {
  const { github, leetcode, hackerrank, tryhackme } = SOCIAL || {};
  return (
    <section id="social" className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-6xl px-6">
        <h2 className="text-4xl text-center mb-12">Social Proof</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* HackerRank (replaces CodeChef) */}
          <div className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/30">
            <h3 className="text-xl mb-4">HackerRank</h3>
            {hackerrank ? (
              <div className="space-y-4 text-neutral-300">
                <a
                  href={`https://www.hackerrank.com/profile/${hackerrank}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-green-300"
                >
                  View HackerRank Profile
                </a>
                <img
                  alt="HackerRank Badge"
                  src={`https://img.shields.io/badge/HackerRank-${hackerrank}-2EC866?logo=hackerrank&logoColor=white`}
                />
              </div>
            ) : (
              <p className="text-neutral-400">Add your HackerRank username in constants to enable this card.</p>
            )}
          </div>

          {/* LeetCode */}
          <div className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/30">
            <h3 className="text-xl mb-4">LeetCode</h3>
            {leetcode ? (
              <div className="space-y-4 text-neutral-300">
                <a
                  href={`https://leetcode.com/${leetcode}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-yellow-300"
                >
                  View LeetCode Profile
                </a>
                <img
                  alt="LeetCode Badge"
                  src={`https://img.shields.io/badge/LeetCode-${leetcode}-FFA116?logo=leetcode&logoColor=white`}
                />
              </div>
            ) : (
              <p className="text-neutral-400">Add your LeetCode username in constants to enable this card.</p>
            )}
          </div>

          {/* TryHackMe (badge via iframe) */}
          <div className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/30">
            <h3 className="text-xl mb-4">TryHackMe</h3>
            {tryhackme ? (
              <div className="space-y-4 text-neutral-300">
                <a
                  href={`https://tryhackme.com/p/${tryhackme}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-red-300"
                >
                  View TryHackMe Profile
                </a>
                <iframe
                  title="TryHackMe Badge"
                  src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2215885"
                  className="w-full border-0 rounded-lg"
                  style={{ border: 'none' }}
                  loading="lazy"
                />
              </div>
            ) : (
              <p className="text-neutral-400">Add your TryHackMe username in constants to enable this card.</p>
            )}
          </div>

          {/* Optional: keep GitHub at a glance */}
          <div className="rounded-xl border border-neutral-800 p-6 bg-neutral-900/30">
            <h3 className="text-xl mb-4">GitHub</h3>
            {github ? (
              <div className="space-y-4">
                <a
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300"
                >
                  View GitHub Profile
                </a>
                <img
                  className="w-full max-w-lg"
                  alt="GitHub Stats"
                  src={`https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&theme=radical&hide_border=true`}
                />
              </div>
            ) : (
              <p className="text-neutral-400">Add your GitHub username in constants to enable this card.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
