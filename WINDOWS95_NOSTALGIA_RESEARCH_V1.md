# Windows 95 / 98 nostalgia research V1

## Why the current skin feels too basic

The current Windows 95 Assistant already has the broad signifiers: teal desktop, grey panels, blue title bars, square edges, and a bottom taskbar. It reads as "Windows-ish," but not yet as a deep nostalgia hit because the details are still generic.

Main gaps visible in the screenshot:

1. **Too much big modern product UI inside old chrome**
   - The hero title is huge and modern-feeling.
   - Windows 95 UI was dense, small, procedural, and utility-like.
   - The skin should feel like an app running on the desktop, not a landing page wearing grey bevels.

2. **Insufficient real window anatomy**
   - Missing compact title bars with app icons and window control buttons.
   - Missing menu bars: `File`, `Edit`, `View`, `Help`.
   - Missing status bars and resize grips.
   - Main content does not yet feel like multiple actual Win95 windows/dialogs.

3. **Buttons are beveled but not system-accurate enough**
   - Need default-button focus rings, dotted focus rectangles, pressed 1px content shift, disabled engraved text, and exact `OK / Cancel / Apply / Browse...` style labels where appropriate.

4. **No Start menu / system tray moment**
   - The bottom strip says `start`, `skins.md`, `online`, `95`, but it does not yet behave or look like a true taskbar with Start button, active app button, tray icons, clock, and maybe a Start-menu popout.

5. **Typography still feels too web-like**
   - Use `MS Sans Serif`, `Microsoft Sans Serif`, `Tahoma`, `Arial`, sans-serif.
   - UI copy should be closer to 8pt/9pt system text: 11–12px, plain, cramped.
   - Reduce big bold modern typography except where deliberately parodying an app splash screen.

6. **No icon language yet**
   - Real nostalgia comes from `16x16` / `32x32` icons: computer, folder, document, help, warning, recycle bin, network, setup disk.
   - We should use original pixel icons in that grammar, not Microsoft assets.

7. **No classic controls beyond buttons**
   - Missing group boxes, tabs, list views, tree views, toolbar separators, status panes, scrollbars, checkboxes, radio buttons, and property sheets.

8. **Too much smooth/soft atmosphere**
   - Authentic Win95 should be mostly hard-edge, immediate, low-animation.
   - No glow except maybe very subtle CRT/desktop dust. No modern transitions.

## References to study / emulate safely

Use these as visual grammar references, not as asset sources.

### Windows 95 / 98 screenshots and GUI galleries

- Guidebook Gallery — Windows 95 screenshots: https://guidebookgallery.org/screenshots/win95
- Guidebook Gallery — Windows 95 GUI overview: https://guidebookgallery.org/guis/windows/win95
- Guidebook Gallery — Windows 98 screenshots: https://guidebookgallery.org/screenshots/win98
- Guidebook Gallery — Windows 98 GUI overview: https://guidebookgallery.org/guis/windows/win98
- ToastyTech Windows 95 screenshots: http://toastytech.com/guis/win95.html
- ToastyTech Windows 98 screenshots: http://toastytech.com/guis/win98.html

### Web UI kits / implementation references

- 98.css: https://jdan.github.io/98.css/
- 98.css GitHub: https://github.com/jdan/98.css
- React95: https://react95.io/
- React95 GitHub: https://github.com/React95/React95
- XP.css, useful only as contrast for later Windows eras: https://botoxparty.github.io/XP.css/
- 7.css, useful only as contrast for later Windows eras: https://khang-nd.github.io/7.css/

### Microsoft documentation / design concepts

- Windows UX guidelines: https://learn.microsoft.com/en-us/windows/win32/uxguide/guidelines
- Command buttons: https://learn.microsoft.com/en-us/windows/win32/uxguide/ctrl-command-buttons
- Dialog boxes: https://learn.microsoft.com/en-us/windows/win32/uxguide/ctrl-dialog-boxes
- Common controls reference: https://learn.microsoft.com/en-us/windows/win32/controls/common-control-reference
- System metrics: https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsystemmetrics
- System colors: https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsyscolor

