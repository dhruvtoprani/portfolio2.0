import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github, Layers } from 'lucide-react';

const metrics = [
  ['35%', 'onboarding drop-off reduction'],
  ['$1.2M', 'annual opportunity identified'],
  ['5,000+', 'PDFs structured for AI retrieval'],
  ['70%', 'AI copilot query-time reduction'],
  ['6,000+', 'volunteer hours coordinated'],
  ['2x', 'first-place UURAF wins']
];

const work = [
  ['MSU Research Foundation', 'Product Management', 'Led user research with 15+ users, translated founder pain into requirements, and owned Salesforce CRM architecture.', 'Reduced onboarding drop-off by 35% and informed strategy for 20+ startups.', ['User Research', 'CRM', 'Strategy']],
  ['Dewpoint NOC Portal', 'Technical Product Management', 'Identified a $1.2M opportunity, authored the PRD, scoped the MVP around operator workflows, and aligned engineering and stakeholders.', 'Shipped in 6 weeks and adopted by 20+ operators.', ['PRD', 'Dashboards', 'MVP']],
  ['Consumers Energy AI Matcher', 'Software and Product', 'Modeled $300K per month in unclaimed rebates, interviewed stakeholders, built operations tooling, and engineered AI retrieval records.', 'Projected 23% capture lift, 35% outage efficiency gain, and 70% faster copilot queries.', ['AI', '.NET', 'SQL']],
  ['AI Work Design', 'AI Product Research', 'Built a parametric testing platform to study how workflow design changes model performance and cost.', 'Matched roughly 89% performance with low-cost models and won first place at UURAF.', ['AI Agents', 'Research', 'Cost']],
  ['Task Allocation in Mixed Teams', 'Human AI Systems', 'Formulated MILP-based task allocation with human preference learning, uncertainty, and operational constraints.', 'Created a human-in-the-loop allocation platform and won first place at UURAF.', ['MILP', 'Robotics', 'Preferences']],
  ['6Dot', 'Accessibility Product', 'Designed a pocket-sized Braille phone attachment through rapid prototyping and visually impaired user feedback.', 'Won MSU Designathon with an accessibility-centered product story.', ['Accessibility', 'Arduino', 'Design']],
  ['WattX', 'Energy Product', 'Built a peer-to-peer microgrid simulation with Python, Flask, Supabase, and Fetch.ai in 24 hours.', 'Won HackDearborn with a full-stack MVP and clear energy-market narrative.', ['Energy', 'Flask', 'Startup']],
  ['Hexaflow', 'Venture Prototype', 'Redesigned server rack airflow and built a validated physical prototype in 36 hours.', 'Won the Burgess 2-Day Venture Challenge.', ['Hardware', 'Venture', 'Prototype']]
];

const experience = [
  ['Whisker', 'Incoming Software Technical Program Management Intern', 'Summer 2026', 'Consumer robotics, software execution, systems coordination, and technical program delivery.'],
  ['MSU Research Foundation', 'Product Management Intern', 'Sep 2025 to Present', 'User research, startup strategy, Salesforce CRM ownership, and product requirement translation.'],
  ['Dewpoint', 'Technical Product Management Intern', 'Jun 2025 to Aug 2025', 'PRDs, market analysis, executive dashboards, and workflow-first portal delivery.'],
  ['Consumers Energy', 'Software Engineering Intern', 'May 2025 to Jun 2025', 'AI eligibility matching, operations platforms, outage workflows, and data ingestion systems.'],
  ['D-CYPHER Lab', 'Research Intern', 'Feb 2024 to Present', 'AI experiment platforms, human-subject studies, A/B testing, and human-robot systems.'],
  ['MSU VEX-U Robotics', 'Technical Program Lead', 'Aug 2023 to Aug 2025', 'Software and hardware sprint planning, autonomous codebase maintenance, and VEX Worlds qualification.']
];

const leadership = [
  ['Product Management Society', 'President', 'Building MSU’s PM ecosystem through speakers, alumni access, recruiting resources, and professional development.'],
  ['Tower Guard Honor Society', 'President', 'Coordinated 6,000+ volunteer hours across 80 members and raised $20K to expand disability resources.'],
  ['Humanity First MSU', 'Events Chair', 'Raised $11K+ across medical mission, prosthetic donation, and community infrastructure initiatives.'],
  ['Resident Assistant', 'Student Leader', 'Managed 45+ residents through programming, conflict resolution, support, and community-building.']
];

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

function PremiumField() {
  return (
    <div className="premium-field" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, row) => (
        <div className="field-row" key={row}>
          {Array.from({ length: 13 }).map((__, col) => <span key={`${row}-${col}`} />)}
        </div>
      ))}
    </div>
  );
}

function Section({ eyebrow, title, copy, children, id }) {
  return <section className="section" id={id}><motion.div className="section-label" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</motion.div>{children}</section>;
}

function Nav() {
  return <nav className="nav"><a className="mark" href="#top">DT</a><div><a href="#work">Work</a><a href="#experience">Experience</a><a href="#leadership">Leadership</a><a href="#contact">Contact</a></div><a className="nav-cta" href="https://www.linkedin.com/in/dhruvtoprani/" target="_blank" rel="noreferrer">Resume</a></nav>;
}

