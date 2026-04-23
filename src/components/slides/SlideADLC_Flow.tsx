import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkParticles from "../NetworkParticles";

const PIPELINE_STEPS = [
  { agent: "Orchestrator", target: "Jira Ticket", title: "Classify & Parse Ticket", color: "hsl(270 60% 65%)", bg: "hsl(270 60% 65% / 0.15)", border: "hsl(270 60% 65% / 0.4)", gate: false },
  { agent: "Orchestrator", target: "Spec File", title: "Planning & Specification", color: "hsl(270 60% 65%)", bg: "hsl(270 60% 65% / 0.15)", border: "hsl(270 60% 65% / 0.4)", gate: true },
  { agent: "Solution Architect", target: "Architecture", title: "Architecture Design", color: "hsl(220 80% 65%)", bg: "hsl(220 80% 65% / 0.15)", border: "hsl(220 80% 65% / 0.4)", gate: true },
  { agent: "Developer", target: "GitLab", title: "Feature Implementation", color: "hsl(190 80% 55%)", bg: "hsl(190 80% 55% / 0.15)", border: "hsl(190 80% 55% / 0.4)", gate: false },
  { agent: "Unit Tester", target: "Tests (Parallel)", title: "Test Generation", color: "hsl(142 60% 50%)", bg: "hsl(142 60% 50% / 0.15)", border: "hsl(142 60% 50% / 0.4)", gate: false },
  { agent: "Code Reviewer", target: "Quality Gate", title: "Review & SonarQube Scan", color: "hsl(25 80% 60%)", bg: "hsl(25 80% 60% / 0.15)", border: "hsl(25 80% 60% / 0.4)", gate: false },
  { agent: "Pipeline Monitor", target: "Jenkins CI/CD", title: "Build, Test & Auto-Fix", color: "hsl(45 80% 55%)", bg: "hsl(45 80% 55% / 0.15)", border: "hsl(45 80% 55% / 0.4)", gate: true },
  { agent: "Deploy Agent", target: "AWS", title: "Deploy & Health Verify", color: "hsl(175 70% 50%)", bg: "hsl(175 70% 50% / 0.15)", border: "hsl(175 70% 50% / 0.4)", gate: false },
  { agent: "Orchestrator", target: "Confluence + Jira", title: "Generate Docs & Close", color: "hsl(270 60% 65%)", bg: "hsl(270 60% 65% / 0.15)", border: "hsl(270 60% 65% / 0.4)", gate: false },
];

const STEP_INTERVAL = 7500;

// --- Step animations ---

function AnimStep1() {
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <rect x="60" y="10" width="300" height="34" rx="6" fill="hsl(220 15% 12%)" stroke="hsl(270 60% 50%)" strokeWidth="1" />
        <text x="75" y="28" fill="hsl(270 60% 75%)" fontSize="7" fontFamily="monospace">/orchestrate story EPMICMPAT-{"{N}"}</text>
        <text x="75" y="38" fill="hsl(215 20% 40%)" fontSize="5.5">User Command — Jira Story ID provided</text>
      </motion.g>

      <motion.path d="M210 48 L210 72" fill="none" stroke="hsl(270 60% 65%)" strokeWidth="1.5" strokeDasharray="4 3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
      <motion.polygon points="206,72 210,80 214,72" fill="hsl(270 60% 65%)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />

      <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}>
        <rect x="110" y="82" width="200" height="70" rx="10" fill="hsl(270 40% 14%)" stroke="hsl(270 60% 65%)" strokeWidth="1.5" />
        <text x="210" y="100" textAnchor="middle" fill="hsl(270 60% 80%)" fontSize="10" fontWeight="700">🎯 Orchestrator</text>
        <motion.text x="210" y="118" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="7"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          Detects: Feature Story workflow
        </motion.text>
        <motion.text x="210" y="132" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="7"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          Fetches: Jira ticket EPMICMPAT-{"{N}"}
        </motion.text>
      </motion.g>

      <motion.path d="M210 156 L210 178" fill="none" stroke="hsl(270 60% 65%)" strokeWidth="1.5" strokeDasharray="4 3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />
      <motion.polygon points="206,178 210,186 214,178" fill="hsl(270 60% 65%)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />

      <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3, type: "spring" }}>
        <rect x="120" y="188" width="180" height="36" rx="8" fill="hsl(142 40% 14%)" stroke="hsl(142 60% 50%)" strokeWidth="1.2" />
        <text x="210" y="205" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="8" fontWeight="600">Full SDLC Pipeline initiated</text>
        <text x="210" y="218" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="6.5">9 stages · 7 agents · 3 human gates</text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8 }}>
        <rect x="60" y="235" width="300" height="18" rx="4" fill="hsl(270 60% 65% / 0.1)" stroke="hsl(270 60% 65% / 0.3)" strokeWidth="0.8" />
        <text x="210" y="247" textAnchor="middle" fill="hsl(270 60% 75%)" fontSize="7">Announcing plan to user... Routing to Stage 1</text>
      </motion.g>
    </svg>
  );
}

