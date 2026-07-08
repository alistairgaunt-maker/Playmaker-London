'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NavBar from '../../components/NavBar';

/* ---------- Design tokens (Doc 80 — mirrored from homepage) ---------- */
const C = {
  black:     '#111111',
  navy:      '#0D2340',
  blue:      '#1A5CA8',
  blueLight: '#4A90D9',
  white:     '#FFFFFF',
  grey:      '#CCCCCC',
  greyDim:   '#888888',
};
const serif = { fontFamily: "'EB Garamond', serif" };
const sans = { fontFamily: "'Montserrat', sans-serif" };

const ease = [0.22, 1, 0.36, 1];
const revealVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={revealVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="block text-[13px] font-bold uppercase mb-6"
      style={{ ...sans, color: C.blue, letterSpacing: '0.12em' }}
    >
      {children}
    </span>
  );
}

function Section({
  children,
  bg = C.black,
  className = '',
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <section
      className={`w-full px-6 md:px-16 lg:px-[80px] py-28 md:py-40 ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-[1100px] mx-auto">{children}</div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Resources() {
  const guides = [
    {
      title: 'The Playmaker Parent Blueprint',
      forWho: 'For parents',
      body: 'A practical guide to the five decisions that shape every player\u2019s development \u2014 and how to make them with confidence.',
    },
    {
      title: 'The Late Developer\u2019s Roadmap',
      forWho: 'For overlooked players',
      body: 'For players who have been overlooked, underestimated or released \u2014 and for the families who know their journey isn\u2019t over.',
    },
    {
      title: 'The Playmaker Mindset Guide',
      forWho: 'Confidence & identity',
      body: 'Confidence is not a personality trait. It is a skill. A practical guide to building the psychological foundation serious players develop on.',
    },
    {
      title: 'The Scout\u2019s Eye',
      forWho: 'Exposure readiness',
      body: 'What scouts and selectors actually look for, and what most players and families never get told. An honest guide to being seen.',
    },
  ];

  return (
    <main style={{ backgroundColor: C.black }}>
      <NavBar />
      {/* ── HERO ── */}
      <section
        className="relative w-full min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: C.black }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-resources.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: '90% 15%', filter: 'brightness(1.05) contrast(1.0) saturate(0.95)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(17,17,17,0.97) 0%, rgba(17,17,17,0.9) 28%, rgba(17,17,17,0.55) 48%, rgba(17,17,17,0.22) 64%, rgba(17,17,17,0.12) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-16 lg:px-[80px] w-full">
          <div className="max-w-[620px]">
            <Reveal>
              <p
                className="text-[13px] font-bold uppercase mb-8"
                style={{ ...sans, color: C.blue, letterSpacing: '0.2em' }}
              >
                Free Resources
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="text-[36px] md:text-[52px] lg:text-[60px] leading-[1.12] font-bold mb-8"
                style={{ ...serif, color: C.white }}
              >
                Start here.{' '}
                <span className="font-normal italic" style={{ color: C.grey }}>
                  No commitment required.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="text-[16px] md:text-[18px] leading-[1.65] max-w-[500px] mb-12"
                style={{ ...sans, color: C.grey }}
              >
                Free, practical resources built for families who want to think clearly about
                development, opportunity, and what comes next.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="#guides"
                  className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm text-center transition-opacity hover:opacity-90"
                  style={{ ...sans, backgroundColor: C.blue, color: C.white, letterSpacing: '0.08em' }}
                >
                  See The Guides
                </Link>
                <Link
                  href="/assessment"
                  className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm border text-center transition-colors hover:bg-white/5"
                  style={{ ...sans, borderColor: 'rgba(255,255,255,0.35)', color: C.white, letterSpacing: '0.08em' }}
                >
                  Or Book An Assessment
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE GUIDES ── */}
      <Section>
        <div id="guides" />
        <Reveal>
          <Label>Free resources for serious families</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[30px] md:text-[40px] leading-[1.25] font-bold mb-20 max-w-[700px]"
            style={{ ...serif, color: C.white }}
          >
            Four guides. No commitment required.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((g, i) => (
            <Reveal key={g.title} delay={0.06 * i}>
              <div
                className="p-9 rounded-sm h-full flex flex-col justify-between"
                style={{ backgroundColor: '#161616', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div>
                  <span
                    className="text-[13px] font-bold uppercase block mb-4"
                    style={{ ...sans, color: C.blue, letterSpacing: '0.08em' }}
                  >
                    {g.forWho}
                  </span>
                  <h3
                    className="text-[20px] font-bold mb-4"
                    style={{ ...serif, color: C.white }}
                  >
                    {g.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] mb-8" style={{ ...sans, color: C.grey }}>
                    {g.body}
                  </p>
                </div>
                <button
                  className="text-[13px] font-bold uppercase text-left transition-opacity hover:opacity-80"
                  style={{ ...sans, color: C.blue, letterSpacing: '0.08em' }}
                >
                  Download Free →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── BELIEF STATEMENT (navy interstitial) ── */}
      <Section bg={C.navy} className="text-center">
        <div className="max-w-[760px] mx-auto">
          <Reveal>
            <h2
              className="text-[26px] md:text-[36px] leading-[1.4] font-bold"
              style={{ ...serif, color: C.white }}
            >
              You don&rsquo;t need to commit to anything to start thinking clearly.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[16px] leading-[1.7] mt-6"
              style={{ ...sans, color: C.grey }}
            >
              These guides exist because most families never get this information at all.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── CLOSING CTA ── */}
      <Section bg={C.black} className="text-center">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2
              className="text-[30px] md:text-[42px] leading-[1.3] font-bold mb-8"
              style={{ ...serif, color: C.white }}
            >
              Ready to go further than a guide can take you?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[16px] leading-[1.7] mb-9"
              style={{ ...sans, color: C.grey }}
            >
              The assessment is the next step &mdash; a structured, honest picture of where your
              player stands.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/assessment"
              className="inline-block px-12 py-5 text-[14px] font-bold uppercase rounded-sm transition-opacity hover:opacity-90"
              style={{ ...sans, backgroundColor: C.blue, color: C.white, letterSpacing: '0.08em' }}
            >
              Request Your Assessment
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer
        className="w-full px-6 md:px-16 lg:px-[80px] py-20"
        style={{ backgroundColor: C.black, borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p
              className="text-[16px] font-bold uppercase mb-2"
              style={{ ...sans, color: C.white, letterSpacing: '0.08em' }}
            >
              Playmaker London
            </p>
            <p
              className="text-[13px] uppercase mb-6"
              style={{ ...sans, color: C.blue, letterSpacing: '0.12em' }}
            >
              Development done seriously.
            </p>
            <p
              className="text-[14px] leading-[1.7] max-w-[400px]"
              style={{ ...sans, color: C.greyDim }}
            >
              Playmaker London works with ambitious footballers aged 13 to 23 and the families
              navigating the journey with them.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
  { label: 'Home', href: '/' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'Development', href: '/development' },
  { label: 'Resources', href: '/resources' },
  { label: 'Privacy', href: '/privacy' },
].map((item) => (
  <Link
    key={item.href}
    href={item.href}
    className="text-[14px]"
    style={{ ...sans, color: C.grey }}
  >
    {item.label}
  </Link>
))}
          </div>
        </div>
        <p
          className="text-[12px] mt-16 text-center"
          style={{ ...sans, color: '#555' }}
        >
          © Playmaker London. All rights reserved.
        </p>
      </footer>
    </main>
  );
}