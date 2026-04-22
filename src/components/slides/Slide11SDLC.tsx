import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkParticles from "../NetworkParticles";

const PIPELINE_STEPS = [
  {
    agent: "Orchestrator",
    target: "Parse & Assign",
    title: "Parse Command & Route",
    color: "hsl(200 80% 55%)",
    bg: "hsl(200 80% 55% / 0.15)",
    border: "hsl(200 80% 55% / 0.4)",
  },
  {
    agent: "Story Manager",
    target: "Jira",
    title: "Fetch Bug & Transition",
    color: "hsl(142 60% 50%)",
    bg: "hsl(142 60% 50% / 0.15)",
    border: "hsl(142 60% 50% / 0.4)",
  },
  {
    agent: "Code Specialist",
    target: "Codebase",
    title: "Root Cause Analysis",
    color: "hsl(45 80% 55%)",
    bg: "hsl(45 80% 55% / 0.15)",
    border: "hsl(45 80% 55% / 0.4)",
  },
  {
    agent: "Code Specialist",
    target: "Source Files",
    title: "Implement Fix",
    color: "hsl(45 80% 55%)",
    bg: "hsl(45 80% 55% / 0.15)",
    border: "hsl(45 80% 55% / 0.4)",
  },
  {
    agent: "Quality Specialist",
    target: "Test + Gate",
    title: "Regression Test & Gate",
    color: "hsl(330 60% 60%)",
    bg: "hsl(330 60% 60% / 0.15)",
    border: "hsl(330 60% 60% / 0.4)",
  },
  {
    agent: "DevOps Specialist",
    target: "CI/CD",
    title: "Commit, Push & Build",
    color: "hsl(200 80% 55%)",
    bg: "hsl(200 80% 55% / 0.15)",
    border: "hsl(200 80% 55% / 0.4)",
  },
  {
    agent: "DevOps Specialist",
    target: "Azure VMs",
    title: "Verify Azure VMs",
    color: "hsl(200 80% 55%)",
    bg: "hsl(200 80% 55% / 0.15)",
    border: "hsl(200 80% 55% / 0.4)",
  },
  {
    agent: "Quality Specialist",
    target: "Report",
    title: "Generate Bug Fix Report",
    color: "hsl(330 60% 60%)",
    bg: "hsl(330 60% 60% / 0.15)",
    border: "hsl(330 60% 60% / 0.4)",
  },
  {
    agent: "Story Manager",
    target: "Jira Update",
    title: "Update Jira & Close",
    color: "hsl(142 60% 50%)",
    bg: "hsl(142 60% 50% / 0.15)",
    border: "hsl(142 60% 50% / 0.4)",
  },
];

const STEP_INTERVAL = 8000;

function AnimStep1() {
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <rect x="60" y="10" width="300" height="34" rx="6" fill="hsl(220 15% 12%)" stroke="hsl(200 80% 45%)" strokeWidth="1" />
        <text x="75" y="28" fill="hsl(200 80% 65%)" fontSize="7" fontFamily="monospace">/orchestrate fix bug EPMICMPAT-{"{N}"}</text>
        <text x="75" y="38" fill="hsl(215 20% 40%)" fontSize="5.5">User Command</text>
      </motion.g>

      <motion.path d="M210 48 L210 72" fill="none" stroke="hsl(200 80% 55%)" strokeWidth="1.5" strokeDasharray="4 3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
      <motion.polygon points="206,72 210,80 214,72" fill="hsl(200 80% 55%)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />

      <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}>
        <rect x="110" y="82" width="200" height="70" rx="10" fill="hsl(200 50% 14%)" stroke="hsl(200 80% 55%)" strokeWidth="1.5" />
        <text x="210" y="100" textAnchor="middle" fill="hsl(200 80% 70%)" fontSize="10" fontWeight="700">Orchestrator</text>
        <motion.text x="210" y="118" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="7"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          Detects: "fix bug" workflow
        </motion.text>
        <motion.text x="210" y="132" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="7"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          Extracts: EPMICMPAT-{"{N}"}
        </motion.text>
      </motion.g>

      <motion.path d="M210 156 L210 178" fill="none" stroke="hsl(200 80% 55%)" strokeWidth="1.5" strokeDasharray="4 3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />
      <motion.polygon points="206,178 210,186 214,178" fill="hsl(200 80% 55%)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />

      <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3, type: "spring" }}>
        <rect x="120" y="188" width="180" height="36" rx="8" fill="hsl(142 40% 14%)" stroke="hsl(142 60% 50%)" strokeWidth="1.2" />
        <text x="210" y="205" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="8" fontWeight="600">Assigns Step 1 → Story Manager</text>
        <text x="210" y="218" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="6.5">Bug Fix Pipeline initiated</text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8 }}>
        <rect x="60" y="235" width="300" height="18" rx="4" fill="hsl(200 80% 55% / 0.1)" stroke="hsl(200 80% 55% / 0.3)" strokeWidth="0.8" />
        <text x="210" y="247" textAnchor="middle" fill="hsl(200 80% 60%)" fontSize="7">Announcing 9-step plan to user...</text>
      </motion.g>
    </svg>
  );
}