function AnimStep2() {
  const specLines = [
    "## Feature: Cache TTL Configuration",
    "### Acceptance Criteria",
    "- TTL configurable per cache entry",
    "- Default TTL: 300s, max: 3600s",
    "- Eviction triggers at expireAt timestamp",
    "### Tech Stack: Java 17 + Spring Boot",
  ];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <rect x="15" y="10" width="240" height="240" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(270 60% 50%)" strokeWidth="1" />
        <rect x="15" y="10" width="240" height="22" rx="8" fill="hsl(270 40% 16%)" />
        <rect x="15" y="24" width="240" height="8" fill="hsl(270 40% 16%)" />
        <text x="135" y="24" textAnchor="middle" fill="hsl(270 60% 75%)" fontSize="8" fontWeight="600">SPEC-EPMICMPAT-{"{N}"}.md</text>
      </motion.g>

      {specLines.map((line, i) => (
        <motion.text key={i} x="25" y={48 + i * 26} fill={line.startsWith("#") ? "hsl(270 60% 75%)" : "hsl(215 20% 65%)"}
          fontSize={line.startsWith("##") ? 8 : 7} fontWeight={line.startsWith("#") ? "600" : "400"} fontFamily="monospace"
          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.4 }}>
          {line}
        </motion.text>
      ))}

      <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.5 }}>
        <rect x="268" y="10" width="140" height="100" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(0 60% 55%)" strokeWidth="1.5" />
        <text x="338" y="30" textAnchor="middle" fill="hsl(0 60% 70%)" fontSize="9" fontWeight="700">🔴 GATE 1</text>
        <text x="338" y="48" textAnchor="middle" fill="hsl(215 20% 60%)" fontSize="7">Human Approval</text>
        <text x="338" y="62" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="6.5">Review spec and</text>
        <text x="338" y="74" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="6.5">confirm approach</text>
        <motion.rect x="283" y="84" width="110" height="18" rx="4"
          fill="hsl(0 60% 55% / 0.2)" stroke="hsl(0 60% 55%)" strokeWidth="1"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} />
        <text x="338" y="97" textAnchor="middle" fill="hsl(0 60% 75%)" fontSize="7" fontWeight="600">Awaiting Approval</text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }}>
        <rect x="268" y="120" width="140" height="60" rx="8" fill="hsl(142 40% 12%)" stroke="hsl(142 60% 50%)" strokeWidth="1.2" />
        <text x="338" y="140" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="8" fontWeight="600">✅ Approved</text>
        <text x="338" y="156" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="7">Committed to GitLab</text>
        <text x="338" y="170" textAnchor="middle" fill="hsl(215 20% 45%)" fontSize="6.5">specs/EPMICMPAT-{"{N}"}.md</text>
      </motion.g>
    </svg>
  );
}

function AnimStep3() {
  const decisions = [
    { label: "Pattern", value: "Repository + Service Layer", color: "hsl(220 80% 65%)" },
    { label: "Layers", value: "Model → Repository → Service → Controller", color: "hsl(220 80% 65%)" },
    { label: "Testing", value: "JUnit 5 + Mockito + AssertJ", color: "hsl(142 60% 60%)" },
    { label: "Quality", value: "SonarQube gate ≥80% coverage", color: "hsl(45 80% 60%)" },
    { label: "CI/CD", value: "Jenkins EPM-ICMP pipeline", color: "hsl(190 80% 60%)" },
    { label: "Deploy", value: "AWS EC2 + CloudMap service", color: "hsl(175 70% 55%)" },
  ];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
        <rect x="15" y="10" width="390" height="26" rx="6" fill="hsl(220 30% 14%)" stroke="hsl(220 80% 55%)" strokeWidth="1.2" />
        <text x="210" y="27" textAnchor="middle" fill="hsl(220 80% 75%)" fontSize="9" fontWeight="700">🏗️ Solution Architect — Architecture Decisions</text>
      </motion.g>

      {decisions.map((d, i) => (
        <motion.g key={d.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.45 }}>
          <rect x="15" y={48 + i * 32} width="390" height="26" rx="5" fill="hsl(220 15% 14%)" stroke="hsl(215 20% 22%)" strokeWidth="0.8" />
          <text x="28" y={65 + i * 32} fill="hsl(215 20% 55%)" fontSize="7.5">{d.label}</text>
          <text x="110" y={65 + i * 32} fill={d.color} fontSize="7.5" fontFamily="monospace">{d.value}</text>
        </motion.g>
      ))}

      <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.8, type: "spring" }}>
        <rect x="60" y="228" width="300" height="24" rx="8" fill="hsl(0 60% 55% / 0.15)" stroke="hsl(0 60% 55%)" strokeWidth="1.2" />
        <text x="210" y="244" textAnchor="middle" fill="hsl(0 60% 75%)" fontSize="8" fontWeight="700">🔴 GATE 2 — Awaiting Architecture Approval</text>
      </motion.g>
    </svg>
  );
}

