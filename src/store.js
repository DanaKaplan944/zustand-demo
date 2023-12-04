import { create } from 'zustand';
import zustyMiddleware from './ZustyMiddleware';

const useStore = create(
  zustyMiddleware((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decrementCount: () =>
      set((state) => ({ count: Math.max(0, state.count - 1) })),
    multiplyCount: () => set((state) => ({ count: state.count * 2 })),
    resetCount: () => set(() => ({ count: 0 })),
    doDelay: (delay) =>
      set((state) => {
        let i = 0;
        while (i < delay) {
          console.log('slow down the program');
          i += 1;
        }
        return state;
      }),
    board: {},
    currentPlayer: 'X',
    gameOver: false,
    message: '',
    boardSize: 3,

    checkForWinner: (state) => {
      const b = { ...state.board };
      const iP = state.currentPlayer;
      let victoryCondition = '';
      for (let i = 0; i < state.boardSize; i++) {
        victoryCondition += `${iP}`;
      }

      // check rows
      for (let i = 0; i < state.boardSize; i++) {
        let result = '';
        for (let j = 0; j < state.boardSize; j++) {
          result += `${b[`${i}${j}`]}`;
        }
        if (result === victoryCondition) {
          state.winner();
          return;
        }
      }

      // check columns
      for (let j = 0; j < state.boardSize; j++) {
        let result = '';
        for (let i = 0; i < state.boardSize; i++) {
          result += `${b[`${i}${j}`]}`;
        }
        if (result === victoryCondition) {
          state.winner();
          return;
        }
      }

      // check diagonals
      let diagonal1 = '';
      for (let i = 0; i < state.boardSize; i++) {
        diagonal1 += `${b[`${i}${i}`]}`;
      }
      if (diagonal1 === victoryCondition) {
        state.winner();
        return;
      }

      let diagonal2 = '';
      for (let i = 0; i < state.boardSize; i++) {
        diagonal2 += `${b[`${i}${state.boardSize - 1 - i}`]}`;
      }
      if (diagonal2 === victoryCondition) {
        state.winner();
        return;
      }

      // check for tie
      if (state.board.dashes === 0) {
        state.draw();
        return;
      }
    },

    // Reset board but leave scores
    resetBoard: () => {
      set((state) => {
        const boardSize = state?.boardSize ?? 3;
        const board = {};
        for (let i = 0; i < boardSize; i++) {
          for (let j = 0; j < boardSize; j++) {
            board[`${i}${j}`] = '-';
          }
        }
        board.dashes = Math.pow(boardSize, 2);
        return {
          ...state,
          board,
          gameOver: false,
          message: '',
          currentPlayer: 'X',
        };
      });
    },

    // Function for switching box icon
    changeBox: (index) => {
      set((state) => {
        // check if game is ended
        if (!state.gameOver) {
          const newBoard = { ...state.board };
          // if clicked icon is a dash, change it
          if (newBoard[index] === '-') {
            newBoard[index] = state.currentPlayer;
            // track remaining dashes for draws
            newBoard.dashes--;
            // Check for a winner after updating the board
            // checkForWinner(state);
          }
          // Return the updated state
          return {
            ...state,
            board: newBoard,
            currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
          };
        }
        // Return the current state if the game is over
        return state;
      });
    },

    switchPlayer: (state) => {
      const change = {
        X: 'O',
        O: 'X',
      };
      return change[state.currentPlayer];
    },

    // Winner result function
    winner: () => {
      set((state) => ({
        gameOver: true,
        message: `Player ${state.currentPlayer} wins!!!`,
      }));
    },

    // Draw result function
    draw: () => {
      set({ gameOver: true, message: "It's a Draw!!!" });
    },
  }))
);

window.store = useStore;

export default useStore;