function AnimStep2() {
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <rect x="20" y="10" width="120" height="240" rx="8" fill="hsl(220 20% 14%)" stroke="hsl(215 20% 28%)" strokeWidth="1" />
      <text x="80" y="32" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="11" fontWeight="600">To Do</text>
      <rect x="160" y="10" width="120" height="240" rx="8" fill="hsl(220 20% 14%)" stroke="hsl(142 60% 40%)" strokeWidth="1.5" />
      <text x="220" y="32" textAnchor="middle" fill="hsl(142 60% 55%)" fontSize="11" fontWeight="600">In Progress</text>
      <rect x="300" y="10" width="100" height="240" rx="8" fill="hsl(220 20% 14%)" stroke="hsl(215 20% 28%)" strokeWidth="1" />
      <text x="350" y="32" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="11" fontWeight="600">In Review</text>

      <rect x="32" y="95" width="96" height="36" rx="5" fill="hsl(220 15% 18%)" stroke="hsl(215 20% 30%)" strokeWidth="0.8" />
      <text x="80" y="115" textAnchor="middle" fill="hsl(215 20% 45%)" fontSize="8">EPMICMPAT-15</text>
      <rect x="32" y="140" width="96" height="36" rx="5" fill="hsl(220 15% 18%)" stroke="hsl(215 20% 30%)" strokeWidth="0.8" />
      <text x="80" y="160" textAnchor="middle" fill="hsl(215 20% 45%)" fontSize="8">EPMICMPAT-16</text>

      <motion.g initial={{ x: 0 }} animate={{ x: 140 }} transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}>
        <motion.rect x="32" y="48" width="96" height="36" rx="5"
          fill="hsl(142 30% 18%)" stroke="hsl(142 60% 50%)" strokeWidth="1.5"
          animate={{ filter: ["drop-shadow(0 0 4px hsl(142 60% 50% / 0.3))", "drop-shadow(0 0 8px hsl(142 60% 50% / 0.6))", "drop-shadow(0 0 4px hsl(142 60% 50% / 0.3))"] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.text x="80" y="63" textAnchor="middle" fill="hsl(142 60% 75%)" fontSize="8" fontWeight="600">EPMICMPAT-{"{N}"}</motion.text>
        <motion.text x="80" y="76" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="6">Cache eviction bug</motion.text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <motion.path d="M130 66 L155 66" fill="none" stroke="hsl(142 60% 50%)" strokeWidth="2" strokeDasharray="4 3"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} />
        <motion.polygon points="155,62 163,66 155,70" fill="hsl(142 60% 50%)"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} />
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        <rect x="165" y="210" width="110" height="22" rx="4" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50% / 0.4)" strokeWidth="1" />
        <text x="220" y="224" textAnchor="middle" fill="hsl(142 60% 75%)" fontSize="9" fontWeight="600">Status: In Progress</text>
      </motion.g>
    </svg>
  );
}