function AnimStep4() {
  const files = ["CacheConfigModel.java", "CacheConfigRepository.java", "CacheConfigService.java", "CacheConfigController.java"];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <rect x="15" y="8" width="390" height="20" rx="4" fill="hsl(220 15% 12%)" stroke="hsl(190 80% 45%)" strokeWidth="1" />
        <text x="210" y="21" textAnchor="middle" fill="hsl(190 80% 65%)" fontSize="7" fontFamily="monospace">💻 Developer → feature/EPMICMPAT-{"{N}"}-cache-ttl-config</text>
      </motion.g>

      {files.map((f, i) => (
        <motion.g key={f} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.6 }}>
          <rect x="15" y={36 + i * 52} width="250" height="42" rx="6" fill="hsl(220 15% 14%)" stroke="hsl(190 80% 45%)" strokeWidth="1" />
          <text x="30" y={52 + i * 52} fill="hsl(190 80% 70%)" fontSize="7.5" fontWeight="500">{f}</text>
          <text x="30" y={68 + i * 52} fill="hsl(215 20% 40%)" fontSize="6.5" fontFamily="monospace">Writing...</text>
          <motion.rect x="30" y={72 + i * 52} width="0" height="2.5" rx="1" fill="hsl(190 80% 55%)"
            animate={{ width: 200 }} transition={{ delay: 0.7 + i * 0.6, duration: 0.9 }} />
        </motion.g>
      ))}

      <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.5 }}>
        <rect x="278" y="36" width="130" height="240" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(190 80% 45%)" strokeWidth="1" />
        <text x="343" y="58" textAnchor="middle" fill="hsl(190 80% 65%)" fontSize="8" fontWeight="600">Git Commits</text>
        {["feat: add model", "feat: add repo", "feat: add service", "feat: add controller"].map((msg, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8 + i * 0.3 }}>
            <rect x="285" y={72 + i * 46} width="116" height="34" rx="4" fill="hsl(220 15% 16%)" stroke="hsl(215 20% 28%)" strokeWidth="0.8" />
            <text x="343" y={88 + i * 46} textAnchor="middle" fill="hsl(215 20% 60%)" fontSize="6" fontFamily="monospace">{msg}</text>
            <text x="343" y={100 + i * 46} textAnchor="middle" fill="hsl(142 60% 50%)" fontSize="5.5">✓ pushed</text>
          </motion.g>
        ))}
      </motion.g>
    </svg>
  );
}