function Hero() {
  return <header className="hero" id="top"><div className="hero-bg"><PremiumField /></div><motion.div className="hero-copy" variants={fade} initial="hidden" animate="show"><div className="status"><span /> Available for Fall 2026 PM and TPM conversations</div><h1>Product-minded engineer building at the edge of AI, robotics, and human-centered systems.</h1><p>I translate ambiguity into shipped systems, measurable workflows, and product decisions across AI, robotics, energy, accessibility, and technical program execution.</p><div className="actions"><a className="primary" href="#work">View Work <ArrowUpRight size={18} /></a><a className="secondary" href="https://www.linkedin.com/in/dhruvtoprani/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={17} /></a></div></motion.div><motion.div className="portrait" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }}><div className="portrait-inner"><span>DT</span></div><div className="portrait-caption"><b>Dhruv Kekin Toprani</b><small>Computer Engineering, Honors College, Michigan State University</small></div></motion.div></header>;
}

function Metrics() {
  return <motion.section className="metric-strip" variants={fade} initial="hidden" animate="show">{metrics.map(([v, l]) => <div className="metric" key={l}><strong>{v}</strong><span>{l}</span></div>)}</motion.section>;
}

function Work() {
  return <Section id="work" eyebrow="Selected Work" title="Proof of work, written like decisions matter." copy="Case studies are structured like product memos: problem, bet, action, result. Clean enough for recruiters, deep enough for product leaders."><div className="case-grid">{work.map(([title, type, action, result, tags], i) => <motion.article className="case-card" key={title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.03 }}><div className="case-top"><span>{type}</span><ArrowUpRight size={18} /></div><h3>{title}</h3><div className="memo"><div><b>Action</b><p>{action}</p></div><div><b>Result</b><p>{result}</p></div></div><div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div></motion.article>)}</div></Section>;
}

function Thesis() {
  const pillars = [['Product Judgment','User research, PRDs, MVP scoping, prioritization, founder pain, and customer workflows.'],['Technical Execution','AI pipelines, dashboards, APIs, .NET, Python, SQL, robotics, and automation systems.'],['Systems Thinking','Human preferences, AI work design, task allocation, and operational process design.'],['Leadership Leverage','Building teams, communities, rituals, trust, and execution systems that scale.']];
  return <Section eyebrow="Operating Thesis" title="The next PMs will understand systems, not just roadmaps." copy="I am building the range to move from product strategy to engineering reality, then back to user and business outcomes."><div className="pillar-grid">{pillars.map(([t,c],i)=><motion.div className="pillar" key={t} variants={fade} initial="hidden" whileInView="show" viewport={{once:true}}><span>0{i+1}</span><h3>{t}</h3><p>{c}</p></motion.div>)}</div></Section>;
}

function Experience() {
  return <Section id="experience" eyebrow="Experience" title="A technical operator with product instincts." copy="Work spanning product management, software engineering, research platforms, robotics teams, and technical program execution."><div className="timeline">{experience.map(([company, role, time, focus], i)=><motion.div className="timeline-item" key={company} variants={fade} initial="hidden" whileInView="show" viewport={{once:true}}><div className="timeline-index">{String(i+1).padStart(2,'0')}</div><div><p className="time">{time}</p><h3>{role}</h3><h4>{company}</h4><p>{focus}</p></div></motion.div>)}</div></Section>;
}

function Leadership() {
  return <Section id="leadership" eyebrow="Leadership" title="Operating leverage beyond the job description." copy="I like building systems people can actually use: student communities, volunteer infrastructure, recruiting pipelines, and support structures."><div className="lead-grid">{leadership.map(([org, role, copy])=><motion.div className="lead-card" key={org} variants={fade} initial="hidden" whileInView="show" viewport={{once:true}}><Layers size={18}/><h3>{org}</h3><span>{role}</span><p>{copy}</p></motion.div>)}</div></Section>;
}

function About() {
  return <section className="section about"><div><p className="eyebrow">About</p><h2>Born in Dubai. Built at MSU. Focused on leaving no stone unturned.</h2><p>I came to Michigan State to build range: deep technical skill, product judgment, research discipline, and leadership under real constraints. My work moves across AI systems, robotics, accessibility, energy, research platforms, startup strategy, and technical program execution. The common thread is simple: find the real problem, design the operating system around it, and ship something that changes the outcome.</p></div></section>;
}

function Contact() {
  return <footer className="contact" id="contact"><p className="eyebrow">Contact</p><h2>Looking for product, AI systems, robotics, or technical program work?</h2><p>I am open to conversations with builders, product leaders, founders, alumni, and recruiters.</p><div className="actions"><a className="primary" href="mailto:topranid@msu.edu"><Mail size={18}/> Email Me</a><a className="secondary" href="https://www.linkedin.com/in/dhruvtoprani/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a className="secondary" href="https://github.com/dhruvtoprani" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div><div className="footer-line"><span>Dhruv Kekin Toprani</span><span>Product-minded engineer</span></div></footer>;
}

export default function App() {
  return <div className="site"><Nav/><Hero/><Metrics/><main><Thesis/><Work/><Experience/><Leadership/><About/><Contact/></main></div>;
}
