import Image from "next/image";
import {
  AppleIcon,
  IconNoAds,
  IconShield,
  IconPiP,
  IconSkip,
  IconNoAccount,
} from "./components/icons";

// ── Currently in beta on TestFlight (pre App Store) ─────────
const TESTFLIGHT_URL = "https://testflight.apple.com/join/NDpNyMP6";

function DownloadButton({ small = false }: { small?: boolean }) {
  return (
    <a
      href={TESTFLIGHT_URL}
      className={small ? "cta-sm" : "cta"}
      target="_blank"
      rel="noreferrer"
    >
      <AppleIcon size={small ? 15 : 18} />
      Download on TestFlight
    </a>
  );
}

const FEATURES = [
  {
    title: "Ad-free playback",
    body: "Every video plays start to finish, with no ads, mid-rolls, or interruptions.",
    variant: "wide dark feature-hero",
    icon: <IconNoAds />,
  },
  {
    title: "Private by design",
    body: "Powered by Piped, so what you watch never ties back to a Google account.",
    variant: "",
    icon: <IconShield />,
  },
  {
    title: "Background & PiP",
    body: "Keep listening with the screen off or in Picture in Picture.",
    variant: "",
    icon: <IconPiP />,
  },
  {
    title: "Skip the sponsors",
    body: "SponsorBlock is built in, so sponsor segments and intros melt away.",
    variant: "",
    icon: <IconSkip />,
  },
  {
    title: "No account needed",
    body: "Search, browse and subscribe without ever signing in.",
    variant: "",
    icon: <IconNoAccount />,
  },
  {
    title: "Native to iOS",
    body: "A fast, fluid app that feels right at home on iPhone and iPad.",
    variant: "wide feature-inline",
    icon: <AppleIcon size={24} />,
  },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#" className="topbar-brand">
            Atlas
          </a>
          <DownloadButton small />
        </div>
      </header>

      <main className="shell">
        <Image
          className="app-icon"
          src="/app-icon.png"
          width={80}
          height={80}
          alt="Atlas app icon"
          priority
        />

        <h1 className="headline">A calmer way to watch YouTube.</h1>
        <p className="subhead">
          Atlas is a native iOS client for Piped. Ad-free, private, and
          account-free. Just the videos you came for.
        </p>

        <div className="cta-wrap hero-cta">
          <DownloadButton />
        </div>
        <p className="hero-note">Free and open beta, via Apple TestFlight.</p>

        <p className="section-label">What you get</p>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className={`feature-card ${f.variant}`.trim()} key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <div className="feature-text">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="pitch">
          <p>
            Atlas brings the open-source Piped project to iOS as a fast, native
            app. The videos you love, without the ads, tracking, or a Google
            account in the way.
          </p>
        </section>

        <div className="cta-wrap closing-cta">
          <DownloadButton />
        </div>
      </main>
    </>
  );
}