function AnimStep5() {
  const tests = ["testCreateCacheConfig_success", "testGetCacheConfig_notFound", "testUpdateTTL_valid"];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        <rect x="15" y="8" width="230" height="244" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(142 60% 50%)" strokeWidth="1" />
        <text x="130" y="28" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="9" fontWeight="600">🧪 JUnit 5 + Mockito</text>
        <text x="130" y="40" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="6.5">Written in parallel with Dev</text>
      </motion.g>

      {tests.map((t, i) => (
        <motion.g key={t} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 1 }}>
          <rect x="25" y={52 + i * 58} width="210" height="46" rx="5" fill="hsl(220 15% 15%)" stroke="hsl(215 20% 25%)" strokeWidth="0.8" />
          <text x="40" y={68 + i * 58} fill="hsl(215 20% 65%)" fontSize="6.5" fontFamily="monospace">{t}</text>
          <motion.g
            initial={{ rotate: 0 }} animate={{ rotate: 360 }}
            transition={{ repeat: 2, duration: 0.6, delay: 0.6 + i * 1 }}
            style={{ transformOrigin: `218px ${74 + i * 58}px` }}
          >
            <circle cx="218" cy={74 + i * 58} r="6" fill="none" stroke="hsl(142 60% 60%)" strokeWidth="1.5" strokeDasharray="12 20" />
          </motion.g>
          <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 + i * 1, type: "spring" }}>
            <circle cx="218" cy={74 + i * 58} r="7" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50%)" strokeWidth="1.5" />
            <path d={`M213,${74 + i * 58} L216,${77 + i * 58} L223,${70 + i * 58}`} fill="none" stroke="hsl(142 60% 65%)" strokeWidth="1.5" strokeLinecap="round" />
          </motion.g>
          <motion.text x="40" y={86 + i * 58} fill="hsl(142 60% 50%)" fontSize="6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 + i * 1 }}>PASSED</motion.text>
        </motion.g>
      ))}

      <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.5 }}>
        <rect x="258" y="8" width="152" height="130" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(142 60% 50%)" strokeWidth="1" />
        <text x="334" y="28" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="9" fontWeight="600">Coverage</text>
        <text x="285" y="52" fill="hsl(215 20% 55%)" fontSize="7">Lines covered</text>
        <rect x="285" y="57" width="110" height="8" rx="4" fill="hsl(220 15% 20%)" />
        <motion.rect x="285" y="57" width="0" height="8" rx="4" fill="hsl(142 60% 50%)"
          animate={{ width: 97 }} transition={{ delay: 3.8, duration: 1 }} />
        <motion.text x="390" y="65" fill="hsl(142 60% 65%)" fontSize="7" fontWeight="600"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.6 }}>88%</motion.text>
        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 4.8, type: "spring" }}>
          <rect x="285" y="80" width="110" height="44" rx="6" fill="hsl(142 60% 50% / 0.15)" stroke="hsl(142 60% 50%)" strokeWidth="1" />
          <text x="340" y="97" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="6.5">Target: ≥80%</text>
          <text x="340" y="112" textAnchor="middle" fill="hsl(142 60% 70%)" fontSize="11" fontWeight="800">✓ 88%</text>
        </motion.g>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5 }}>
        <rect x="258" y="148" width="152" height="50" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(142 60% 45%)" strokeWidth="0.8" />
        <text x="334" y="168" textAnchor="middle" fill="hsl(215 20% 55%)" fontSize="7">3 tests written</text>
        <text x="334" y="182" textAnchor="middle" fill="hsl(142 60% 55%)" fontSize="7" fontWeight="600">Coverage gate: PASS ✓</text>
      </motion.g>
    </svg>
  );
}

function AnimStep6() {
  const issues = [
    { sev: "INFO", msg: "Minor naming inconsistency", auto: true },
    { sev: "MINOR", msg: "Unused import detected", auto: true },
    { sev: "INFO", msg: "Javadoc missing on public method", auto: false },
  ];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <rect x="15" y="8" width="390" height="22" rx="5" fill="hsl(25 40% 14%)" stroke="hsl(25 80% 55%)" strokeWidth="1" />
        <text x="210" y="22" textAnchor="middle" fill="hsl(25 80% 70%)" fontSize="8" fontWeight="600">🔍 Code Reviewer + SonarQube Quality Gate</text>
      </motion.g>

      <motion.g initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
        <rect x="15" y="38" width="190" height="110" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(25 80% 45%)" strokeWidth="1" />
        <text x="110" y="57" textAnchor="middle" fill="hsl(25 80% 65%)" fontSize="8" fontWeight="600">SonarQube Scan</text>
        {[
          { label: "Coverage", value: "88%", pass: true },
          { label: "Bugs", value: "0", pass: true },
          { label: "Vulnerabilities", value: "0", pass: true },
          { label: "Code Smells", value: "2", pass: true },
        ].map((m, i) => (
          <motion.g key={m.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.3 }}>
            <text x="28" y={76 + i * 20} fill="hsl(215 20% 55%)" fontSize="7">{m.label}</text>
            <text x="130" y={76 + i * 20} fill={m.pass ? "hsl(142 60% 60%)" : "hsl(0 60% 60%)"} fontSize="7" fontWeight="600">{m.value} {m.pass ? "✓" : "✗"}</text>
          </motion.g>
        ))}
        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2, type: "spring" }}>
          <rect x="28" y="128" width="160" height="16" rx="4" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50%)" strokeWidth="1" />
          <text x="108" y="139" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="8" fontWeight="700">QUALITY GATE: PASS</text>
        </motion.g>
      </motion.g>

      <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.5 }}>
        <rect x="218" y="38" width="188" height="130" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(25 80% 45%)" strokeWidth="1" />
        <text x="312" y="57" textAnchor="middle" fill="hsl(25 80% 65%)" fontSize="8" fontWeight="600">AI Code Review</text>
        {issues.map((iss, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 + i * 0.5 }}>
            <rect x="225" y={66 + i * 32} width="174" height="24" rx="4"
              fill={iss.sev === "INFO" ? "hsl(220 15% 16%)" : "hsl(45 40% 14%)"}
              stroke={iss.sev === "INFO" ? "hsl(215 20% 28%)" : "hsl(45 80% 45%)"} strokeWidth="0.8" />
            <text x="232" y={79 + i * 32} fill={iss.sev === "INFO" ? "hsl(215 20% 55%)" : "hsl(45 80% 60%)"} fontSize="6">{iss.sev}</text>
            <text x="270" y={79 + i * 32} fill="hsl(215 20% 60%)" fontSize="6">{iss.msg}</text>
            {iss.auto && (
              <motion.text x="370" y={79 + i * 32} fill="hsl(142 60% 55%)" fontSize="5.5"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 + i * 0.5 }}>
                auto-fix
              </motion.text>
            )}
          </motion.g>
        ))}
        <motion.text x="312" y="168" textAnchor="middle" fill="hsl(142 60% 55%)" fontSize="7" fontWeight="600"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.2 }}>
          ✓ 2 issues auto-fixed · Ready to push
        </motion.text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.8 }}>
        <rect x="60" y="180" width="300" height="70" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(142 60% 45%)" strokeWidth="1.2" />
        <text x="210" y="198" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="9" fontWeight="600">Pre-Push Quality Gate — ALL PASS</text>
        {["Compile ✓", "Tests ✓", "Coverage 88% ✓", "SonarQube ✓"].map((item, i) => (
          <motion.text key={item} x={80 + i * 80} y="220" textAnchor="middle" fill="hsl(142 60% 55%)" fontSize="7"
            initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5 + i * 0.2 }}>
            {item}
          </motion.text>
        ))}
        <motion.text x="210" y="242" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="6.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.9 }}>
          Creating Merge Request on GitLab...
        </motion.text>
      </motion.g>
    </svg>
  );
}

