'use client';

import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { motion } from 'framer-motion';

/* — Design tokens (Doc 80, mirrored from homepage) — */
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
const ease = [0.22, 1, 0.36, 1] as const;

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
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

export default function Privacy() {
  return (
    <main style={{ backgroundColor: C.black, minHeight: '100vh' }}>
      <NavBar />
      <div className="max-w-[800px] mx-auto px-6 md:px-16 pt-48 pb-20">
        <Reveal>
          <Label>Privacy & Safeguarding</Label>
          <h1
            className="text-[32px] md:text-[40px] font-bold mb-10"
            style={{ ...sans, color: C.white }}
          >
            Privacy & Safeguarding at Playmaker London
          </h1>
        </Reveal>

        <div style={{ ...sans, color: C.grey }} className="text-[15px] leading-[1.8] space-y-8">
          <Reveal delay={0.05}>
            <p>
              At Playmaker London, every player and family trusts us with something important: not just performance information, but a young athlete's development journey. We take that seriously. This page explains, simply, how we look after it.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-[18px] font-bold mb-3" style={{ color: C.white }}>
                Why We Collect Information
              </h2>
              <p>
                When a player registers or completes a performance assessment with us, we collect the details needed to guide their development properly. This includes contact details, physical testing results, and coach review notes. It allows us to give personalised, expert guidance and measure a player's development over time, rather than offering generic advice.
              </p>
              <p className="mt-4">
                We only ever use this information to support the player's development with Playmaker London. We do not sell it, and we do not use it for anything beyond delivering our programme to your family.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-[18px] font-bold mb-3" style={{ color: C.white }}>
                Keeping You Informed
              </h2>
              <p>
                As Playmaker London grows, we may introduce email updates, such as development tips or programme news, for families who choose to receive them. Where this applies, it will always be a clear, separate opt-in, and you can unsubscribe at any time. This page will be updated to reflect exactly how that works once it is introduced.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-[18px] font-bold mb-3" style={{ color: C.white }}>
                Consent, Simply Explained
              </h2>
              <p>
                If a player is under 18, we ask a parent or legal guardian to give consent, not the young athlete alone. You will always know clearly what you are agreeing to, and you can change your mind at any time.
              </p>
              <p className="mt-4">If a player is 18 or over, we ask them directly.</p>
              <p className="mt-4">Either way, consent is never bundled into fine print. It is a clear, separate step.</p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-[18px] font-bold mb-3" style={{ color: C.white }}>
                How Long We Keep Information
              </h2>
              <p>
                We keep a player's development information for as long as they are actively with us, plus a short period afterwards in case they return or need a reference for a scholarship or pathway opportunity. If you ask us to delete it, we do so within 30 days, except where we are legally required to keep certain records, such as financial ones.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-[18px] font-bold mb-3" style={{ color: C.white }}>
                Who Can See It
              </h2>
              <p>
                Only the founder and the coaching staff directly working with a player have access, on a need-to-know basis. We never share a player's information with anyone outside Playmaker London without asking you first, for that specific purpose. For example, if a player wants us to support a scholarship or trial application.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-[18px] font-bold mb-3" style={{ color: C.white }}>
                Keeping It Safe
              </h2>
              <p>
                Player information is stored securely with access controls in place, and every access is logged as part of how we run the business responsibly. We do not use cookies or website tracking of any kind.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-[18px] font-bold mb-3" style={{ color: C.white }}>
                Safeguarding Comes First
              </h2>
              <p>
                Every coach working directly with players under 18 holds a valid DBS check before they ever work with a young athlete. Any safeguarding concern is treated separately from performance information and escalated immediately and appropriately.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-[18px] font-bold mb-3" style={{ color: C.white }}>
                Your Rights
              </h2>
              <p>You can ask, at any time, to see what information we hold, ask us to correct it, or ask us to delete it. Just get in touch. There is no complicated process.</p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-[18px] font-bold mb-3" style={{ color: C.white }}>
                Any Questions?
              </h2>
              <p>
                We are always happy to talk this through. Contact us at{' '}
                <a href="mailto:contact@playmakerldn.co.uk" style={{ color: C.blueLight }}>
                  contact@playmakerldn.co.uk
                </a>{' '}
                or <span style={{ color: C.white }}>07944 670972</span>.
              </p>
            </section>
          </Reveal>
        </div>

        <p
          className="text-[13px] mt-16 pt-8"
          style={{ ...serif, fontStyle: 'italic', color: C.greyDim, borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          Playmaker London, Development Done Seriously.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 text-[14px]"
          style={{ ...sans, color: C.blueLight, textDecoration: 'underline' }}
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}