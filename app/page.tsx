import Image from "next/image";
import { AppleIcon } from "./components/icons";
import Bento from "./components/Bento";

// ── Currently in beta on TestFlight (pre App Store) ─────────
const TESTFLIGHT_URL = "https://testflight.apple.com/join/2zHJdMdA";
const PIPED_GITHUB = "https://github.com/TeamPiped/Piped";
const PIPED_API = "api.piped.private.coffee";
const PIPED_INSTANCE = "https://piped.private.coffee/trending";

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

function PipedLink() {
  return (
    <a
      className="piped-link"
      href={PIPED_GITHUB}
      target="_blank"
      rel="noreferrer"
    >
      Piped
    </a>
  );
}

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
          Atlas is a native iOS client for <PipedLink />. Ad-free, private, and
          account-free. Watch what you want, without being watched.
        </p>

        <div className="cta-wrap hero-cta">
          <DownloadButton />
        </div>
        <p className="hero-note">Free and open beta, via Apple TestFlight.</p>

        <Bento />

        <section className="setup-note">
          <p>
            <strong>Add a Piped API.</strong> Start with the public{" "}
            <code>{PIPED_API}</code>, or use your own for full privacy.
          </p>
          <a
            className="setup-link"
            href={PIPED_INSTANCE}
            target="_blank"
            rel="noreferrer"
          >
            Browse a live instance →
          </a>
        </section>

        <section className="pitch">
          <p>
            Atlas brings the open-source <PipedLink /> project to iOS as a fast,
            native app. The videos you love, without the ads, tracking, or a
            Google account in the way.
          </p>
        </section>

        <div className="cta-wrap closing-cta">
          <DownloadButton />
        </div>
      </main>
    </>
  );
}