function AnimStep7() {
  const stages = ["Build", "Test", "SonarQube", "Package"];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <rect x="15" y="8" width="390" height="38" rx="6" fill="hsl(220 15% 12%)" stroke="hsl(45 80% 45%)" strokeWidth="1" />
        <text x="25" y="24" fill="hsl(45 80% 65%)" fontSize="7" fontFamily="monospace">MR !{"{N}"} opened: feat/EPMICMPAT-{"{N}"}-cache-ttl-config</text>
        <text x="25" y="38" fill="hsl(215 20% 45%)" fontSize="6.5" fontFamily="monospace">🔴 GATE 3 — Human reviews MR then merges → Jenkins triggers</text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <rect x="15" y="55" width="390" height="145" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(45 80% 45%)" strokeWidth="1" />
        <text x="210" y="74" textAnchor="middle" fill="hsl(45 80% 65%)" fontSize="9" fontWeight="600">🚀 Jenkins: EPM-ICMP CI Pipeline</text>

        {stages.map((stage, i) => (
          <motion.g key={stage}>
            <motion.rect x={25 + i * 93} y="84" width="83" height="40" rx="6"
              fill="hsl(220 15% 16%)" stroke="hsl(215 20% 28%)" strokeWidth="1"
              animate={{ stroke: ["hsl(215 20% 28%)", "hsl(45 80% 55%)", "hsl(142 60% 50%)"], fill: ["hsl(220 15% 16%)", "hsl(45 80% 55% / 0.1)", "hsl(142 60% 50% / 0.1)"] }}
              transition={{ delay: 1.5 + i * 0.9, duration: 0.8, times: [0, 0.3, 1] }}
            />
            <text x={66 + i * 93} y={104} textAnchor="middle" fill="hsl(215 20% 65%)" fontSize="7" fontWeight="500">{stage}</text>
            <motion.text x={66 + i * 93} y={117} textAnchor="middle" fontSize="6"
              initial={{ fill: "hsl(215 20% 40%)" }}
              animate={{ fill: ["hsl(215 20% 40%)", "hsl(45 80% 55%)", "hsl(142 60% 50%)"] }}
              transition={{ delay: 1.5 + i * 0.9, duration: 0.8, times: [0, 0.3, 1] }}>
              SUCCESS
            </motion.text>
            {i < stages.length - 1 && (
              <motion.path d={`M${108 + i * 93},104 L${118 + i * 93},104`}
                fill="none" stroke="hsl(45 80% 55%)" strokeWidth="1.5"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 + i * 0.9 }} />
            )}
          </motion.g>
        ))}

        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 5.5, type: "spring" }}>
          <rect x="130" y="138" width="160" height="24" rx="6" fill="hsl(142 60% 50% / 0.15)" stroke="hsl(142 60% 50%)" strokeWidth="1.2" />
          <text x="210" y="154" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="9" fontWeight="700">Build #{"{N}"} SUCCESS</text>
        </motion.g>

        <motion.text x="210" y="192" textAnchor="middle" fill="hsl(215 20% 45%)" fontSize="7"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6 }}>
          Pipeline Monitor: 0 retries needed
        </motion.text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.2 }}>
        <rect x="60" y="210" width="300" height="40" rx="8" fill="hsl(45 40% 12%)" stroke="hsl(45 80% 50%)" strokeWidth="1" />
        <text x="210" y="228" textAnchor="middle" fill="hsl(45 80% 65%)" fontSize="8" fontWeight="600">MR Auto-merge triggered</text>
        <text x="210" y="242" textAnchor="middle" fill="hsl(215 20% 50%)" fontSize="6.5">Branch merged to main → Deploy pipeline starting</text>
      </motion.g>
    </svg>
  );
}

