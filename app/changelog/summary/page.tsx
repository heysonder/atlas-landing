import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas · Changelog summary",
  description:
    "The short version of every Atlas release: what to expect, what you may notice if you look closely, and what changed under the hood.",
};

type Summary = {
  label: string;
  date: string;
  dateTime: string;
  headline: string;
  expect: readonly string[];
  keenEye: readonly string[];
  underTheHood: readonly string[];
};

const SUMMARIES: readonly Summary[] = [
  {
    label: "v1.10",
    date: "November 2026",
    dateTime: "2026-11",
    headline: "The embedded player grows up: its own controls, a real watch page, and nothing taken from the full-screen player.",
    expect: [
      "Settings → Playback → Player lets you pick Fullscreen or Embedded again.",
      "Embedded pins the video to the top with its own controls: tap for controls, double-tap to skip, hold for 2×, a full-screen button, and a scrubber with chapters.",
      "Swipe the video down and it keeps playing in Picture in Picture over the screen you came from; Return to App brings the player back.",
      "A slim glass tab bar replaces the system one, and long titles scroll on one line instead of wrapping. Both can be turned off in Settings → Content.",
      "Live streams open at the live edge with a LIVE badge you can tap to catch up.",
    ],
    keenEye: [
      "The scrubber names the chapter under your finger while you drag.",
      "Related titles on the watch page only start scrolling once you scroll the page.",
      "The tab bar slides away while the keyboard is up, and the Search field moves into the navigation bar.",
      "Rounded Corners and Hide Related Videos are two small options just for the embedded player.",
      "Tapping Search while on a channel page goes back to the results.",
    ],
    underTheHood: [
      "The embedded player is a bare AVPlayerLayer with SwiftUI controls, publishing Now Playing and remote commands itself; the full-screen AVKit player is untouched.",
      "Dismissing the player starts Picture in Picture before the cover goes, the model is retained for PiP's lifetime, and Return to App adopts the running player instead of reloading.",
      "Live items keep their offset from the live edge through stalls, and a saved position is ignored when the asset reports an indefinite duration.",
      "Opening a new video while the embedded player was open now starts it; the cover was keeping the old state.",
    ],
  },
  {
    label: "v1.9",
    date: "September 2026",
    dateTime: "2026-09",
    headline: "Opt-in iCloud sync: your library on every device, and still no Atlas account.",
    expect: [
      "Library → Settings → iCloud Sync. It's off until you turn it on, and the consent sheet says what syncs, what stays local, and how encryption works.",
      "Subscriptions, history, playback progress, playlists and Favorites, feedback, and For You activity merge across devices on the same Apple Account.",
      "Resume on the iPad where you left off on the phone.",
      "Saving a live stream to Favorites works, and exports no longer fail on playlists that contain one.",
    ],
    keenEye: [
      "Enabling merges both libraries; it never replaces one with the other. History you cleared stays cleared even if another device was offline.",
      "Turn Off keeps both copies. Delete Synced Content removes the iCloud copy and leaves a small marker so other devices pause instead of re-uploading it.",
      "Search history keeps every query now; the recent list still shows fifteen.",
      "A sync problem with one item is set aside and retried later instead of stopping everything.",
    ],
    underTheHood: [
      "Every custom field Atlas writes to CloudKit is an encrypted field, and record names are opaque hashes. End-to-end encryption depends on Advanced Data Protection; the app states that and doesn't claim to detect it.",
      "Merging uses a causal register per item with rules per kind: concurrent removes win, later playback sessions replace earlier positions, search counts add per device without double counting.",
      "Every library edit commits its sync journal entry in the same save, so a crash can't lose an edit or upload it twice. Progress uploads batch to one per 30 seconds.",
      "Libraries from older builds migrate in place instead of launching the app on temporary storage.",
    ],
  },
  {
    label: "v1.8",
    date: "September 2026",
    dateTime: "2026-09",
    headline: "The landscape player gets a real card, the iPad gets a real Library, and pictures stop popping in.",
    expect: [
      "Turn the phone sideways and tap Info or Chat: a Liquid Glass card docks to the edge of the screen while the video keeps playing.",
      "On iPad, Library is a sidebar with the section open beside it, starting on History with a Continue Watching shelf.",
      "Thumbnails you had to wait for fade and sharpen into place. Ones you have already seen appear instantly.",
      "Recent searches are a plain list again: one line per search.",
    ],
    keenEye: [
      "The Done button nests into the card's corner and the card's corners follow the display's.",
      "The Watched badge moved to the bottom-left of thumbnails, opposite the duration.",
      "Info, Chat, and Skip over the video share one height and one line from the edge.",
      "A thumbnail with a black border in dark mode, or a white one in light mode, gets a hairline edge. Others don't.",
      "While a thumbnail loads, the placeholder is that thumbnail's own average colour, not gray.",
      "Channel banners are no longer stretched, and the duration chip on library rows is glass with a corner that tucks into the thumbnail.",
      "The Latest button in live chat no longer flashes while you scroll toward the newest message.",
    ],
    underTheHood: [
      "The decoded-image cache grew from roughly twenty full-width thumbnails to a couple of screens in each direction, and views read it synchronously so a cached row never shows a placeholder frame.",
      "Banners and avatars request the size Google actually serves for the view instead of the largest one.",
      "The reveal animation runs blur in opaque mode and skips high-quality resampling, so a screenful of rows animates at full frame rate.",
      "List-versus-grid and split-versus-stack are decided by the layout system from the space available, with no screen-width breakpoints.",
    ],
  },
  {
    label: "v1.7",
    date: "September 2026",
    dateTime: "2026-09",
    headline: "Live chat in the player, diagnostics that stay on your phone, and a Piped build made for Atlas.",
    expect: [
      "Live streams get a chat transcript, and ended streams get a replay that follows the video. A Chat button in the player opens it.",
      "Atlas now recommends self-hosting Piped for Atlas, an open-source Piped deployment tuned for the app.",
      "Locking the phone from the full-screen player no longer stops playback.",
      "Settings has a Diagnostics page. Performance and crash reports stay on the device unless you share them.",
    ],
    keenEye: [
      "Ended broadcasts no longer wear a LIVE badge in search and channel rows.",
      "For You paints once, not three times, and later re-ranks animate rows into place.",
      "Landscape iPhone uses two columns whenever two fit.",
      "Shortcode emoji in chat render as real emoji.",
      "Missing avatars in For You and search are filled in from the channel page.",
    ],
    underTheHood: [
      "Direct and HLS streams use AVFoundation's native loader again, which fixes AV1 HLS that sat at waiting or played audio over a black picture.",
      "Playback recovers from an iOS media-services reset by swapping in a fresh player.",
      "Chat polling is clamped to protect small self-hosted instances, and failed avatars retry under a global budget so one broken image can't become a request storm.",
      "Spotlight indexes subscribed channels and playlists, and Handoff can pass the open video or channel to another device.",
    ],
  },
  {
    label: "v1.6",
    date: "July 2026",
    dateTime: "2026-07",
    headline: "Playback that survives bad streams, and a privacy policy that says what the app actually does.",
    expect: [
      "Videos start on adaptive HLS when the instance offers it, so quality changes happen inside the player instead of locking early.",
      "Longer browsing sessions in Home, For You, and Search keep loading without feeling like separate pages.",
      "The README and site show real screenshots.",
    ],
    keenEye: [
      "A stream that stalls, fails after starting, or carries an expired URL falls back more quietly.",
      "Thumbnail-heavy screens scroll steadier.",
    ],
    underTheHood: [
      "API, media, image, caption, artwork, redirect, and download requests share one set of destination and response policies.",
      "Backups, downloads, local persistence, and instance changes were hardened against malformed data and stale work.",
      "The privacy policy now documents direct media hosts, Apple system surfaces, unencrypted exports, diagnostics, and deletion behaviour.",
    ],
  },
  {
    label: "v1.5",
    date: "June 21, 2026",
    dateTime: "2026-06-21",
    headline: "AV1 when the device and instance can both do it, and a clean fallback when they can't.",
    expect: [
      "Capable devices reach sharper AV1 streams on instances that offer them.",
      "Playback backs away cleanly to a video/audio pair or a direct stream when something fails.",
      "Stats for Nerds, off by default, explains which source is playing and why.",
    ],
    keenEye: [
      "Cold AV1 manifests get a longer startup window, because some instances build them on demand.",
    ],
    underTheHood: [
      "AV1 HLS is attempted only when hardware decode is available and the instance reports AV1 streams for that video.",
      "Fallback refreshes older stream details before rebuilding the player, so expired URLs cause fewer failures.",
      "Stale AV1 manifest responses are avoided so old signed URLs can't poison the next attempt.",
    ],
  },
  {
    label: "v1.4",
    date: "June 19, 2026",
    dateTime: "2026-06-19",
    headline: "Search remembers, channels fill out, and For You learns from what you actually finish.",
    expect: [
      "Recent searches come back as suggestions next time you open Search.",
      "Channel pages show banners, subscriber counts, Shorts, and live metadata.",
      "For You learns from watches, searches, playlist saves, subscriptions, and Suggest More or Less.",
    ],
    keenEye: [
      "Watched videos stay on channel pages with a badge instead of disappearing.",
      "Followed channels get a boost, so they surface even on quiet days.",
    ],
    underTheHood: [
      "Watch completion is weighted: a video watched most of the way through counts more than one opened briefly.",
      "Failed searches are ignored as signals.",
    ],
  },
  {
    label: "v1.3",
    date: "June 16-17, 2026",
    dateTime: "2026-06-16",
    headline: "The player became a watch surface: info sheet, queue, chapters, and proper system playback.",
    expect: [
      "The Info sheet has the creator row, subscribe, playlist actions, description, comments, chapters, and the upcoming queue.",
      "Play Next and Add to Queue build a session queue that advances on its own.",
      "Both full-screen and embedded player styles, each with Picture in Picture, AirPlay, and background audio.",
    ],
    keenEye: [
      "Timestamps in descriptions and comments seek the player.",
      "Control Center, Lock Screen, and Dynamic Island controls behave like the system's because AVKit owns Now Playing.",
    ],
    underTheHood: [
      "Completed downloads play from disk first, keeping offline playback and resume intact.",
      "Downloaded videos can use a saved caption sidecar; captions stay off by default.",
    ],
  },
  {
    label: "v1.2",
    date: "June 15, 2026",
    dateTime: "2026-06-15",
    headline: "You pick the Piped instance. Atlas adds no account and no server of its own.",
    expect: [
      "Atlas ships without a default instance. Online features start once you add one in Settings.",
      "Subscriptions, history, playlists, downloads, settings, and search history live on the device.",
    ],
    keenEye: [
      "Settings links to a plain-language privacy policy.",
    ],
    underTheHood: [
      "Hosted instances require HTTPS; local and private-network hosts may use HTTP for self-hosting.",
      "The selected endpoint is stored securely on device.",
    ],
  },
  {
    label: "v1.1",
    date: "June 14, 2026",
    dateTime: "2026-06-14",
    headline: "Siri, Shortcuts, Spotlight, and layouts that use a bigger screen.",
    expect: [
      "Shortcuts actions for Search, Resume Watching, Open For You, Open Downloads, Play Video, Download Video, Add to Playlist, and Find Videos.",
      "Watched videos and completed downloads can show up in system search.",
      "Video grids add columns on larger screens.",
    ],
    keenEye: [
      "Videos with several creators show an overlapping avatar cluster.",
      "When a video exists online and as a download, Spotlight opens the local copy.",
    ],
    underTheHood: [
      "Videos and playlists are App Entities, so Shortcuts can chain results and create a playlist on demand.",
    ],
  },
  {
    label: "v1.0",
    date: "June 13, 2026",
    dateTime: "2026-06-13",
    headline: "A native iOS client for Piped. Watch without a Google account.",
    expect: [
      "Home with subscriptions, an unauthenticated feed, For You, and Shorts controls. Search for videos and channels.",
      "A player with HLS and progressive fallback, Picture in Picture, AirPlay, background audio, SponsorBlock, and resume.",
      "Offline downloads, watch history, and settings in the Library tab.",
    ],
    keenEye: [
      "Subscribe and unsubscribe work from channel pages and are stored locally.",
    ],
    underTheHood: [
      "PipedKit provides the API client, models, instance directory, and stream selection.",
      "Built in SwiftUI around native navigation, not a web wrapper.",
    ],
  },
];