function AnimStep3() {
  const files = ["CacheServiceImpl.java", "LRUEvictionStrategy.java", "FailureDetector.java", "ReplicationManager.java"];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      {files.map((f, i) => (
        <motion.g key={f} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.4 }}>
          <rect x="20" y={20 + i * 52} width="200" height="40" rx="6" fill="hsl(220 15% 16%)" stroke={i === 1 ? "hsl(45 80% 55%)" : "hsl(215 20% 28%)"} strokeWidth={i === 1 ? 1.5 : 0.8} />
          <text x="50" y={36 + i * 52} fill={i === 1 ? "hsl(45 80% 75%)" : "hsl(215 20% 55%)"} fontSize="8" fontWeight={i === 1 ? "600" : "400"}>{f}</text>
          <text x="50" y={50 + i * 52} fill="hsl(215 20% 40%)" fontSize="6.5">Scanning...</text>
          <motion.rect x="140" y={44 + i * 52} width="0" height="3" rx="1.5" fill="hsl(45 80% 55%)"
            animate={{ width: 70 }} transition={{ delay: 0.5 + i * 0.4, duration: 0.8 }} />
        </motion.g>
      ))}

      <motion.g animate={{ y: [20, 176], x: [0, 5, 0, -5, 0] }}
        transition={{ y: { duration: 2, delay: 0.3 }, x: { repeat: Infinity, duration: 0.8 } }}>
        <circle cx="235" cy="30" r="12" fill="none" stroke="hsl(45 80% 55%)" strokeWidth="1.5" />
        <line x1="243" y1="38" x2="252" y2="47" stroke="hsl(45 80% 55%)" strokeWidth="2" />
      </motion.g>

      <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.5 }}>
        <rect x="260" y="30" width="150" height="90" rx="8" fill="hsl(45 40% 12%)" stroke="hsl(45 80% 55%)" strokeWidth="1.5" />
        <text x="335" y="50" textAnchor="middle" fill="hsl(45 80% 75%)" fontSize="9" fontWeight="600">Root Cause Found</text>
        <line x1="275" y1="58" x2="395" y2="58" stroke="hsl(45 80% 55% / 0.3)" strokeWidth="0.5" />
        <text x="335" y="74" textAnchor="middle" fill="hsl(215 20% 60%)" fontSize="7">LRUEvictionStrategy.java</text>
        <text x="335" y="88" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="6.5">Line 142: Incorrect TTL</text>
        <text x="335" y="100" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="6.5">comparison logic</text>
        <motion.rect x="280" y="106" width="110" height="8" rx="2" fill="hsl(0 60% 45% / 0.3)" stroke="hsl(0 60% 55%)" strokeWidth="0.5"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} />
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>
        <rect x="260" y="140" width="150" height="70" rx="8" fill="hsl(45 40% 12%)" stroke="hsl(45 80% 45%)" strokeWidth="1" />
        <text x="335" y="160" textAnchor="middle" fill="hsl(45 80% 65%)" fontSize="9" fontWeight="600">Fix Planned</text>
        <text x="335" y="178" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="7">1 file, 3 lines changed</text>
        <text x="335" y="192" textAnchor="middle" fill="hsl(215 20% 45%)" fontSize="6.5">Hotspot risk: Medium</text>
      </motion.g>
    </svg>
  );
}

function AnimStep4() {
  const codeBefore = [
    { text: "if (entry.ttl < now) {", type: "normal" },
    { text: "  evict(entry.key);", type: "remove" },
    { text: "  return null;", type: "remove" },
    { text: "}", type: "normal" },
  ];
  const codeAfter = [
    { text: "if (entry.expireAt <= now) {", type: "add" },
    { text: "  evict(entry.key);", type: "add" },
    { text: "  return null;", type: "add" },
  ];

  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <rect x="15" y="10" width="390" height="240" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(215 20% 25%)" strokeWidth="1" />
      <rect x="15" y="10" width="390" height="24" rx="8" fill="hsl(220 15% 16%)" />
      <rect x="15" y="26" width="390" height="8" fill="hsl(220 15% 16%)" />
      <circle cx="30" cy="22" r="4" fill="hsl(0 60% 50%)" />
      <circle cx="42" cy="22" r="4" fill="hsl(45 80% 55%)" />
      <circle cx="54" cy="22" r="4" fill="hsl(142 60% 50%)" />
      <text x="210" y="24" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="7">LRUEvictionStrategy.java - applying fix</text>

      {codeBefore.map((line, i) => (
        <motion.g key={`b-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.2 }}>
          <text x="30" y={55 + i * 20} fill="hsl(215 20% 35%)" fontSize="7">{140 + i}</text>
          {line.type === "remove" && (
            <motion.rect x="42" y={44 + i * 20} width="350" height="16" rx="2" fill="hsl(0 60% 50% / 0.15)"
              animate={{ opacity: [0.15, 0.3, 0.15] }} transition={{ repeat: Infinity, duration: 2 }} />
          )}
          <text x="48" y={55 + i * 20} fill={line.type === "remove" ? "hsl(0 60% 65%)" : "hsl(215 20% 65%)"} fontSize="8" fontFamily="monospace">
            {line.type === "remove" ? "- " : "  "}{line.text}
          </text>
        </motion.g>
      ))}

      <motion.line x1="42" y1="138" x2="380" y2="138" stroke="hsl(215 20% 25%)" strokeWidth="0.5" strokeDasharray="3 3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />

      {codeAfter.map((line, i) => (
        <motion.g key={`a-${i}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 + i * 0.3 }}>
          <text x="30" y={160 + i * 20} fill="hsl(215 20% 35%)" fontSize="7">{140 + i}</text>
          <motion.rect x="42" y={149 + i * 20} width="350" height="16" rx="2" fill="hsl(142 60% 50% / 0.12)"
            animate={{ opacity: [0.12, 0.25, 0.12] }} transition={{ repeat: Infinity, duration: 2 }} />
          <text x="48" y={160 + i * 20} fill="hsl(142 60% 70%)" fontSize="8" fontFamily="monospace">
            + {line.text}
          </text>
        </motion.g>
      ))}

      <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.5, type: "spring" }}>
        <rect x="290" y="222" width="100" height="20" rx="10" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50%)" strokeWidth="1" />
        <text x="340" y="235" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="8" fontWeight="600">Fix Applied</text>
      </motion.g>
    </svg>
  );
}

