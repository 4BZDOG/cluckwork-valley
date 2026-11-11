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
     assets/video/ (keep it under 50 MB).                              */
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
  ]
};