function AnimStep8() {
  const instances = [
    { name: "cache-node-1", ip: "10.0.1.41", y: 50 },
    { name: "cache-node-2", ip: "10.0.1.42", y: 105 },
    { name: "cache-node-3", ip: "10.0.1.43", y: 160 },
  ];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <rect x="15" y="10" width="195" height="240" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(175 70% 45%)" strokeWidth="1" />
        <text x="112" y="32" textAnchor="middle" fill="hsl(175 70% 65%)" fontSize="9" fontWeight="600">☁️ AWS EC2 Instances</text>
      </motion.g>

      {instances.map((inst, i) => (
        <motion.g key={inst.name} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.6 }}>
          <rect x="28" y={inst.y} width="168" height="44" rx="6" fill="hsl(220 15% 16%)" stroke="hsl(215 20% 28%)" strokeWidth="0.8" />
          <text x="44" y={inst.y + 17} fill="hsl(175 70% 65%)" fontSize="7.5" fontWeight="500">{inst.name}</text>
          <text x="44" y={inst.y + 30} fill="hsl(215 20% 45%)" fontSize="6" fontFamily="monospace">{inst.ip}</text>
          <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 + i * 0.6, type: "spring" }}>
            <circle cx="178" cy={inst.y + 22} r="8" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50%)" strokeWidth="1.5" />
            <path d={`M172,${inst.y + 22} L176,${inst.y + 26} L184,${inst.y + 18}`} fill="none" stroke="hsl(142 60% 65%)" strokeWidth="1.5" strokeLinecap="round" />
          </motion.g>
        </motion.g>
      ))}

      <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3 }}>
        <rect x="220" y="10" width="190" height="240" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(175 70% 45%)" strokeWidth="1" />
        <text x="315" y="32" textAnchor="middle" fill="hsl(175 70% 65%)" fontSize="9" fontWeight="600">Health Checks</text>

        {[
          { endpoint: "GET /internal/health", result: "UP", delay: 3.3 },
          { endpoint: "GET /cluster/members", result: "3/3 nodes", delay: 3.7 },
          { endpoint: "CloudMap registered", result: "✓ 3 instances", delay: 4.1 },
          { endpoint: "PUT /cache/test-key", result: "Quorum W=2 ✓", delay: 4.5 },
        ].map((h, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: h.delay }}>
            <rect x="228" y={48 + i * 48} width="174" height="36" rx="5" fill="hsl(220 15% 15%)" stroke="hsl(215 20% 25%)" strokeWidth="0.8" />
            <text x="238" y={63 + i * 48} fill="hsl(175 70% 60%)" fontSize="6.5" fontFamily="monospace">{h.endpoint}</text>
            <motion.text x="238" y={77 + i * 48} fill="hsl(142 60% 55%)" fontSize="7" fontWeight="600"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: h.delay + 0.4 }}>
              {h.result}
            </motion.text>
          </motion.g>
        ))}
      </motion.g>
    </svg>
  );
}

