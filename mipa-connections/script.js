const GROUPS = [
  {
    id: "type",
    name: "Things related to type",
    words: ["Tracking", "Orphan", "Widow", "River"],
  },
  {
    id: "color",
    name: "Things related to color",
    words: ["Process", "Spot", "Hue", "Luminance"],
  },
  {
    id: "grids",
    name: "Things related to grids",
    words: ["Gutter", "Baseline", "Bastard", "Margin"],
  },
  {
    id: "hierarchy",
    name: "Things related to hierarchy",
    words: ["Alignment", "Proximity", "Proportion", "Contrast"],
  },
];

const state = {
  activeWords: [],
  selectedWords: new Set(),
  solvedGroups: [],
  isComplete: false,
  statusTimer: null,
  isSubmitting: false,
};

const dom = {
  grid: document.getElementById("word-grid"),
  solvedGroups: document.getElementById("solved-groups"),
  submitBtn: document.getElementById("submit-btn"),
  shuffleBtn: document.getElementById("shuffle-btn"),
  deselectBtn: document.getElementById("deselect-btn"),
  statusMessage: document.getElementById("status-message"),
  liveRegion: document.getElementById("live-region"),
  completion: document.getElementById("completion"),
  playAgainBtn: document.getElementById("play-again-btn"),
};

function shuffleArray(values) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getUnsolvedGroups() {
  return GROUPS.filter(
    (group) => !state.solvedGroups.some((solved) => solved.id === group.id),
  );
}

function announce(message) {
  dom.liveRegion.textContent = "";
  window.setTimeout(() => {
    dom.liveRegion.textContent = message;
  }, 10);
}

function showStatus(message, tone = "neutral", autoClear = true) {
  if (state.statusTimer) {
    window.clearTimeout(state.statusTimer);
    state.statusTimer = null;
  }

  dom.statusMessage.textContent = message;
  dom.statusMessage.classList.remove("error", "success");

  if (tone === "error") {
    dom.statusMessage.classList.add("error");
  }

  if (tone === "success") {
    dom.statusMessage.classList.add("success");
  }

  if (autoClear) {
    state.statusTimer = window.setTimeout(() => {
      dom.statusMessage.textContent = "";
      dom.statusMessage.classList.remove("error", "success");
    }, 1800);
  }
}

function updateButtons() {
  const hasFourSelected = state.selectedWords.size === 4;
  dom.submitBtn.disabled = !hasFourSelected || state.isSubmitting || state.isComplete;
  dom.shuffleBtn.disabled = state.isComplete || state.activeWords.length <= 1;
  dom.deselectBtn.disabled = state.selectedWords.size === 0;
}

function renderSolvedGroups() {
  dom.solvedGroups.innerHTML = "";

  state.solvedGroups.forEach((group, index) => {
    const panel = document.createElement("article");
    panel.className = "solved-group";
    panel.dataset.color = String((index % 4) + 1);

    const heading = document.createElement("h2");
    heading.textContent = group.name;

    const words = document.createElement("p");
    words.textContent = group.words.join(" • ");

    panel.append(heading, words);
    dom.solvedGroups.append(panel);
  });
}

function createTile(word) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "tile";
  tile.textContent = word;
  tile.setAttribute("aria-pressed", state.selectedWords.has(word) ? "true" : "false");

  if (state.selectedWords.has(word)) {
    tile.classList.add("selected");
  }

  tile.addEventListener("click", () => {
    if (state.selectedWords.has(word)) {
      state.selectedWords.delete(word);
    } else if (state.selectedWords.size < 4) {
      state.selectedWords.add(word);
    } else {
      showStatus("You can only select four terms.", "error");
      announce("You can only select four terms.");
    }

    renderGrid();
    updateButtons();
  });

  return tile;
}

function renderGrid() {
  dom.grid.innerHTML = "";

  state.activeWords.forEach((word) => {
    dom.grid.append(createTile(word));
  });
}

function isExactGroup(words) {
  const unsolved = getUnsolvedGroups();
  return (
    unsolved.find((group) => group.words.every((word) => words.includes(word))) || null
  );
}

function isOneAway(words) {
  const unsolved = getUnsolvedGroups();
  return unsolved.some((group) => {
    const matches = words.filter((word) => group.words.includes(word)).length;
    return matches === 3;
  });
}

function markSolved(group) {
  state.solvedGroups.push(group);
  state.activeWords = state.activeWords.filter((word) => !group.words.includes(word));
  state.selectedWords.clear();

  renderSolvedGroups();
  renderGrid();

  const solvedCount = state.solvedGroups.length;
  const totalCount = GROUPS.length;
  showStatus(`Solved: ${group.name}`, "success");
  announce(`Group solved. ${group.name}. ${solvedCount} of ${totalCount} complete.`);

  if (solvedCount === totalCount) {
    state.isComplete = true;
    dom.completion.hidden = false;
    showStatus("All groups solved", "success", false);
    announce("All groups solved. Game complete.");
  }

  updateButtons();
}

function submitSelection() {
  if (state.isSubmitting || state.selectedWords.size !== 4 || state.isComplete) {
    return;
  }

  state.isSubmitting = true;
  updateButtons();

  const pickedWords = [...state.selectedWords];
  const matchedGroup = isExactGroup(pickedWords);

  if (matchedGroup) {
    markSolved(matchedGroup);
  } else if (isOneAway(pickedWords)) {
    showStatus("One away.", "error");
    announce("One away.");
  } else {
    showStatus("Not a group.", "error");
    announce("Not a group.");
  }

  state.isSubmitting = false;
  updateButtons();
}

function shuffleActiveTiles() {
  if (state.isComplete) {
    return;
  }

  state.activeWords = shuffleArray(state.activeWords);
  renderGrid();
  updateButtons();
  announce("Remaining terms shuffled.");
}

function deselectAll() {
  state.selectedWords.clear();
  renderGrid();
  updateButtons();
  announce("Selection cleared.");
}

function startNewGame() {
  state.activeWords = shuffleArray(GROUPS.flatMap((group) => group.words));
  state.selectedWords.clear();
  state.solvedGroups = [];
  state.isComplete = false;
  state.isSubmitting = false;

  if (state.statusTimer) {
    window.clearTimeout(state.statusTimer);
    state.statusTimer = null;
  }

  dom.statusMessage.textContent = "";
  dom.statusMessage.classList.remove("error", "success");
  dom.completion.hidden = true;

  renderSolvedGroups();
  renderGrid();
  updateButtons();
  announce("New game started.");
}

function bindEvents() {
  dom.submitBtn.addEventListener("click", submitSelection);
  dom.shuffleBtn.addEventListener("click", shuffleActiveTiles);
  dom.deselectBtn.addEventListener("click", deselectAll);
  dom.playAgainBtn.addEventListener("click", startNewGame);
}

bindEvents();
startNewGame();