function AnimStep5() {
  const tests = ["testEvictionWithExpiredTTL", "testEvictionWithActiveTTL", "testConcurrentEviction"];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <rect x="15" y="10" width="230" height="240" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(330 60% 50%)" strokeWidth="1" />
      <text x="130" y="30" textAnchor="middle" fill="hsl(330 60% 65%)" fontSize="10" fontWeight="600">JUnit 5 + Mockito + AssertJ</text>

      {tests.map((t, i) => (
        <motion.g key={t} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 1 }}>
          <rect x="25" y={44 + i * 50} width="210" height="38" rx="5" fill="hsl(220 15% 15%)" stroke="hsl(215 20% 25%)" strokeWidth="0.8" />
          <text x="40" y={59 + i * 50} fill="hsl(215 20% 65%)" fontSize="7" fontFamily="monospace">{t}</text>
          <motion.g
            initial={{ rotate: 0 }} animate={{ rotate: 360 }}
            transition={{ repeat: 2, duration: 0.6, delay: 0.5 + i * 1 }}
            style={{ transformOrigin: `218px ${63 + i * 50}px` }}
          >
            <circle cx="218" cy={63 + i * 50} r="6" fill="none" stroke="hsl(330 60% 60%)" strokeWidth="1.5" strokeDasharray="12 20" />
          </motion.g>
          <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 + i * 1, type: "spring" }}>
            <circle cx="218" cy={63 + i * 50} r="7" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50%)" strokeWidth="1.5" />
            <motion.path d={`M213,${63 + i * 50} L216,${66 + i * 50} L223,${59 + i * 50}`}
              fill="none" stroke="hsl(142 60% 65%)" strokeWidth="1.5" strokeLinecap="round" />
          </motion.g>
          <motion.text x="40" y={74 + i * 50} fill="hsl(142 60% 50%)" fontSize="6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 + i * 1 }}>PASSED</motion.text>
        </motion.g>
      ))}

      <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.5 }}>
        <rect x="260" y="10" width="150" height="130" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(330 60% 50%)" strokeWidth="1" />
        <text x="335" y="32" textAnchor="middle" fill="hsl(330 60% 65%)" fontSize="10" fontWeight="600">SonarQube</text>
        <text x="275" y="55" fill="hsl(215 20% 55%)" fontSize="7">Coverage</text>
        <rect x="275" y="60" width="120" height="8" rx="4" fill="hsl(220 15% 20%)" />
        <motion.rect x="275" y="60" width="0" height="8" rx="4" fill="hsl(142 60% 50%)"
          animate={{ width: 102 }} transition={{ delay: 3.8, duration: 1 }} />
        <motion.text x="380" y="68" fill="hsl(142 60% 65%)" fontSize="7" fontWeight="600"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }}>85%</motion.text>
        <text x="275" y="95" fill="hsl(215 20% 55%)" fontSize="7">Quality Gate</text>
        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4.8, type: "spring" }}>
          <rect x="275" y="100" width="60" height="22" rx="4" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50%)" strokeWidth="1" />
          <text x="305" y="114" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="9" fontWeight="700">PASS</text>
        </motion.g>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}>
        <rect x="260" y="160" width="150" height="36" rx="6" fill="hsl(220 15% 14%)" stroke="hsl(215 20% 28%)" strokeWidth="0.8" />
        <text x="335" y="177" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="7">Target: &gt;80% on changed code</text>
        <text x="335" y="190" textAnchor="middle" fill="hsl(142 60% 55%)" fontSize="7" fontWeight="600">85% achieved</text>
      </motion.g>
    </svg>
  );
}