function AnimStep9() {
  const docLines = [
    { text: "## Feature: Cache TTL Configuration", color: "hsl(270 60% 75%)" },
    { text: "**Story:** EPMICMPAT-{N} | **Build:** #{N}", color: "hsl(215 20% 60%)" },
    { text: "### What was implemented", color: "hsl(270 60% 65%)" },
    { text: "- CacheConfigModel / Repository / Service / Controller", color: "hsl(215 20% 55%)" },
    { text: "- Coverage: 88% | Gate: PASS", color: "hsl(142 60% 55%)" },
    { text: "- Deploy: 3/3 EC2 instances healthy", color: "hsl(142 60% 55%)" },
  ];
  return (
    <svg viewBox="0 0 420 260" className="w-full h-full">
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <rect x="15" y="8" width="240" height="245" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(270 60% 50%)" strokeWidth="1" />
        <rect x="15" y="8" width="240" height="24" rx="8" fill="hsl(270 40% 16%)" />
        <rect x="15" y="24" width="240" height="8" fill="hsl(270 40% 16%)" />
        <text x="135" y="24" textAnchor="middle" fill="hsl(270 60% 75%)" fontSize="8" fontWeight="600">Confluence KB Page</text>
      </motion.g>

      {docLines.map((line, i) => (
        <motion.text key={i} x="24" y={50 + i * 28} fill={line.color} fontSize="7" fontFamily="monospace"
          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.4 }}>
          {line.text}
        </motion.text>
      ))}

      <motion.g initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }}>
        <rect x="268" y="8" width="140" height="245" rx="8" fill="hsl(220 15% 12%)" stroke="hsl(142 60% 45%)" strokeWidth="1.2" />
        <text x="338" y="30" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="9" fontWeight="600">Jira Update</text>

        {[
          { label: "Status", value: "Done ✅", color: "hsl(142 60% 60%)" },
          { label: "MR", value: "!{N} Merged", color: "hsl(190 80% 60%)" },
          { label: "Build", value: "#{N} PASS", color: "hsl(142 60% 60%)" },
          { label: "Deploy", value: "3/3 healthy", color: "hsl(142 60% 60%)" },
          { label: "Coverage", value: "88%", color: "hsl(142 60% 60%)" },
        ].map((item, i) => (
          <motion.g key={item.label} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.4 + i * 0.35 }}>
            <text x="278" y={60 + i * 28} fill="hsl(215 20% 50%)" fontSize="7">{item.label}</text>
            <text x="325" y={60 + i * 28} fill={item.color} fontSize="7" fontWeight="600">{item.value}</text>
          </motion.g>
        ))}

        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 5.2, type: "spring", stiffness: 180 }}>
          <rect x="278" y="218" width="120" height="28" rx="8" fill="hsl(142 60% 50% / 0.2)" stroke="hsl(142 60% 50%)" strokeWidth="1.5" />
          <text x="338" y="230" textAnchor="middle" fill="hsl(142 60% 50%)" fontSize="7">Story</text>
          <text x="338" y="244" textAnchor="middle" fill="hsl(142 60% 65%)" fontSize="12" fontWeight="800">DONE ✅</text>
        </motion.g>
      </motion.g>
    </svg>
  );
}

const STEP_ANIMATIONS = [AnimStep1, AnimStep2, AnimStep3, AnimStep4, AnimStep5, AnimStep6, AnimStep7, AnimStep8, AnimStep9];

const SWIMLANE = [
  { label: "User", color: "hsl(215 20% 55%)" },
  { label: "Orchestrator", color: "hsl(270 60% 65%)", sub: "route+plan" },
  { label: "Architect", color: "hsl(220 80% 65%)", sub: "design" },
  { label: "Developer", color: "hsl(190 80% 55%)", sub: "implement" },
  { label: "Unit Tester", color: "hsl(142 60% 50%)", sub: "parallel tests" },
  { label: "Code Reviewer", color: "hsl(25 80% 60%)", sub: "review+gate" },
  { label: "Pipeline Mon.", color: "hsl(45 80% 55%)", sub: "CI/CD" },
  { label: "Deploy Agent", color: "hsl(175 70% 50%)", sub: "AWS verify" },
];

