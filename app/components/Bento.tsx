"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import {
  AppleIcon,
  IconNoAds,
  IconShield,
  IconPiP,
  IconSkip,
  IconNoAccount,
} from "./icons";

const PIPED_GITHUB = "https://github.com/TeamPiped/Piped";

function P() {
  return (
    <a
      className="piped-link"
      href={PIPED_GITHUB}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      Piped
    </a>
  );
}

type Feature = {
  title: string;
  body: ReactNode;
  why: ReactNode;
  how: ReactNode;
  variant: string;
  isDark?: boolean;
  icon: ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Ad-free playback",
    body: "Every video plays start to finish, with no ads, mid-rolls, or interruptions.",
    why: "Ads interrupt the video, slow things down, and quietly profile what you watch.",
    how: (
      <>
        Atlas streams through <P />, which pulls the raw video straight from
        YouTube without the ad layer, so there is nothing to skip.
      </>
    ),
    variant: "wide dark feature-hero",
    isDark: true,
    icon: <IconNoAds />,
  },
  {
    title: "Private by design",
    body: (
      <>
        Powered by <P />, so what you watch never ties back to a Google account.
      </>
    ),
    why: "On YouTube, every view is linked to your Google identity and ad profile.",
    how: (
      <>
        A <P /> instance sits in the middle and proxies each request, so YouTube
        only ever sees the instance, never you. No login, no cookies.
      </>
    ),
    variant: "",
    icon: <IconShield />,
  },
  {
    title: "Background & PiP",
    body: "Keep listening with the screen off or in Picture in Picture.",
    why: "You should not have to keep the screen on just to keep listening.",
    how: "Atlas uses iOS's native audio session and Picture in Picture, so audio keeps playing with the screen off or in a floating window.",
    variant: "",
    icon: <IconPiP />,
  },
  {
    title: "Skip the sponsors",
    body: "SponsorBlock is built in, so sponsor segments and intros melt away.",
    why: "Sponsor reads and intros eat up minutes of every video.",
    how: "Atlas fetches SponsorBlock's community timestamps and automatically jumps past those segments as you watch.",
    variant: "",
    icon: <IconSkip />,
  },
  {
    title: "No account needed",
    body: "Search, browse and subscribe without ever signing in.",
    why: "Signing in is friction, and it is how you get tracked across sessions.",
    how: "Your subscriptions and history live on your device and your chosen instance, so you never hand Google a login.",
    variant: "",
    icon: <IconNoAccount />,
  },
  {
    title: "Native to iOS",
    body: "A fast, fluid app that feels right at home on iPhone and iPad.",
    why: "Web-wrapped apps feel laggy and out of place on iPhone.",
    how: "Atlas is built in Swift with native players, gestures, and system integration, so it stays fast and fluid.",
    variant: "feature-inline",
    icon: <AppleIcon size={24} />,
  },
];

const spring = { type: "spring", stiffness: 420, damping: 36 } as const;

export default function Bento() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open !== null ? FEATURES[open] : null;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const renderCard = (f: Feature, i: number) => (
    <motion.div
      key={f.title}
      layoutId={`bento-${i}`}
      role="button"
      tabIndex={0}
      aria-label={`${f.title} — more info`}
      className={`feature-card ${f.variant}`.trim()}
      onClick={() => setOpen(i)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(i);
        }
      }}
      animate={{ opacity: open === i ? 0 : 1 }}
      whileHover={{ y: -2 }}
      transition={spring}
      style={{ cursor: "pointer" }}
    >
      <motion.span layout="position" className="feature-icon">
        {f.icon}
      </motion.span>
      <motion.div layout="position" className="feature-text">
        <h3>{f.title}</h3>
        <p>{f.body}</p>
      </motion.div>
    </motion.div>
  );

  return (
    <div>
      <p className="section-label">What you get</p>
      <div className="feature-grid">
        {FEATURES.slice(0, -1).map(renderCard)}
      </div>
      {renderCard(FEATURES[FEATURES.length - 1], FEATURES.length - 1)}

      <AnimatePresence>
        {active && open !== null && (
          <>
            <motion.div
              className="bento-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
            />
            <div className="bento-expanded-wrap">
              <motion.div
                layoutId={`bento-${open}`}
                className={`feature-card bento-expanded ${active.isDark ? "is-dark" : ""}`.trim()}
                role="dialog"
                aria-modal="true"
                aria-label={active.title}
                transition={spring}
              >
                <motion.span layout="position" className="feature-icon">
                  {active.icon}
                </motion.span>
                <motion.h3 layout="position" className="bento-expanded-title">
                  {active.title}
                </motion.h3>
                <motion.div
                  className="bento-expanded-body"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.09, duration: 0.22 }}
                >
                  <div className="bento-row">
                    <span className="bento-row-label">Why</span>
                    <p>{active.why}</p>
                  </div>
                  <div className="bento-row">
                    <span className="bento-row-label">How it works</span>
                    <p>{active.how}</p>
                  </div>
                  <button
                    type="button"
                    className="bento-close"
                    onClick={() => setOpen(null)}
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
