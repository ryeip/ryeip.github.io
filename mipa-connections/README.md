# Design Connections

A browser-based word-grouping game inspired by the interaction pattern of category-guessing puzzles.

## Files

- index.html: Semantic page structure and game layout
- styles.css: Responsive editorial styling and interaction states
- script.js: Game data, state management, rendering, and controls

## Run in GitHub Codespaces

1. Open a terminal in the workspace root.
2. Start a local server:

```bash
python3 -m http.server 8000
```

3. In Codespaces, open port 8000 in the browser preview.
4. Load the page and play.

## How to play

1. Select four terms that share a connection.
2. Press Submit when exactly four terms are selected.
3. Correct groups move to the solved area.
4. Incorrect guesses do not end the game.
5. Continue until all four groups are solved.

## Game behavior

- The board randomizes all 16 words at the start of each game.
- Shuffle rearranges only unsolved terms.
- Deselect All clears the current selection.
- Optional one-away feedback appears when 3 of 4 terms match a valid group.
- Solved groups stay in the order they were found.
- Play Again resets everything and starts a new shuffled game.

## Customizing groups

Edit the GROUPS array in script.js to change category names and words.