export function SlideADLC_Flow() {
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
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,hsl(270_60%_15%/0.25),transparent_60%)]" />
      <NetworkParticles />

      <div className="relative z-10 py-3 px-4 md:px-8 max-w-7xl mx-auto flex flex-col h-full">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-gradient mb-0.5 text-center">
          Agentic SDLC — Full Feature Pipeline
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
          className="text-xs text-muted-foreground mb-2 text-center">
          User → Orchestrator → Architect → Developer → Tester → Reviewer → CI/CD → Deploy → Docs
        </motion.p>

        <div className="flex justify-center gap-3 mb-2">
          <button onClick={startFlow}
            className={`text-sm font-semibold px-4 py-1.5 rounded cursor-pointer transition-colors ${activeStep >= 0 ? "bg-primary/20 text-primary/60" : "bg-primary/30 text-primary hover:bg-primary/40"}`}>
            {activeStep >= 0 ? "Running..." : "▶ Start Pipeline"}
          </button>
          {activeStep >= 0 && (
            <>
              <button onClick={() => setAutoPlay((p) => !p)}
                className="text-sm px-4 py-1.5 rounded bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                {autoPlay ? "Pause" : "Resume"}
              </button>
              <button onClick={resetFlow}
                className="text-sm px-4 py-1.5 rounded bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                Reset
              </button>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-3 flex-1 min-h-0">
          {/* Step list */}
          <div className="space-y-1 overflow-y-auto pr-1">
            {PIPELINE_STEPS.map((step, i) => {
              const isActive = i === activeStep;
              const isDone = i < activeStep;
              return (
                <motion.button key={i}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.04 }}
                  onClick={() => { setActiveStep(i); setAutoPlay(false); }}
                  className={`w-full text-left px-2 py-1.5 rounded-lg transition-all duration-300 flex gap-2 items-center ${isActive ? "glass" : isDone ? "bg-secondary/30" : "hover:bg-secondary/20"}`}
                  style={{ borderColor: isActive ? step.color : "transparent", borderWidth: isActive ? 1 : 0, boxShadow: isActive ? `0 0 10px ${step.color}30` : undefined }}
                >
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 flex-shrink-0"
                    style={{
                      backgroundColor: isDone ? step.color : isActive ? step.bg : `${step.color}22`,
                      color: isDone ? "hsl(220 15% 10%)" : step.color,
                      border: `2px solid ${isActive ? step.color : `${step.color}70`}`,
                      boxShadow: isActive ? `0 0 10px ${step.color}60` : isDone ? `0 0 6px ${step.color}40` : "none",
                    }}
                  >
                    {isDone ? "✓" : i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className="text-[11px] font-semibold px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: step.bg, color: step.color }}
                      >{step.agent}</span>
                      {step.gate && (
                        <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}
                          className="text-[10px] font-bold text-red-400">🔴</motion.span>
                      )}
                    </div>
                    <p className={`text-[11px] font-medium leading-tight ${isActive || isDone ? "text-foreground" : "text-muted-foreground/75"}`}>{step.title}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Animation panel */}
          <div className="glass rounded-xl p-3 flex flex-col min-h-0">
            {currentStep && (
              <motion.div key={`header-${activeStep}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex items-center gap-2 mb-2 flex-shrink-0">
                <span className="text-sm font-semibold px-2.5 py-1 rounded" style={{ backgroundColor: currentStep.bg, color: currentStep.color }}>{currentStep.agent}</span>
                <span className="text-muted-foreground/40 text-sm">→</span>
                <span className="text-sm text-muted-foreground">{currentStep.target}</span>
                {currentStep.gate && (
                  <span className="ml-auto text-xs font-bold text-red-400 animate-pulse">🔴 Human Gate</span>
                )}
              </motion.div>
            )}

            <div className="flex-1 relative min-h-0">
              <AnimatePresence mode="wait">
                {StepAnim ? (
                  <motion.div key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full">
                      <StepAnim />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-5xl mb-4">🚀</p>
                      <p className="text-base text-muted-foreground">Click <strong className="text-foreground">▶ Start Pipeline</strong> to walk through the full SDLC flow</p>
                      <p className="text-sm text-muted-foreground/50 mt-2 font-mono">9 stages · 7 agents · 3 human gates</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {activeStep >= 0 && (
              <div className="flex items-center justify-center gap-1 mt-2 flex-shrink-0">
                {PIPELINE_STEPS.map((s, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-3 h-3 rounded-full transition-all duration-300"
                      style={{ backgroundColor: i <= activeStep ? s.color : "hsl(220 15% 20%)", border: `1.5px solid ${i <= activeStep ? s.color : "hsl(215 20% 30%)"}` }} />
                    {i < PIPELINE_STEPS.length - 1 && (
                      <div className="w-4 h-0.5 transition-colors duration-300"
                        style={{ backgroundColor: i < activeStep ? PIPELINE_STEPS[i + 1].color : "hsl(215 20% 25%)" }} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Swimlane */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-2 flex items-center justify-center gap-0 flex-wrap flex-shrink-0">
          {SWIMLANE.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: `${s.color}20`, color: s.color }}>{s.label}</span>
                {s.sub && <span className="text-[8px] text-muted-foreground/50 mt-0.5">({s.sub})</span>}
              </div>
              {i < SWIMLANE.length - 1 && (
                <span className="text-[10px] text-muted-foreground/30 mx-1.5">→</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
