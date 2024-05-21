
export function useWinner(buttons) {
    const WIN_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let i = 0; i < WIN_PATTERNS.length; i++) {
        const [a, b, c] = WIN_PATTERNS[i];
        if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
        return {winner: buttons[a]};
        }
    }
    
    return null
}
