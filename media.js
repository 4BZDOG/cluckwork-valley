/* =====================================================================
   🐔 CLUCKWORK VALLEY — MEDIA MANIFEST
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to add photos & videos.
   1. Drop your image into the right folder inside /assets
   2. Fill in the matching entry below (keep the quotes and commas!)
   3. Commit + push. GitHub Pages rebuilds in ~1 minute.
   Empty entries ("") show a fun placeholder card instead.
   Full guide: docs/HOW-TO-ADD-MEDIA.md
   ===================================================================== */

window.CLUCKWORK_MEDIA = {

  /* 🎬 FLY-THROUGH VIDEOS -------------------------------------------
     Paste the YouTube *video ID* (the bit after v= in the link), e.g.
     https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
     Use an UNLISTED upload. Or use "file" with a path to an .mp4 in
     assets/video/ (keep it under 50 MB). Optional: poster: "assets/…jpg"
     sets the still image shown until a video is added.                */
  videos: [
    { title: "The Grand Fly-Through (official trailer)", youtube: "", file: "" },
    { title: "Chicken Co Tower: 30 floors in 30 seconds", youtube: "", file: "" },
    { title: "Harvest Loop in real time (sugar cane cam)", youtube: "", file: "" },
    { title: "Teleporter speed-run: every zone, one minute", youtube: "", file: "" }
  ],

  /* 📸 STUDIO SELFIES ------------------------------------------------
     One card per studio member. Use first names or gamer tags only —
     never full names. Photo: assets/team/<something>.jpg (square-ish).  */
  team: [
    { name: "", role: "⚙️ Systems & Logic Lead",          photo: "", quote: "" },
    { name: "", role: "⚙️ Systems & Logic Lead",          photo: "", quote: "" },
    { name: "", role: "🗺️ Level & World Designer",        photo: "", quote: "" },
    { name: "", role: "🗺️ Level & World Designer",        photo: "", quote: "" },
    { name: "", role: "🗺️ Level & World Designer",        photo: "", quote: "" },
    { name: "", role: "🗺️ Level & World Designer",        photo: "", quote: "" },
    { name: "", role: "🎨 UI / UX & Accessibility",        photo: "", quote: "" },
    { name: "", role: "🎨 UI / UX & Accessibility",        photo: "", quote: "" },
    { name: "", role: "🧪 QA & Testing Lead",              photo: "", quote: "" },
    { name: "", role: "🧪 QA & Testing Lead",              photo: "", quote: "" },
    { name: "", role: "📢 Media & Communications Lead",    photo: "", quote: "" },
    { name: "", role: "🎲 Odd-Jobs Command Block Wizard",  photo: "", quote: "" }
  ],

  /* 🖼️ SCREENSHOT GALLERY -------------------------------------------
     Add as many as you like. Put files in assets/shots/.              */
  gallery: [
    /* GALLERY_START */
    { src: "assets/shots/shot-13.jpg", caption: "Welcome to the Automated Factory 🏭" },
    { src: "assets/shots/shot-02.jpg", caption: "Plinko Palace: gold stairs, glass aquariums" },
    { src: "assets/shots/shot-24.jpg", caption: "The lava-walled factory after dark" },
    { src: "assets/shots/shot-11.jpg", caption: "Greenhouse wheat, bonemeal-boosted" },
    { src: "assets/shots/shot-21.jpg", caption: "The vertical crop tower" },
    { src: "assets/shots/shot-10.jpg", caption: "Sugar cane alley: observers on watch" },
    { src: "assets/shots/shot-08.jpg", caption: "The Great Lava Wall" },
    { src: "assets/shots/shot-12.jpg", caption: "Fox on patrol in the berry patch" },
    { src: "assets/shots/shot-26.jpg", caption: "Brick greenhouse + lantern garden" },
    { src: "assets/shots/shot-03.jpg", caption: "The checkerboard boulevard at night" },
    { src: "assets/shots/shot-22.jpg", caption: "Rail line to the factory district" },
    { src: "assets/shots/shot-05.jpg", caption: "Storage depot by the rail line" },
    { src: "assets/shots/shot-14.jpg", caption: "The white arch gateway" },
    { src: "assets/shots/shot-17.jpg", caption: "Chicken Co: the CEO's office 🐔💼" },
    { src: "assets/shots/shot-15.jpg", caption: "Balcony HQ under beacon beams" },
    { src: "assets/shots/shot-01.jpg", caption: "Redstone tunnel to the lantern" },
    { src: "assets/shots/shot-23.jpg", caption: "Giant redstone torch landmark" },
    { src: "assets/shots/shot-09.jpg", caption: "Torch-lit track along the lava slope" },
    { src: "assets/shots/shot-06.jpg", caption: "Purple-lit promenade" },
    { src: "assets/shots/shot-04.jpg", caption: "Decor storage, very organised (honest)" },
    { src: "assets/shots/shot-07.jpg", caption: "Night shift in the frame yard" },
    { src: "assets/shots/shot-16.jpg", caption: "Hay bale delivery service" },
    { src: "assets/shots/shot-18.jpg", caption: "Sunset gallery room" },
    { src: "assets/shots/shot-19.jpg", caption: "Parrot parade 🦜" },
    { src: "assets/shots/shot-20.jpg", caption: "The workshop hall" },
    { src: "assets/shots/shot-25.jpg", caption: "Golem meets lava" },
    { src: "assets/shots/shot-27.jpg", caption: "A pig, living its best life" },
    { src: "assets/shots/shot-28.jpg", caption: "The farm-to-table kitchen" },
    /* GALLERY_END */
  ],

  /* 🤳 "IN THE WILD" — selfies WITH the build, behind-the-scenes
     moments, whiteboard plans, bug-hunt chaos. Empty = placeholder.   */
  behindTheScenes: [
    { src: "", caption: "Group selfie in front of the Iron Golem" },
    { src: "", caption: "The whiteboard where the Harvest Loop was born" },
    { src: "", caption: "Mid-playtest panic face" },
    { src: "", caption: "Victory pose at the top of Chicken Co" }
  ],

  /* 🧱 BUILD HISTORY — every saved world, in order --------------------
     One entry per checkpoint. Summaries only: no student names, no
     account data, no world files. Dates match the sprint log in the
     Portfolio (v0.2 22 Oct, v0.3 23 Oct, v0.4 6 Nov).                  */
  builds: [
    { label: "v1 · Early prototype", date: "15–22 Sep 2026", status: "Archived",
      mode: "Creative · peaceful", photos: 0,
      changes: "The first saved world. Creative mode, peaceful, PvP and LAN off." },
    { label: "v2 · Lean rebuild", date: "13–15 Oct 2026", status: "Archived",
      mode: "Creative · peaceful", photos: 0,
      changes: "About 83 minutes of game time after v1. The save is about a third smaller than v1; the reason is still being checked." },
    { label: "v0.2 · Scope checkpoint", date: "22 Oct 2026", status: "Archived",
      mode: "Creative · easy", photos: 68,
      changes: "About 2 hours of game time added. Documentation photos added (68). Difficulty set to easy, PvP and LAN turned on, new world icon." },
    { label: "v0.3 · Alpha checkpoint", date: "23 Oct 2026", status: "Archived",
      mode: "Creative · easy", photos: 68,
      changes: "About an hour of game time added. Same photos. Multiplayer turned off, new world icon." },
    { label: "Teleporter copy", date: "23 Oct 2026", status: "Duplicate",
      mode: "Same as v0.3", photos: 68,
      changes: "Byte-for-byte identical to v0.3, so no new content. Kept as the command-block teleporter reference." },
    { label: "v0.4 · Beta checkpoint", date: "27 Oct – 6 Nov 2026", status: "Latest saved",
      mode: "Survival · easy", photos: 70,
      changes: "About 3.4 hours of game time added. Two new photos, survival game mode, saved in a newer Minecraft version (1.26.33). The most complete save so far." },
    { label: "FINAL", date: "13 Nov 2026 (planned)", status: "Planned",
      mode: "", photos: 0,
      changes: "Final export and launch of the valley." }
  ]
};