### Winamp / late-90s skin culture references

- Webamp: https://webamp.org/
- Webamp GitHub: https://github.com/captbaritone/webamp
- Winamp Skin Museum / Webamp skins: https://skins.webamp.org/

## Authentic visual grammar

### Core palette

Use system-color tokens rather than ad-hoc colors:

```css
--win-desktop: #008080;
--win-face: #c0c0c0;
--win-face-alt: #d4d0c8;
--win-text: #000000;
--win-highlight: #000080;
--win-highlight-98: #0a246a;
--win-highlight-text: #ffffff;
--win-button-highlight: #ffffff;
--win-button-light: #dfdfdf;
--win-button-shadow: #808080;
--win-button-dark-shadow: #404040;
--win-window-frame: #000000;
```

### Bevel system

The key nostalgia mechanism is not just grey; it is the strict bevel logic:

- Raised: top/left light, bottom/right dark.
- Sunken: top/left dark, bottom/right light.
- Pressed: content shifts `1px` down/right.
- Focused: dotted rectangle, not glow.
- Disabled: grey text plus white offset highlight.

Reusable classes to add:

```css
.win-raised
.win-sunken
.win-pressed
.win-focus-dotted
.win-status-pane
.win-resize-grip
```

### Typography

- Primary UI: `"MS Sans Serif", "Microsoft Sans Serif", Tahoma, Arial, sans-serif`.
- Mono/path/status: `"Lucida Console", Monaco, monospace`.
- Default UI text: 11–12px.
- Window title bars: 11–12px bold.
- Avoid large modern hero type in the retro skin.

### Window anatomy

A real Win95 feeling should include:

- Outer raised frame.
- Active title bar with icon, title text, min/max/close buttons.
- Menu bar: `File Edit View Help`.
- Toolbar strip with tiny square buttons.
- Client area.
- Status bar with multiple sunken panes.
- Resize grip in bottom-right.

### Dialog anatomy

Assistant responses can become message/dialog windows:

- Left system icon: info / warning / question / document.
- Message text on white or grey client area.
- Bottom buttons: `Copy`, `Retry`, `OK`.
- Optional status line: `For Help, press F1`.

### Taskbar anatomy

Replace the current basic bottom strip with a true taskbar:

- Raised grey bar, about 30px high.
- Start button with tiny original flag-like/skinned icon and bold `Start`.
- Active app task button: `Assistant.exe` or `SKINS.MD`.
- Optional inactive task buttons: `Prompt Library`, `Settings`.
- Tray: small original icons for `NET`, `KEY`, `CPU`, `AUDIO`.
- Clock: actual local-ish display or fixed retro text like `4:05 PM`.
- Resize/gripper/separator handles.

### Start menu moment

High-impact nostalgia feature:

- Clicking/hovering Start opens a small menu upward.
- Left vertical branding strip: `ASSISTANT 95`, not Microsoft branding.
- Items:
  - `Programs ▸`
  - `Prompts ▸`
  - `Skins ▸`
  - `Settings`
  - `Find...`
  - `Help Topics`
  - `Run...`
  - separator
  - `Shut Down Assistant...`

This would create a strong screenshot/share moment.

### Desktop icons

Add sparse desktop icons on the teal background behind panels:

- `My Prompts`
- `Skin Library`
- `Provider Key`
- `Recycle Bin`
- `Network Neighborhood`

Use original pixel icons. No Microsoft asset copying.

### Menu bars

Each major panel should get a menu bar:

- Main chat window:
  - `File Edit View Skin Help`
- Sidebar/skin manager:
  - `Skins Install Preview Options`

Menu item hover should use blue selection with white text.

### Classic controls for current UI mapping

