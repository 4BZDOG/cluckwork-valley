# 📸 How to add your selfies, screenshots & fly-through videos

The whole site reads from **one file: [`media.js`](../media.js)**. Anything left empty shows a placeholder card, so the site never looks broken. Fill in a slot and its placeholder turns into your photo or video.

> 🛑 **Privacy rules (non-negotiable)**
> - First names or gamer tags only. **Never** surnames, emails or student numbers.
> - No school uniforms with logos, no name badges, and nothing behind you that shows where you live.
> - Everyone in a selfie must say "yes" before it goes up.
> - Turn off in-game name tags before screenshots (Settings → Video → *Hide HUD* / F1 on PC).
> - Videos go up as **Unlisted** on YouTube, with comments off.

---

## 1. 🤳 Studio selfies (Meet the Studio section)

1. Take a square-ish photo (a phone is fine). Crop it to roughly 600 × 600 px.
2. Save it as `assets/team/yourname.jpg` (lowercase, no spaces).
3. In `media.js`, find your role in the `team:` list and fill it in:

```js
{ name: "Riz", role: "⚙️ Systems & Logic Lead", photo: "assets/team/riz.jpg", quote: "I speak fluent redstone." },
```

Ideas for fun shots: hold a cardboard chicken, wear a hard hat, or make your "observer just saw cane grow" face.

## 2. 🖼️ Screenshots (Gallery)

* **PC:** F2 (Minecraft) or Win + Shift + S. **iPad:** the in-game Camera item or the Portfolio.
* Save as `.jpg`, about 1280 px wide (under 400 KB is ideal), in `assets/shots/`.
* Add a line to the `gallery:` list:

```js
{ src: "assets/shots/golem-night.jpg", caption: "Golem eyes ON at 7pm" },
```

**Shots we still want:** the golem's eyes at night, the elevator floor-picker HUD, the arena winner title, the Market sign, a top-down map from high up, and command-block chains with their **"Show Command"** panel open.

## 3. 🤳 Behind the Scenes (selfies *with* the build)

Same steps, but the files go in `assets/bts/` and the lines go in the `behindTheScenes:` list. Captions are already waiting for you; just add the `src`.

## 4. 🎬 Fly-through videos

**Recording (PC):** Win + G opens Xbox Game Bar, then press Record. Or use OBS (1920×1080, 30 fps).
**Smooth fly-throughs:** `/gamemode spectator`, then hide the HUD (F1) and fly slowly. Tip: hold Ctrl only for long straight shots.

**Upload:** YouTube, Visibility: **Unlisted**. Copy the video ID (the part after `v=`):

```
https://www.youtube.com/watch?v=AbCdEf12345  →  "AbCdEf12345"
```

```js
{ title: "The Grand Fly-Through (official trailer)", youtube: "AbCdEf12345", file: "" },
```

The first video in the list becomes the big featured player. You can also put a short `.mp4` (under 50 MB) in `assets/video/` and use `file: "assets/video/trailer.mp4"`.

Suggested shot list for the 3–5 minute walkthrough (use the trailer script in the Press Kit for the 30 s teaser):

| Time | Shot | Who talks |
|---|---|---|
| 0:00 | Drone over the Lava Wall → Hub | Media Lead: premise & lore |
| 0:30 | Teleport speed-run | Command Block Wizard |
| 1:00 | Sugar Mill: observer → piston → hopper, with the "Show Command" panel | Systems Lead |
| 1:45 | Golem at sunset, eyes switching on | UI/UX |
| 2:15 | Elevator floor picker → Floor 17 | Systems Lead |
| 2:45 | Market buy/sell and the "not enough coins" branch | QA Lead (tell the bug #4 story) |
| 3:30 | Arena round, win title, reset lever | Level Designer |
| 4:15 | Rest Field + Agent `replant` | UI/UX (Caring for Country) |
| 4:45 | Top of Chicken Co: Employee of the Month | Everyone 🐔 |

## 5. Publish

```bash
git add .
git commit -m "Add team selfies and trailer"
git push
```

GitHub Pages redeploys in about 1 minute (watch the **Actions** tab). Hard-refresh the site with Ctrl + F5.

No Git? On github.com, open the repo and choose **Add file → Upload files**, drop images into the right `assets/` folder, then click the pencil icon on `media.js` to edit it in the browser.
