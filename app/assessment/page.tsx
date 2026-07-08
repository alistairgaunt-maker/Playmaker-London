'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NavBar from '../../components/NavBar';

/* ── Design tokens (Doc 80 — mirrored from homepage) ── */
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
const sans  = { fontFamily: "'Montserrat', sans-serif" };
const ease  = [0.22, 1, 0.36, 1] as const;

const revealVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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

/* ── Page ── */
export default function Assessment() {

  const areas = [
    {
      title: 'Physical development and maturation stage',
      body:  'Where the player sits in their own growth and maturation curve, not judged against an arbitrary standard.',
    },
    {
      title: 'Benchmark comparison against elite players at the same age',
      body:  'Drawn from your Performance Report, so the picture is evidence-based rather than impression-based.',
    },
    {
      title: 'Current environment and opportunity context',
      body:  'What the current setting is giving the player and what it may be missing.',
    },
    {
      title: 'Short and long-term development priorities',
      body:  'A clear order of what matters most now and what can wait.',
    },
  ];

  const steps = [
    {
      title: 'Register your player',
      body:  'A short registration form capturing the essentials: player age, level and background, so we understand the context before testing begins.',
    },
    {
      title: 'Complete your self-guided testing',
      body:  'Using the accompanying Testing Guide, the player completes a set of structured tests on an outdoor pitch, then uploads the footage directly. Extended assessments may also require gym access, confirmed at registration.',
    },
    {
      title: 'Receive your Performance Report and direction',
      body:  'Our team analyses the footage alongside the player\'s wider context, then sends a written Performance Report setting out where the player stands and the most sensible next step. If it looks like a strong fit, we may also offer a short call to talk it through.',
    },
  ];

  const reportItems = [
    'Physical development snapshot',
    'Elite age-group benchmarking',
    'Environment and opportunity review',
    'Prioritised next steps',
  ];

  const faqs = [
    {
      q: 'Do we need to be on a call for the assessment?',
      a: 'No. The assessment is entirely self-guided. The player completes filmed testing using our Testing Guide in their own time. If it looks like a strong fit, we may offer a short call afterwards to talk through next steps.',
    },
    {
      q: 'Is this a sales call?',
      a: 'No. The assessment is a genuine review, not a pitch. Playmaker London does not sell outcomes. We help families understand where a player stands and what a sensible next step looks like, even if that step is not a Playmaker London programme.',
    },
    {
      q: 'What if my child has been told they are behind, or has been released?',
      a: 'Development is not linear, and release is information, not a final judgement. The assessment exists precisely for players in this position, to build an honest, evidence-informed picture of what comes next.',
    },
    {
      q: 'Is this worth it if we already do private coaching?',
      a: 'More training is not the same as clearer direction. The assessment is not about adding sessions. It is about understanding what the player actually needs before deciding how to spend time and money on their development.',
    },
    {
      q: 'What age range is this for?',
      a: 'Playmaker London works with players aged 13 to 23. The assessment approach adapts to the player\'s stage, whether that is early adolescence or the final years of the academy or scholarship pathway.',
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
            src="/images/hero-assessment.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: '80% 20%', filter: 'brightness(1.05) contrast(1.0) saturate(0.95)' }}
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
                The Performance Assessment
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="text-[36px] md:text-[52px] lg:text-[60px] leading-[1.12] font-bold mb-8"
                style={{ ...serif, color: C.white }}
              >
                Understand where your player actually stands.{' '}
                <span className="font-normal italic" style={{ color: C.grey }}>
                  Before deciding what comes next.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="text-[16px] md:text-[18px] leading-[1.65] max-w-[500px] mb-12"
                style={{ ...sans, color: C.grey }}
              >
                A structured, evidence-informed review. Not a trial. Not a sales call.
                Built to give your family the clarity most environments never provide.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="#request"
                  className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm text-center transition-opacity hover:opacity-90"
                  style={{ ...sans, backgroundColor: C.blue, color: C.white, letterSpacing: '0.08em' }}
                >
                  Request Your Assessment
                </Link>
                <Link
                  href="#included"
                  className="px-9 py-4 text-[14px] font-bold uppercase rounded-sm border text-center transition-colors hover:bg-white/5"
                  style={{ ...sans, borderColor: 'rgba(255,255,255,0.35)', color: C.white, letterSpacing: '0.08em' }}
                >
                  See What's Included
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ── */}
      <Section>
        <div className="max-w-[780px] mx-auto text-center">
          <Reveal>
            <p
              className="text-[26px] md:text-[34px] leading-[1.45] mb-10"
              style={{ ...serif, color: C.white }}
            >
              Most families are told a player is "doing well" or "not quite there"
              without ever being shown why.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[17px] leading-[1.75]" style={{ ...sans, color: C.grey }}>
              A coach forms an opinion. A parent hears a comment. A player is left guessing.
              Real decisions about time, money and direction end up resting on impressions rather
              than evidence. Before any of that changes, someone has to actually look properly.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── BELIEF INTERSTITIAL ── */}
      <Section bg={C.navy} className="text-center">
        <div className="max-w-[720px] mx-auto">
          <Reveal>
            <p
              className="text-[28px] md:text-[38px] leading-[1.35] font-bold mb-6"
              style={{ ...serif, color: C.white }}
            >
              Better decisions require better information.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="text-[18px] md:text-[22px] leading-[1.5] italic"
              style={{ ...serif, color: C.grey }}
            >
              Today's performance is not tomorrow's potential.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── WHAT THIS ACTUALLY IS ── */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <Label>What this actually is</Label>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-[30px] md:text-[42px] leading-[1.2] font-bold mb-8"
                style={{ ...serif, color: C.white }}
              >
                The starting point. Not the final destination.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] leading-[1.75] mb-6" style={{ ...sans, color: C.grey }}>
                The Performance Assessment is not a trial and not a sales call. It is a genuine,
                professional review of where the player stands, what is shaping their development,
                and what the most intelligent path forward looks like.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-[16px] leading-[1.75]" style={{ ...sans, color: C.grey }}>
                It is entirely self-guided. The player completes a set of structured tests using the
                Testing Guide, filmed in their own time. Our team analyses the results. For some
                players, that means a Playmaker London programme. For others, it means clarity to
                take back to their current environment. Both are a good outcome.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="p-10 rounded-sm" >
            <div style={{ backgroundColor: '#161616' }} className="p-10 rounded-sm">
              <p
                className="text-[13px] font-bold uppercase mb-8"
                style={{ ...sans, color: C.blue, letterSpacing: '0.12em' }}
              >
                This assessment is right for you if
              </p>
              {[
                'You want to understand where the player genuinely stands, not just what a coach thinks.',
                'You are making decisions about next steps and want evidence rather than opinion.',
                'The player has been overlooked, released or told they are not quite there.',
                'You want an honest picture before investing further in training or programmes.',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-4 mb-5 last:mb-0">
                  <span
                    className="text-[13px] font-bold mt-0.5 shrink-0"
                    style={{ ...sans, color: C.blue }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[15px] leading-[1.65]" style={{ ...sans, color: C.grey }}>
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── WHAT'S COVERED ── */}
      <div id="included">
        <Section>
          <Reveal>
            <Label>What's covered</Label>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-[30px] md:text-[44px] leading-[1.2] font-bold mb-20"
              style={{ ...serif, color: C.white }}
            >
              Four areas. One honest picture.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={0.07 * i}>
                <span
                  className="text-[14px] font-bold uppercase block mb-4"
                  style={{ ...sans, color: C.blue, letterSpacing: '0.06em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-[18px] font-bold mb-3 leading-[1.35]"
                  style={{ ...serif, color: C.white }}
                >
                  {a.title}
                </h3>
                <p className="text-[15px] leading-[1.7]" style={{ ...sans, color: C.grey }}>
                  {a.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* ── HOW IT WORKS ── */}
      <Section>
        <Reveal>
          <Label>How it works</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[30px] md:text-[40px] leading-[1.2] font-bold mb-20"
            style={{ ...serif, color: C.white }}
          >
            Three steps. No guesswork.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <p
                className="text-[52px] font-bold leading-none mb-8"
                style={{ ...serif, color: 'rgba(26,92,168,0.35)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3
                className="text-[17px] font-bold mb-4 leading-[1.35]"
                style={{ ...sans, color: C.white }}
              >
                {s.title}
              </h3>
              <p className="text-[15px] leading-[1.7]" style={{ ...sans, color: C.grey }}>
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── WHAT YOU RECEIVE ── */}
      <Section bg={C.black}>
        <Reveal>
          <Label>What you receive</Label>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-16 items-start mt-2">
          <div>
            <Reveal delay={0.05}>
              <h2
                className="text-[30px] md:text-[40px] leading-[1.25] font-bold mb-8"
                style={{ ...serif, color: C.white }}
              >
                A written Performance Report. Not a verbal summary.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] leading-[1.75]" style={{ ...sans, color: C.grey }}>
                Every assessment concludes with a Performance Report the family keeps: a precise,
                evidence-informed record built from the player's self-filmed testing and wider
                context, setting out where the player stands and what the most sensible next step is.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div
              className="p-9 rounded-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p
                className="text-[13px] font-bold uppercase mb-8"
                style={{ ...sans, color: C.blue, letterSpacing: '0.12em' }}
              >
                Included in every report
              </p>
              {reportItems.map((item, i) => (
                <div key={item} className="flex items-start gap-4 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <span
                    className="text-[13px] font-bold mt-0.5 shrink-0"
                    style={{ ...sans, color: C.blue }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] leading-[1.6]" style={{ ...sans, color: C.grey }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── FAQs ── */}
      <Section>
        <Reveal>
          <Label>Before you book</Label>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[30px] md:text-[40px] leading-[1.2] font-bold mb-20"
            style={{ ...serif, color: C.white }}
          >
            Questions families ask us.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={0.06 * i}>
              <div className="p-8 rounded-sm h-full" style={{ backgroundColor: '#161616' }}>
                <span
                  className="text-[13px] font-bold block mb-4"
                  style={{ ...sans, color: C.blue, letterSpacing: '0.06em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-[16px] font-bold mb-4 leading-[1.35]"
                  style={{ ...sans, color: C.white }}
                >
                  {faq.q}
                </h3>
                <p className="text-[14px] leading-[1.7]" style={{ ...sans, color: C.grey }}>
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── CLOSING CTA ── */}
      <div id="request">
        <Section bg={C.navy} className="text-center">
          <div className="max-w-[680px] mx-auto">
            <Reveal>
              <h2
                className="text-[30px] md:text-[44px] leading-[1.25] font-bold mb-8"
                style={{ ...serif, color: C.white }}
              >
                Ready to understand where your player actually stands?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] leading-[1.7] mb-4" style={{ ...sans, color: C.grey }}>
                Request your assessment below. We'll be in touch with everything you need to get started.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-[14px] mb-12" style={{ ...sans, color: C.greyDim }}>
                No guarantees. No pressure. No generic advice.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="mailto:hello@playmakerlondon.com"
                className="inline-block px-12 py-5 text-[14px] font-bold uppercase rounded-sm transition-opacity hover:opacity-90"
                style={{ ...sans, backgroundColor: C.blue, color: C.white, letterSpacing: '0.08em' }}
              >
                Request Your Assessment
              </Link>
            </Reveal>
          </div>
        </Section>
      </div>

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
      style={{ ...sans, color: C.grey, textDecoration: 'none' }}
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