- Provider selector: group box titled `Connect using:` with radio-button-like options or icon grid.
- Skin selector: Explorer list view with columns: `Name`, `Type`, `Mood`, `Version`.
- Prompt chips: toolbar buttons or menu items, not modern pills.
- Composer: sunken `Edit` control inside a dialog/window, with `Send`, `Cancel`, `Browse...` buttons.
- Mode switch: property-sheet tabs: `AI Chat` and `AI Agent` rather than modern cards.

## Winamp / late-90s skin culture layer

For a stronger consumer nostalgia hit, mix Windows 95 shell with Winamp-era skin culture without copying Winamp assets.

### Useful cues

- Windowshade composer: collapsed horizontal mini-window with status and tiny controls.
- LCD/segmented text strip: `READY`, `THINKING`, `STREAMING`, `DONE`.
- Equalizer metaphor: response sliders for `DEPTH`, `SPEED`, `TONE`, `CHAOS`, `FORMAL`.
- Playlist metaphor: prompt/history list like a playlist.
- Tiny transport buttons:
  - play = send/continue
  - pause = stop
  - next = next suggestion
  - repeat = regenerate
  - eject = open attachments/import
- Skin library metadata: fake file names, author, version, license, `LOAD` button.

### Safe AI-native labels

- `LOAD`
- `SAVE`
- `EDIT`
- `SYNC`
- `LOCK`
- `AUTO`
- `SCAN`
- `MEM`
- `BUF`
- `GAIN`
- `MODE`
- `PRESET`
- `QUEUE`
- `ACTIVE`
- `IDLE`
- `DECODING`
- `STREAM`

## Recommended next implementation pass

### Pass 1 — make it real Win95, not modern UI with grey chrome

1. Convert main header into a proper window:
   - title bar `Windows 95 Assistant - [AI Chat]`
   - 16x16 original app icon
   - minimize/maximize/close controls
   - menu bar `File Edit View Skin Help`
   - status bar with `Ready`, `1 skin selected`, `F1 Help`

2. Convert mode cards into property-sheet tabs:
   - `AI Chat` tab active
   - `AI Agent` tab disabled/next
   - content panel below tabs

3. Convert prompt chips into toolbar buttons:
   - `Study Plan`
   - `Executive Briefing`
   - `Anime Tutor`
   - plus separator lines

4. Replace bottom HUD with true taskbar:
   - `Start`
   - active task button `Assistant.exe`
   - tray icons and clock

5. Add dotted focus rings and exact pressed states.

### Pass 2 — add desktop/shell nostalgia

1. Add desktop icons behind the app panels.
2. Add Start menu popout.
3. Add Explorer-style skin selector:
   - list rows, selected blue row, columns, tiny icons.
4. Add original pixel icon set.

### Pass 3 — add Winamp/shell hybrid elements

1. Add LCD status strip to composer.
2. Add windowshade composer option.
3. Add response tuning mini equalizer.
4. Add playlist-like prompt/history panel.

## What not to do

- Do not copy Microsoft icons, logos, or exact bitmap assets.
- Do not copy Winamp chrome or exact skin graphics.
- Do not use modern glow/blur/pills inside the retro skin.
- Do not keep the huge modern marketing title if the selected skin is Windows 95; use a window title and app/dialog conventions.
- Do not make the UI too spacious. A little cramped is correct.

## Success criteria for the next screenshot

The next Windows 95 screenshot should instantly show:

- Real taskbar with Start button, active app button, tray, clock.
- At least one full window with title bar, icon, controls, menu bar, client area, status bar, resize grip.
- Property-sheet tabs for AI Chat / AI Agent.
- Explorer/list-view style skin selector or skin manager.
- Original 16x16/32x32 pixel icons.
- Dotted focus rings and pressed/sunken states.
- Mostly 11–12px system UI text.
- No modern hero-card feeling.

Target emotional read:

> “This is not just teal + bevels. This feels like I opened an AI companion inside a weird 1996 desktop shareware app.”