const SECTIONS: readonly { key: keyof Pick<Summary, "expect" | "keenEye" | "underTheHood">; title: string }[] = [
  { key: "expect", title: "What to expect" },
  { key: "keenEye", title: "If you have a keen eye" },
  { key: "underTheHood", title: "Under the hood" },
];

export default function ChangelogSummaryPage() {
  return (
    <main className="shell prose changelog-page">
      <Link href="/changelog" className="back-link">
        ← Full changelog
      </Link>

      <p className="eyebrow">Changelog · Summary</p>
      <h1>The short version</h1>
      <p className="changelog-intro">
        Each release in a few lines: what you will notice right away, what you
        may notice if you look closely, and what changed underneath.
      </p>

      <ol className="changelog-list">
        {SUMMARIES.map((release) => (
          <li className="changelog-entry" key={release.label}>
            <div className="changelog-entry-meta">
              <span>{release.label}</span>
              <time dateTime={release.dateTime}>{release.date}</time>
            </div>

            <div className="changelog-entry-body">
              <p className="changelog-headline">{release.headline}</p>
              <div className="changelog-groups">
                {SECTIONS.map((section) => (
                  <section className="changelog-group" key={section.title}>
                    <h3>{section.title}</h3>
                    <ul>
                      {release[section.key].map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