function AnimStep6() {
  const stages = ["Build & Test", "SonarQube", "Quality Gate", "Package"];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <rect x="15" y="10" width="390" height="40" rx="6" fill="hsl(220 15% 12%)" stroke="hsl(200 80% 45%)" strokeWidth="1" />
        <text x="25" y="28" fill="hsl(200 80% 65%)" fontSize="7" fontFamily="monospace">$ git commit -m "EPMICMPAT-{"{N}"}: fix eviction TTL comparison"</text>
        <text x="25" y="42" fill="hsl(142 60% 50%)" fontSize="6.5" fontFamily="monospace">[feature/fix-eviction] 1 file changed, 3 insertions(+), 2 deletions(-)</text>
      </motion.g>

      <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
        <rect x="15" y="58" width="390" height="30" rx="6" fill="hsl(220 15% 12%)" stroke="hsl(200 80% 45%)" strokeWidth="1" />
        <text x="25" y="76" fill="hsl(200 80% 65%)" fontSize="7" fontFamily="monospace">$ git push origin feature/fix-eviction -&gt; GitLab</text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
        <rect x="15" y="100" width="390" height="150" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(200 80% 45%)" strokeWidth="1" />
        <text x="210" y="120" textAnchor="middle" fill="hsl(200 80% 65%)" fontSize="10" fontWeight="600">Jenkins Pipeline: EPM-ICMP-ci-test</text>

        {stages.map((stage, i) => (
          <motion.g key={stage}>
            <motion.rect x={25 + i * 95} y="135" width="85" height="40" rx="6"
              fill="hsl(220 15% 16%)" stroke="hsl(215 20% 28%)" strokeWidth="1"
              animate={{
                stroke: ["hsl(215 20% 28%)", "hsl(200 80% 55%)", "hsl(142 60% 50%)"],
                fill: ["hsl(220 15% 16%)", "hsl(200 80% 55% / 0.1)", "hsl(142 60% 50% / 0.1)"],
              }}
              transition={{ delay: 2.2 + i * 0.9, duration: 0.9, times: [0, 0.3, 1] }}
            />
            <text x={67 + i * 95} y={155} textAnchor="middle" fill="hsl(215 20% 65%)" fontSize="7" fontWeight="500">{stage}</text>
            <motion.text x={67 + i * 95} y={168} textAnchor="middle" fontSize="6"
              initial={{ fill: "hsl(215 20% 40%)" }}
              animate={{ fill: ["hsl(215 20% 40%)", "hsl(200 80% 55%)", "hsl(142 60% 50%)"] }}
              transition={{ delay: 2.2 + i * 0.9, duration: 0.9, times: [0, 0.3, 1] }}>
              SUCCESS
            </motion.text>
            {i < stages.length - 1 && (
              <motion.path d={`M${110 + i * 95},155 L${120 + i * 95},155`}
                fill="none" stroke="hsl(200 80% 55%)" strokeWidth="1.5"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 + i * 0.9 }} />
            )}
          </motion.g>
        ))}

        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 5.5, type: "spring" }}>
          <rect x="130" y="195" width="160" height="26" rx="6" fill="hsl(142 60% 50% / 0.15)" stroke="hsl(142 60% 50%)" strokeWidth="1.2" />
          <text x="210" y="212" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="10" fontWeight="700">Build #{"{N}"} SUCCESS</text>
        </motion.g>
      </motion.g>
    </svg>
  );
}

