## 2025-01-12 - Dynamic Action Labels on Auto-Play Toggle Buttons
**Learning:** Toggle buttons that change state (e.g. Play/Pause or Start/Stop auto-play) must update their `title` and `assistiveText` dynamically to announce the target action (e.g., "Start auto-play" when currently stopped) rather than hardcoding a static label ("Stop auto-play").
**Action:** When working with dual-state toggle components, ensure `title` and `assistiveText` dynamically describe the action triggered upon activation based on state (e.g. `stop ? 'Start auto-play' : 'Stop auto-play'`).
