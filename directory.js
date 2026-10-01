const typeFilter = document.getElementById("type-filter");
const genreFilter = document.getElementById("genre-filter");
const sizeFilter = document.getElementById("size-filter");
const locationFilter = document.getElementById("location-filter");
const clearButton = document.getElementById("clear-button");
const resultsDiv = document.getElementById("results");
const resultCount = document.getElementById("result-count");

function uniqueSorted(values) {
  return Array.from(new Set(values)).sort();
}

function fillDropdown(select, values) {
  values.forEach(function (value) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

// Genre and location dropdowns are built from your list automatically
fillDropdown(genreFilter, uniqueSorted(musicians.flatMap(function (m) { return m.genres; })));
fillDropdown(locationFilter, uniqueSorted(musicians.map(function (m) { return m.location; })));

function findById(id) {
  return musicians.find(function (m) { return m.id === id; });
}

function matches(m) {
  if (typeFilter.value && m.type !== typeFilter.value) return false;
  if (genreFilter.value && !m.genres.includes(genreFilter.value)) return false;
  if (locationFilter.value && m.location !== locationFilter.value) return false;

  if (sizeFilter.value) {
    if (m.type !== "band") return false;
    if (sizeFilter.value === "5plus") {
      if (m.size < 5) return false;
    } else if (m.size !== Number(sizeFilter.value)) {
      return false;
    }
  }
  return true;
}

function cardHTML(m) {
  let html = '<div class="musician" id="' + m.id + '">';
  html += '<span class="tag">' + (m.type === "band" ? "Band" : "Individual") + "</span>";
  html += "<h2>" + m.name + "</h2>";
  html += "<p><strong>Genre:</strong> " + m.genres.join(", ") + "</p>";
  html += "<p><strong>Location:</strong> " + m.location + "</p>";

  if (m.type === "band") {
    html += "<p><strong>Size:</strong> " + m.size + " members</p>";
    const members = musicians.filter(function (p) {
      return p.type === "person" && p.bands && p.bands.includes(m.id);
    });
    if (members.length > 0) {
      const links = members.map(function (p) { return '<a href="#' + p.id + '">' + p.name + "</a>"; });
      html += "<p><strong>Members in directory:</strong> " + links.join(", ") + "</p>";
    }
  } else {
    if (m.instruments) {
      html += "<p><strong>Plays:</strong> " + m.instruments.join(", ") + "</p>";
    }
    const bandList = (m.bands || []).map(findById).filter(Boolean);
    if (bandList.length > 0) {
      const links = bandList.map(function (b) { return '<a href="#' + b.id + '">' + b.name + "</a>"; });
      html += "<p><strong>Bands:</strong> " + links.join(", ") + "</p>";
    }
  }

  if (m.description) html += "<p>" + m.description + "</p>";
  if (m.contact) html += "<p><strong>Contact:</strong> " + m.contact + "</p>";
  html += "</div>";
  return html;
}

function render() {
  const results = musicians
    .filter(matches)
    .sort(function (a, b) { return a.name.localeCompare(b.name); });

  resultsDiv.innerHTML = results.map(cardHTML).join("");

  if (results.length === 0) {
    resultCount.textContent = "No matches. Try changing or clearing your filters.";
  } else if (results.length === 1) {
    resultCount.textContent = "1 result";
  } else {
    resultCount.textContent = results.length + " results";
  }
}

[typeFilter, genreFilter, sizeFilter, locationFilter].forEach(function (select) {
  select.addEventListener("change", render);
});

clearButton.addEventListener("click", function () {
  typeFilter.value = "";
  genreFilter.value = "";
  sizeFilter.value = "";
  locationFilter.value = "";
  render();
});

render();