function AnimStep7() {
  const vms = [
    { name: "ServiceRegistryVM", y: 50 },
    { name: "LoadBalancerVM", y: 105 },
    { name: "CacheNodeVM", y: 160 },
  ];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <rect x="15" y="10" width="200" height="240" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(200 80% 45%)" strokeWidth="1" />
        <text x="115" y="35" textAnchor="middle" fill="hsl(200 80% 65%)" fontSize="10" fontWeight="600">Azure VMs (epm-icmp)</text>
      </motion.g>

      {vms.map((vm, i) => (
        <motion.g key={vm.name} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.6 }}>
          <rect x="30" y={vm.y} width="170" height="42" rx="6" fill="hsl(220 15% 16%)" stroke="hsl(215 20% 28%)" strokeWidth="0.8" />
          <text x="45" y={vm.y + 18} fill="hsl(215 20% 65%)" fontSize="8" fontWeight="500">{vm.name}</text>
          <text x="45" y={vm.y + 32} fill="hsl(215 20% 45%)" fontSize="6.5">Checking status...</text>
          <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 + i * 0.6, type: "spring" }}>
            <circle cx="180" cy={vm.y + 21} r="8" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50%)" strokeWidth="1.5" />
            <path d={`M174,${vm.y + 21} L178,${vm.y + 25} L186,${vm.y + 17}`} fill="none" stroke="hsl(142 60% 65%)" strokeWidth="1.5" strokeLinecap="round" />
          </motion.g>
        </motion.g>
      ))}

      <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3 }}>
        <rect x="230" y="10" width="180" height="240" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(200 80% 45%)" strokeWidth="1" />
        <text x="320" y="35" textAnchor="middle" fill="hsl(200 80% 65%)" fontSize="10" fontWeight="600">Smoke Tests</text>

        {[
          { text: "GET /registry/nodes", result: "3 nodes", delay: 3.4 },
          { text: "GET /cache/registered", result: "OK", delay: 3.8 },
          { text: "PUT /cache/{id}/key", result: "Quorum W=2", delay: 4.2 },
          { text: "GET /cache/{id}/key", result: "Fix verified", delay: 4.6 },
        ].map((test, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: test.delay }}>
            <rect x="240" y={48 + i * 48} width="160" height="36" rx="5" fill="hsl(220 15% 15%)" stroke="hsl(215 20% 25%)" strokeWidth="0.8" />
            <text x="255" y={63 + i * 48} fill="hsl(200 80% 65%)" fontSize="6.5" fontFamily="monospace">{test.text}</text>
            <motion.text x="255" y={77 + i * 48} fill="hsl(142 60% 55%)" fontSize="6" fontWeight="600"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: test.delay + 0.4 }}>
              {test.result}
            </motion.text>
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: test.delay + 0.4, type: "spring" }}>
              <circle cx="386" cy={60 + i * 48} r="6" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50%)" strokeWidth="1" />
              <path d={`M382,${60 + i * 48} L384,${63 + i * 48} L390,${57 + i * 48}`} fill="none" stroke="hsl(142 60% 65%)" strokeWidth="1.2" strokeLinecap="round" />
            </motion.g>
          </motion.g>
        ))}
      </motion.g>
    </svg>
  );
}

function AnimStep8() {
  const reportLines = [
    { label: "Root Cause:", value: "TTL comparison logic", delay: 0.8 },
    { label: "Fix:", value: "LRUEvictionStrategy.java", delay: 1.2 },
    { label: "Tests Added:", value: "3 (+12% coverage)", delay: 1.6 },
    { label: "Gate:", value: "PASS", delay: 2.0, highlight: true },
    { label: "Build:", value: "#47 SUCCESS", delay: 2.4, highlight: true },
    { label: "VMs:", value: "All 3 healthy", delay: 2.8, highlight: true },
    { label: "Smoke Tests:", value: "PUT+GET verified", delay: 3.2, highlight: true },
    { label: "Score:", value: "9/10", delay: 3.6, highlight: true },
  ];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
        <rect x="60" y="5" width="300" height="250" rx="10" fill="hsl(220 15% 12%)" stroke="hsl(330 60% 50%)" strokeWidth="1.5" />
        <rect x="60" y="5" width="300" height="32" rx="10" fill="hsl(330 40% 16%)" />
        <rect x="60" y="27" width="300" height="10" fill="hsl(330 40% 16%)" />
        <text x="210" y="26" textAnchor="middle" fill="hsl(330 60% 75%)" fontSize="11" fontWeight="700">BUG FIX REPORT - EPMICMPAT-{"{N}"}</text>
      </motion.g>

      {reportLines.map((line, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: line.delay }}>
          <text x="85" y={60 + i * 26} fill="hsl(215 20% 55%)" fontSize="8">{line.label}</text>
          <text x="200" y={60 + i * 26} fill={line.highlight ? "hsl(142 60% 60%)" : "hsl(215 20% 70%)"} fontSize="8" fontWeight={line.highlight ? "600" : "400"}>{line.value}</text>
        </motion.g>
      ))}

      <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4, type: "spring", stiffness: 200 }}>
        <rect x="280" y="195" width="65" height="45" rx="8" fill="hsl(142 60% 50% / 0.15)" stroke="hsl(142 60% 50%)" strokeWidth="1.5" />
        <text x="312" y="215" textAnchor="middle" fill="hsl(142 60% 50%)" fontSize="7">Quality</text>
        <text x="312" y="234" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="16" fontWeight="800">9/10</text>
      </motion.g>
    </svg>
  );
}

