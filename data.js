const musicians = [
  {
    id: "The-Peralta-Family",
    type: "band",
    name: "The Peralta Family",
    genres: ["Classical"],
    location: "Wellsville, NY",
    size: [2, 3, 4],
    description: "The Peralta Family is a family of strings players from Venezuela. They specialize in classical music, perfect for weddings and other upscale events.",
    contact: "text 585-808-7548 or DM on Instagram @davidperalta19"
  },
  {
    id: "Buckwheat-Infamous",
    type: "person",
    name: "Buckwheat (Infamous)",
    genres: ["Country", "Folk", "Oldies", "Improvisational"],
    location: "Wellsville, NY",
    instruments: ["Guitar", "Bass", "Vocals", "Mandolin", "Melodica", "Harmonica"],
    bands: ["The-Wheating-Crew"],
    description: "Buckwheat is a multi-instrumentalist and singer-songwriter from Wellsville, NY. He has been performing for over 10 years and has a passion for country and folk music.",
    contact: "email eric.scutt@gmail.com or text 814-655-6802"
  },
  {
    id: "Gabriel-Malcolm",
    type: "person",
    name: "Gabriel Malcolm",
    genres: ["Country", "Folk", "Oldies", "Indie", "Pop"],
    location: "Wellsville, NY",
    instruments: ["Guitar", "Bass", "Vocals", "Piano", "Violin"],
    bands: ["The-Wheating-Crew"],
    description: "Gabriel Malcolm is a multi-instrumentalist and singer-songwriter from Wellsville, NY. They have been performing for 3 years and writing for 10. They have a passion for 'sad-girl-indie' and oldies music.",
    contact: "email gabrielm.geta@gmail.com or find them on social media @gayb.m"
  },
  {
    id: "The-Wheating-Crew",
    type: "band",
    name: "The Wheating Crew",
    genres: ["Country", "Folk", "Oldies"],
    location: "Wellsville, NY",
    size: [3, 4],
    description: "The Wheating Crew is a dynamic band from Wellsville, NY. They specialize in country and folk music, bringing energy and authenticity to every performance.",
    contact: "email eric.scutt@gmail.com or text 814-655-6802"
  },
  {
    id: "Don-and-Deb",
    type: "band",
    name: "Don and Deb",
    genres: ["Folk"],
    location: "Belmont, NY",
    size: [2],
    description: "Don and Deb enjoy creating harmonies around songs about peace and encouragement.",
    contact: "email donb1449@gmail.com or text 828-553-7543"
  },
  {
    id: "Dave-Balliett",
    type: "person",
    name: "Dave Balliett aka: 'Hilltop Hermit'",
    genres: ["Folk", "Roots", "Americana"],
    location: "Woodhull, NY",
    instruments: ["Guitar", "Vocals"],
    description: "Dave always enjoys creating a personal version of well-written songs and is always looking for new songs to relate to and personalize.",
    contact: "email corningmakemusic25@gmail.com"
  },
  {
    id: "Rich-English",
    type: "person",
    name: "Rich English",
    genres: ["Folk", "Country", "Classical", "Improvisational"],
    location: "Wellsville, NY",
    instruments: ["Violin"],
    bands: ["The-Wheating-Crew"],
    description: "'English & a fiddle' is a well seasoned violinist who has a deep love for playing for any crowd and any event. He boasts the ability to play anything 'country to classic'",
    contact: "email richenglish843@gmail.com or text 843-725-8607"
  },
  {
    id: "Micah-Gena",
    type: "person",
    name: "Micah Gena",
    genres: ["Folk", "Alternative", "Indie"],
    location: "Wellsville, NY",
    instruments: ["Guitar", "Vocals"],
    description: "Micah is relatively new to the music scene, but loves to play for small crowds. He has five years of playing experience and three years of performing experience.",
    contact: "contact information not yet provided"
  },
  {
    id: "Sponduli",
    type: "band",
    name: "Sponduli",
    genres: ["Rock", "Prog", "Prog-Rock", "Prog-Punk"],
    location: "Alfred, NY",
    size: [4],
    description: "We are Sponduli, a progressive rock band located in Alfred, NY. Our first record will be out soon, but you can be among the first to critique our music by finding us in Alfred.",
    contact: "DM them on Instagram @more.sponduli"
  },
  {
    id: "cori-lunn",
    type: "person",
    name: "cori lunn",
    genres: ["Folk", "Indie"],
    location: "Wellsville, NY",
    instruments: ["Guitar", "Vocals"],
    description: "hi! i'm cori... i make music in my house. mostly acoustic guitar songs but some secret edm as well on the side :)",
    contact: " search 'cori lunn' on spotify or 'sorrelclover' on soundcloud"
  },
  {
    id: "BigmanJojo",
    type: "person",
    name: "BigmanJojo",
    genres: ["Hip-Hop", "R&B", "Soul", "Country"],
    location: "Scio, NY",
    instruments: ["Guitar", "Ukelele", "Bass", "Bongos", "Vocals", "Production"],
    description: "Science and engineering degree for the recording arts, singer, musician, voice actor, sound and audio designer and engineer.",
    contact: "email bigmanjojoentertainment@gmail.com"
  },
  {
    id: "Cole-Davenport",
    type: "person",
    name: "Cole Davenport",
    genres: ["Jazz", "Pop", "Rock", "R&B", "Soul", "Folk", "Prog", "Indie"],
    location: "Scio, NY",
    instruments: ["Guitar", "Bass"],
    bands: ["The-Wheating-Crew", "Sponduli"],
    description: "Bassist for hire! Cole has been helping local artists bring their visions to life for the past ~5 years. He is currently studying English Education at Houghton University.",
    contact: "email cdavenport2020@outlook.com"
  },
  {
    id: "Chiara-Iantorno",
    type: "person",
    name: "Chiara Iantorno",
    genres: ["Alternative", "Indie", "Rock", "Pop", "Prog", "Prog-Rock", "Classical", "Jazz"],
    location: "Bolivar, NY",
    instruments: ["Vocals", "Guitar", "Piano", "Bass", "Drums", "Ukelele"],
    description: "Chiara has been making music for as long as she can remember. She is currently attending Houghton University pursuing a music-education degree. She loves to sing all types of music, especially rock, but is also trained in classical music. Her first project will be released in early 2027.",
    contact: "DM her on Instagram @chiaras_music_stuff"
  },
  {
    id: "Alden-Moeller",
    type: "person",
    name: "Alden Moeller",
    genres: ["Americana", "Folk", "Indie", "Rock", "Oldies", "Country", "Soul", "Roots"],
    location: "Houghton, NY",
    instruments: ["Guitar", "Vocals", "Mandolin", "Bass", "Drums"],
    description: "Alden is singer-songwriter from Rochester, NY. He has released five albums with two more on the way. He likes biking and taco bell.",
    contact: "DM him on Instagram @alden_moeller_official or find his music by searching 'Alden Moeller' on streaming."
  },
  {
    id: "Devon-Reagan",
    type: "person",
    name: "Devin Reagan",
    genres: ["Americana", "Folk", "Oldies"],
    location: "Wellsville, NY",
    instruments: ["Guitar", "Vocals"],
    description: "Devon Reagan is a singer-songwriter based in Wellsville, NY. He grew up listening to, and later playing upright bass and guitar alongside his father, an accomplished banjo player and founding member of the Southern Tier Bluegrass Association. Devon began writing songs in earnest in 2023, and released his first EP, 'Seeds and Stones' in 2025. His music often incorporates understated acoustic elements with lyrics that favor metaphor and recurring symbols, addressing themes such as nature, maturational loss, changing relationships, and redemptive contemplation.",
    contact: "search 'Devon Michael Reagan' on streaming services"
  },
  {
    id: "Hayden-Kristopher-Heim",
    type: "person",
    name: "Hayden Kristopher Heim",
    genres: ["Folk"],
    location: "Wellsville, NY",
    instruments: ["Guitar", "Vocals"],
    bands: ["Sponduli"],
    description: "Singer-songwriter described as 'Evil Elliot Smith'",
    contact: "email haydenheim27@gmail.com or text 585-610-0072"
  }
];