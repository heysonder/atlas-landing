import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas · Changelog",
  description:
    "Product updates for Atlas, the native iOS client for Piped.",
};

const RELEASES = [
  {
    label: "v1.6",
    date: "July 2026",
    dateTime: "2026-07",
    title: "Playback reliability, privacy hardening, and public screenshots",
    summary:
      "The newest beta is focused on making everyday playback more resilient and making the public project easier to evaluate at a glance.",
    groups: [
      {
        title: "Playback",
        changes: [
          "Atlas now prefers adaptive HLS manifests when they are available, letting AVPlayer handle quality changes instead of pinning playback to a fixed stream too early.",
          "Runtime fallback is more forgiving when a source stalls, fails after startup, or carries an expired signed URL.",
          "AV1 startup was tuned so capable devices can still reach sharper streams without making ordinary playback feel fragile.",
        ],
      },
      {
        title: "Feeds",
        changes: [
          "Home, For You, and Search pagination were tightened so longer browsing sessions can keep loading without feeling like separate pages.",
          "Feed loading does less unnecessary work while scrolling, which helps thumbnail-heavy screens feel steadier.",
        ],
      },
      {
        title: "Privacy and safety",
        changes: [
          "API, media, image, caption, artwork, redirect, and download requests now share stricter destination and response policies.",
          "Backups, downloads, local persistence, instance changes, and recovery behavior were hardened against malformed data and stale work.",
          "The public privacy policy now documents direct media hosts, Apple system surfaces, unencrypted exports, diagnostics, and the app's actual deletion behavior.",
        ],
      },
      {
        title: "Site",
        changes: [
          "The public README and website now show real app screenshots for the For You feed, channel pages, video info sheet, and channel list.",
        ],
      },
    ],
  },
  {
    label: "v1.5",
    date: "June 21, 2026",
    dateTime: "2026-06-21",
    title: "AV1, stream fallback, and player diagnostics",
    summary:
      "This pass made the stream pipeline more explicit: Atlas tries the best source it can, then backs away cleanly when an instance or device cannot support it.",
    groups: [
      {
        title: "AV1 HLS",
        changes: [
          "AV1 HLS is only attempted when the device supports AV1 hardware decode and the selected Piped instance actually reports AV1 streams for the video.",
          "Cold AV1 masters get a longer startup window before fallback, because some Piped instances generate those manifests on demand.",
          "The app avoids stale AV1 manifest responses so old signed media URLs do not poison the next playback attempt.",
        ],
      },
      {
        title: "Fallbacks",
        changes: [
          "HLS can fall back to a composed video/audio pair or a direct source when runtime playback fails.",
          "Composed playback can fall back to direct playback instead of ending in a no-playable-stream state.",
          "Fallback refreshes older stream details before rebuilding the player, reducing failures caused by expired URLs.",
        ],
      },
      {
        title: "Diagnostics",
        changes: [
          "Optional Stats for Nerds helps explain the selected source, quality ceiling, AV1 status, and fallback reason.",
          "Preferred audio-track selection was threaded into the stream builder so dubs and alternate tracks can be handled intentionally.",
        ],
      },
    ],
  },
  {
    label: "v1.4",
    date: "June 19, 2026",
    dateTime: "2026-06-19",
    title: "Search history, richer channels, and smarter For You signals",
    summary:
      "Discovery became more personal without adding an account: Atlas uses local activity and the chosen Piped instance to make browsing feel less blank.",
    groups: [
      {
        title: "Search",
        changes: [
          "Recent searches are stored locally, de-duped, and used as suggestions the next time you open Search.",
          "Remote query suggestions still come from the selected Piped instance after a short debounce.",
          "Successful searches become local signals for For You; failed searches are ignored.",
        ],
      },
      {
        title: "Channels",
        changes: [
          "Channel pages show richer metadata, including banners, avatars, subscriber counts, upload pagination, Shorts tab data, and live metadata.",
          "Watched videos stay visible on channel pages with badges instead of disappearing, preserving the channel's full catalog.",
        ],
      },
      {
        title: "For You",
        changes: [
          "The personalized feed learns from watches, recent searches, playlist saves, subscriptions, and Suggest More / Suggest Less feedback.",
          "Watch completion now matters: a video watched most of the way through carries more weight than one opened briefly.",
          "Subscriptions seed candidates and get a ranking boost, so followed channels can surface even on quieter topic days.",
        ],
      },
    ],
  },
  {
    label: "v1.3",
    date: "June 16-17, 2026",
    dateTime: "2026-06-16",
    title: "Info sheet, queue, chapters, and system playback",
    summary:
      "The player moved from simple video playback toward a full watch surface with native controls, useful context, and local library actions.",
    groups: [
      {
        title: "Player surfaces",
        changes: [
          "Atlas supports both fullscreen and embedded player styles, each backed by AVKit with Picture in Picture, AirPlay, and background audio.",
          "Now Playing controls are owned by AVKit, improving Control Center, Lock Screen, and Dynamic Island behavior.",
          "Captions stay off by default, while downloaded videos can use a saved caption sidecar when one is available.",
        ],
      },
      {
        title: "Info sheet",
        changes: [
          "The info sheet includes the creator row, subscribe toggle, playlist actions, description, comments, chapters, and upcoming queue.",
          "Timestamps in descriptions and comments can seek the current player.",
          "Comments can be previewed from the sheet or expanded into a full paginated view.",
        ],
      },
      {
        title: "Queue and library",
        changes: [
          "Play Next and Add to Queue create a session-only queue that advances when the current video ends.",
          "Videos can be saved into local playlists from card menus, shortcuts, and the player info sheet.",
          "Completed downloads play from disk first, preserving offline playback and resume support.",
        ],
      },
    ],
  },
  {
    label: "v1.2",
    date: "June 15, 2026",
    dateTime: "2026-06-15",
    title: "Explicit instance setup and local-first data",
    summary:
      "Atlas tightened its privacy model around one clear rule: the user chooses the Piped instance, and Atlas does not add an account or server of its own.",
    groups: [
      {
        title: "Instance setup",
        changes: [
          "Atlas does not ship with a default Piped instance. Online features start after the user adds an instance in Settings.",
          "Hosted instances require HTTPS, while local or private-network hosts can use HTTP for self-hosting and development.",
          "The selected endpoint is persisted securely on device.",
        ],
      },
      {
        title: "Local data",
        changes: [
          "Subscriptions, history, playlists, downloads, settings, and search history are stored on device.",
          "There is no Atlas sign-in, no Atlas-hosted watch database, and no Piped account sync requirement.",
          "The app links to a plain-language privacy policy from Settings.",
        ],
      },
    ],
  },
  {
    label: "v1.1",
    date: "June 14, 2026",
    dateTime: "2026-06-14",
    title: "Siri, Shortcuts, Spotlight, and larger-screen layouts",
    summary:
      "Atlas started integrating with the system around the app, making local videos and common actions easier to reach.",
    groups: [
      {
        title: "Shortcuts",
        changes: [
          "Atlas exposes actions for Search, Resume Watching, Open For You, Open Downloads, Play Video, Download Video, Add to Playlist, and Find Videos.",
          "Video and playlist parameters are App Entities, so Shortcuts can chain visible results and create a playlist on demand.",
          "Siri can open search flows and act on selected videos without requiring a Piped account.",
        ],
      },
      {
        title: "Spotlight",
        changes: [
          "Watched videos and completed downloads can be indexed for system search.",
          "When a video exists both online and as a completed download, Atlas prefers the local copy so playback can work offline.",
        ],
      },
      {
        title: "iPad",
        changes: [
          "Video grids adapt into more columns on larger screens.",
          "Multi-creator videos can show an overlapping avatar cluster instead of collapsing every creator into plain text.",
        ],
      },
    ],
  },
  {
    label: "v1.0",
    date: "June 13, 2026",
    dateTime: "2026-06-13",
    title: "Native Piped client for iOS",
    summary:
      "The first public beta established the core shape of Atlas: a native iOS client for watching through Piped without a Google account.",
    groups: [
      {
        title: "Browsing",
        changes: [
          "Home includes local subscriptions, an unauthenticated feed, a For You mode, and Shorts controls.",
          "Search supports videos and channels through the selected Piped instance.",
          "Channel pages include subscribe and unsubscribe controls backed by local data.",
        ],
      },
      {
        title: "Watching",
        changes: [
          "The player supports HLS with progressive fallback, Picture in Picture, AirPlay, background audio, SponsorBlock, and resume from the last saved position.",
          "Offline downloads can be saved and played back locally.",
          "Watch history and core settings live in the Library tab.",
        ],
      },
      {
        title: "Foundation",
        changes: [
          "PipedKit provides the app's Piped API client, Codable models, instance directory, and stream-selection helpers.",
          "The app is built in SwiftUI and designed around native iOS navigation rather than a web wrapper.",
        ],
      },
    ],
  },
] as const;

export default function ChangelogPage() {
  return (
    <main className="shell prose changelog-page">
      <Link href="/" className="back-link">
        ← Back to Atlas
      </Link>

      <p className="eyebrow">Changelog</p>
      <h1>What changed in Atlas</h1>
      <p className="changelog-intro">
        A short history of the beta, focused on the user-facing changes that
        make Atlas calmer, more private, and more useful on iOS.
      </p>

      <ol className="changelog-list">
        {RELEASES.map((release) => (
          <li className="changelog-entry" key={release.title}>
            <div className="changelog-entry-meta">
              <span>{release.label}</span>
              <time dateTime={release.dateTime}>{release.date}</time>
            </div>

            <div className="changelog-entry-body">
              <h2>{release.title}</h2>
              <p>{release.summary}</p>
              <div className="changelog-groups">
                {release.groups.map((group) => (
                  <section className="changelog-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.changes.map((change) => (
                        <li key={change}>{change}</li>
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