function AnimStep9() {
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <rect x="20" y="10" width="100" height="140" rx="8" fill="hsl(220 20% 14%)" stroke="hsl(215 20% 28%)" strokeWidth="1" />
      <text x="70" y="32" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="10" fontWeight="600">In Progress</text>
      <rect x="140" y="10" width="100" height="140" rx="8" fill="hsl(220 20% 14%)" stroke="hsl(142 60% 40%)" strokeWidth="1.5" />
      <text x="190" y="32" textAnchor="middle" fill="hsl(142 60% 55%)" fontSize="10" fontWeight="600">In Review</text>

      <motion.g initial={{ x: 0 }} animate={{ x: 120 }} transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}>
        <motion.rect x="30" y="48" width="80" height="32" rx="5"
          fill="hsl(142 30% 18%)" stroke="hsl(142 60% 50%)" strokeWidth="1.5"
          animate={{ filter: ["drop-shadow(0 0 3px hsl(142 60% 50% / 0.2))", "drop-shadow(0 0 6px hsl(142 60% 50% / 0.5))", "drop-shadow(0 0 3px hsl(142 60% 50% / 0.2))"] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <text x="70" y="63" textAnchor="middle" fill="hsl(142 60% 75%)" fontSize="7" fontWeight="600">EPMICMPAT-{"{N}"}</text>
        <text x="70" y="74" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="5.5">Cache eviction bug</text>
      </motion.g>

      <motion.path d="M112 64 L137 64" fill="none" stroke="hsl(142 60% 50%)" strokeWidth="1.5" strokeDasharray="3 2"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 0.3, duration: 1.2 }} />

      <motion.g initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}>
        <rect x="20" y="160" width="380" height="90" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(142 60% 45%)" strokeWidth="1.2" />
        <text x="35" y="180" fill="hsl(142 60% 65%)" fontSize="9" fontWeight="600">Comment Added:</text>

        {[
          { text: "Bug fixed", color: "hsl(142 60% 60%)" },
          { text: "Branch: feature/EPMICMPAT-{N}-fix-eviction", color: "hsl(215 20% 60%)" },
          { text: "Build: #47 SUCCESS", color: "hsl(200 80% 60%)" },
          { text: "Gate: PASS | Coverage: 85%", color: "hsl(142 60% 60%)" },
          { text: "VMs: healthy | Smoke: verified", color: "hsl(142 60% 60%)" },
        ].map((line, i) => (
          <motion.text key={i} x="40" y={196 + i * 11} fill={line.color} fontSize="7"
            initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.3 + i * 0.3 }}>
            {line.text}
          </motion.text>
        ))}
      </motion.g>
    </svg>
  );
}

const STEP_ANIMATIONS = [AnimStep1, AnimStep2, AnimStep3, AnimStep4, AnimStep5, AnimStep6, AnimStep7, AnimStep8, AnimStep9];

const SWIMLANE = [
  { label: "User", color: "hsl(215 20% 55%)" },
  { label: "Orchestrator", color: "hsl(200 80% 55%)", sub: "routes" },
  { label: "Story Mgr", color: "hsl(142 60% 50%)", sub: "Jira fetch" },
  { label: "Code Spec", color: "hsl(45 80% 55%)", sub: "analyze+fix" },
  { label: "Quality", color: "hsl(330 60% 60%)", sub: "test+gate" },
  { label: "DevOps", color: "hsl(200 80% 55%)", sub: "push+build+VM" },
  { label: "Quality", color: "hsl(330 60% 60%)", sub: "report" },
  { label: "Story Mgr", color: "hsl(142 60% 50%)", sub: "Jira update" },
];

