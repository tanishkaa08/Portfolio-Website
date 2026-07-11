'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaTrophy, FaCode, FaGlobe, FaUsers, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

type ProofLink = { label: string; href: string };

const achievements: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  links?: ProofLink[];
}[] = [
  {
    icon: <FaTrophy className="text-pink-800" size={22} />,
    title: 'Smart India Hackathon 2025 Grand Finalist',
    detail: 'Top 5 out of 1,42,000+ submissions',
    links: [
      {
        label: 'Acceptance',
        href: 'https://drive.google.com/file/d/1ysC8fCgscKx0m3l8eQ5R10Ta6TAa8J2a/view?usp=drive_link',
      },
    ],
  },
  {
    icon: <FaGlobe className="text-pink-800" size={22} />,
    title: 'Summer of Bitcoin 2026 & Code for GovTech 2025',
    detail: 'Selected for international and national open-source programs',
    links: [
      {
        label: 'SoB Acceptance',
        href: 'https://drive.google.com/file/d/1qDOi_FltMdPEnDtuk7b0z8m82Fimz6Yl/view?usp=sharing',
      },
      {
        label: 'C4GT Certificate',
        href: 'https://drive.google.com/file/d/1WIjqiKkpZjW2njFouFj7SnNsNtWNpihy/view?usp=drive_link',
      },
    ],
  },
  {
    icon: <FaCode className="text-pink-800" size={22} />,
    title: '750+ coding problems solved',
    detail: 'Across LeetCode, Codeforces, and other platforms',
    links: [
      { label: 'LeetCode', href: 'https://leetcode.com/u/tanishkaa08/' },
      { label: 'Codeforces', href: 'https://codeforces.com/profile/Tanishkaa' },
    ],
  },
  {
    icon: <FaCertificate className="text-pink-800" size={22} />,
    title: 'Published on Adobe Exchange',
    detail: 'Premiere Pro subtitle automation extension live on Adobe’s official marketplace',
    links: [
      {
        label: 'Adobe Exchange',
        href: 'https://exchange.adobe.com/apps/cc/204683/click-and-align-subtitle-tool',
      },
    ],
  },
  {
    icon: <FaTrophy className="text-pink-800" size={22} />,
    title: 'Newbie 2.0 Girl Winner',
    detail: 'Competitive coding contest at IIIT Jabalpur',
  },
  {
    icon: <FaCertificate className="text-pink-800" size={22} />,
    title: 'Postman API Student Expert',
    detail: 'Completed the Postman API Fundamentals Student Expert certification',
    links: [
      {
        label: 'Certificate',
        href: 'https://badgr.com/public/assertions/BNp1mEe1RtWxDYez2ZnR6g',
      },
    ],
  },
  {
    icon: <FaUsers className="text-pink-800" size={22} />,
    title: 'BitByte Programming Club Core Member',
    detail: 'Mentored 30+ juniors; contests, workshops, and campus tech community',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-14">
            Achievements
          </h2>
          <ul className="max-w-3xl mx-auto space-y-5">
            {achievements.map((item) => (
              <motion.li
                key={item.title}
                variants={itemVariants}
                className="flex gap-4 items-start bg-white/70 backdrop-blur-md border border-gray-200/80 p-5 rounded-lg shadow-md"
              >
                <div className="mt-0.5 shrink-0 w-10 h-10 rounded-full bg-[#FDECF0] flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-semibold text-pink-800">{item.title}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                  {item.links && item.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-800 hover:text-highlight transition-colors underline underline-offset-2"
                        >
                          {link.label}
                          <FaExternalLinkAlt size={10} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
