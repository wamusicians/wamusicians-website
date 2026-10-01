const musicians = [
  {
    id: "sample-band",
    type: "band",
    name: "Sample Band",
    genres: ["Rock", "Blues"],
    location: "Sampletown",
    size: 3,
    description: "One or two sentences about the band.",
    contact: "band@example.com"
  },
  {
    id: "sample-guitarist",
    type: "person",
    name: "Sample Guitarist",
    genres: ["Rock", "Jazz"],
    location: "Sampletown",
    instruments: ["Guitar", "Vocals"],
    bands: ["sample-band"],
    description: "One or two sentences about this musician.",
    contact: "guitarist@example.com"
  },
  {
    id: "sample-drummer",
    type: "person",
    name: "Sample Drummer",
    genres: ["Blues"],
    location: "Exampleville",
    instruments: ["Drums"],
    bands: ["sample-band"],
    description: "One or two sentences about this musician.",
    contact: "drummer@example.com"
  }
];