export function Slide11SDLC({ active }: { active?: boolean }) {
  const [activeStep, setActiveStep] = useState(-1);
  const [autoPlay, setAutoPlay] = useState(false);

  const startFlow = useCallback(() => {
    setActiveStep(0);
    setAutoPlay(true);
  }, []);

  const resetFlow = useCallback(() => {
    setActiveStep(-1);
    setAutoPlay(false);
  }, []);

  useEffect(() => {
    if (!active) resetFlow();
  }, [active, resetFlow]);

  useEffect(() => {
    if (!autoPlay || activeStep < 0 || activeStep >= PIPELINE_STEPS.length) return;
    const t = setTimeout(() => {
      if (activeStep < PIPELINE_STEPS.length - 1) setActiveStep((s) => s + 1);
      else setAutoPlay(false);
    }, STEP_INTERVAL);
    return () => clearTimeout(t);
  }, [autoPlay, activeStep]);

  const StepAnim = activeStep >= 0 ? STEP_ANIMATIONS[activeStep] : null;
  const currentStep = activeStep >= 0 ? PIPELINE_STEPS[activeStep] : null;

  return (
    <div className="relative w-full h-full overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,hsl(200_80%_15%/0.3),transparent_60%)]" />
      <NetworkParticles />

      <div className="relative z-10 py-3 px-4 md:px-8 max-w-6xl mx-auto flex flex-col min-h-full">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl font-bold text-gradient mb-0 text-center">
          Agentic Bug Fix Pipeline
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
          className="text-[10px] text-muted-foreground mb-1 text-center">
          Automated end-to-end: User → Orchestrator → Jira → Code → Test → Build → VM Verify → Report → Close
        </motion.p>

        <div className="flex justify-center gap-3 mb-1">
          <button onClick={startFlow}
            className={`text-xs font-semibold px-3 py-1 rounded cursor-pointer transition-colors ${activeStep >= 0 ? "bg-primary/20 text-primary/60" : "bg-primary/30 text-primary hover:bg-primary/40"}`}>
            {activeStep >= 0 ? "Running..." : "Start Pipeline"}
          </button>
          {activeStep >= 0 && (
            <>
              <button onClick={() => setAutoPlay((p) => !p)}
                className="text-xs px-3 py-1 rounded bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                {autoPlay ? "Pause" : "Play"}
              </button>
              <button onClick={resetFlow}
                className="text-xs px-3 py-1 rounded bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                Reset
              </button>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-2 flex-1 min-h-0">
          <div className="space-y-0.5 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
            {PIPELINE_STEPS.map((step, i) => {
              const isActive = i === activeStep;
              const isDone = i < activeStep;
              return (
                <motion.button key={i}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.04 }}
                  onClick={() => {
                    setActiveStep(i);
                    setAutoPlay(false);
                  }}
                  className={`w-full text-left p-1 rounded-lg transition-all duration-300 flex gap-1.5 items-center ${isActive ? "glass glow-sm" : isDone ? "bg-secondary/30" : "hover:bg-secondary/20"}`}
                  style={{ borderColor: isActive ? step.color : "transparent", borderWidth: isActive ? 1 : 0 }}
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold transition-colors"
                    style={{ backgroundColor: isDone || isActive ? step.bg : "hsl(220 15% 20%)", color: isDone || isActive ? step.color : "hsl(215 20% 45%)", border: `1.5px solid ${isDone || isActive ? step.color : "hsl(215 20% 30%)"}` }}>
                    {isDone ? "\u2713" : i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[8px] font-semibold px-1 py-0.5 rounded" style={{ backgroundColor: step.bg, color: step.color }}>{step.agent}</span>
                    <p className={`text-[9px] font-medium leading-tight mt-0.5 ${isActive || isDone ? "text-foreground" : "text-muted-foreground/60"}`}>{step.title}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="glass rounded-xl p-2 flex flex-col min-h-[300px]">
            {currentStep && (
              <motion.div key={`header-${activeStep}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: currentStep.bg, color: currentStep.color }}>{currentStep.agent}</span>
                <span className="text-muted-foreground/50 text-xs">-&gt;</span>
                <span className="text-[10px] text-muted-foreground">{currentStep.target}</span>
              </motion.div>
            )}

            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {StepAnim ? (
                  <motion.div key={activeStep} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                    className="w-full max-w-[460px]">
                    <StepAnim />
                  </motion.div>
                ) : (
                  <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                    <p className="text-lg mb-1">-&gt;</p>
                    <p className="text-sm text-muted-foreground">Click <strong>"Start Pipeline"</strong> to walk through the flow</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {activeStep >= 0 && (
              <div className="flex items-center justify-center gap-0.5 mt-1">
                {PIPELINE_STEPS.map((s, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{ backgroundColor: i <= activeStep ? s.color : "hsl(220 15% 20%)", border: `1px solid ${i <= activeStep ? s.color : "hsl(215 20% 30%)"}` }} />
                    {i < PIPELINE_STEPS.length - 1 && (
                      <div className="w-3 h-0.5 transition-colors duration-300"
                        style={{ backgroundColor: i < activeStep ? PIPELINE_STEPS[i + 1].color : "hsl(215 20% 25%)" }} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-2 flex items-center justify-center gap-0 flex-wrap">
          {SWIMLANE.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: `${s.color}20`, color: s.color }}>{s.label}</span>
                {s.sub && <span className="text-[6px] text-muted-foreground/50 mt-0.5">({s.sub})</span>}
              </div>
              {i < SWIMLANE.length - 1 && (
                <span className="text-[8px] text-muted-foreground/30 mx-1">-&gt;</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-center text-[9px] text-muted-foreground/50 mt-1">
          Team Atlas | EPAM Systems | 2026
        </motion.p>
      </div>
    </div>
  );
}

export default Slide11SDLC;
