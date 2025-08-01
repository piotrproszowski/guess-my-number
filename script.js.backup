'use strict';

/**
 * Guess My Number Game
 * A refactored version with better code organization and features
 */

// Game configuration constants
const GAME_CONFIG = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 20,
  INITIAL_SCORE: 20,
  WINNING_BG_COLOR: '#60b347',
  DEFAULT_BG_COLOR: '#222',
  EXPANDED_NUMBER_WIDTH: '30rem',
  DEFAULT_NUMBER_WIDTH: '15rem'
};

// Game messages
const MESSAGES = {
  START: 'Start guessing...',
  NO_INPUT: '⛔ No number!',
  WIN: '🎉 superb you got it ! 🎉',
  TOO_HIGH: '📈 too high !!',
  TOO_LOW: '📉 too low !!',
  GAME_OVER: '💥 You lost the game!',
  INVALID_INPUT: '⚠️ Please enter a number between 1 and 20!'
};

/**
 * Main Game class that encapsulates all game logic
 */
class GuessMyNumberGame {
  constructor() {
    this.secretNumber = 0;
    this.score = GAME_CONFIG.INITIAL_SCORE;
    this.highscore = this.loadHighscore();
    
    // Cache DOM elements
    this.elements = {
      message: document.querySelector('.message'),
      number: document.querySelector('.number'),
      score: document.querySelector('.score'),
      highscore: document.querySelector('.highscore'),
      guess: document.querySelector('.guess'),
      checkBtn: document.querySelector('.check'),
      againBtn: document.querySelector('.again'),
      body: document.querySelector('body')
    };
    
    this.init();
  }

  /**
   * Initialize the game
   */
  init() {
    this.generateSecretNumber();
    this.updateHighscoreDisplay();
    this.bindEvents();
    this.displayMessage(MESSAGES.START);
  }

  /**
   * Generate a new secret number
   */
  generateSecretNumber() {
    this.secretNumber = Math.trunc(
      Math.random() * GAME_CONFIG.MAX_NUMBER
    ) + GAME_CONFIG.MIN_NUMBER;
  }

  /**
   * Load highscore from localStorage
   */
  loadHighscore() {
    const saved = localStorage.getItem('guessMyNumber_highscore');
    return saved ? parseInt(saved, 10) : 0;
  }

  /**
   * Save highscore to localStorage
   */
  saveHighscore() {
    localStorage.setItem('guessMyNumber_highscore', this.highscore.toString());
  }

  /**
   * Display message to user
   */
  displayMessage(message) {
    this.elements.message.textContent = message;
  }

  /**
   * Update score display
   */
  updateScoreDisplay() {
    this.elements.score.textContent = this.score;
  }

  /**
   * Update highscore display
   */
  updateHighscoreDisplay() {
    this.elements.highscore.textContent = this.highscore;
  }

  /**
   * Validate user input
   */
  validateInput(input) {
    const num = Number(input);
    return {
      isValid: !isNaN(num) && num >= GAME_CONFIG.MIN_NUMBER && num <= GAME_CONFIG.MAX_NUMBER,
      value: num
    };
  }

  /**
   * Handle winning the game
   */
  handleWin() {
    this.displayMessage(MESSAGES.WIN);
    this.elements.number.textContent = this.secretNumber;
    this.elements.body.style.backgroundColor = GAME_CONFIG.WINNING_BG_COLOR;
    this.elements.number.style.width = GAME_CONFIG.EXPANDED_NUMBER_WIDTH;
    
    if (this.score > this.highscore) {
      this.highscore = this.score;
      this.updateHighscoreDisplay();
      this.saveHighscore();
    }
  }

  /**
   * Handle wrong guess
   */
  handleWrongGuess(guess) {
    if (this.score > 1) {
      const message = guess > this.secretNumber ? MESSAGES.TOO_HIGH : MESSAGES.TOO_LOW;
      this.displayMessage(message);
      this.score--;
      this.updateScoreDisplay();
    } else {
      this.displayMessage(MESSAGES.GAME_OVER);
      this.score = 0;
      this.updateScoreDisplay();
    }
  }

  /**
   * Handle user guess
   */
  handleGuess() {
    const inputValue = this.elements.guess.value.trim();
    
    if (!inputValue) {
      this.displayMessage(MESSAGES.NO_INPUT);
      return;
    }

    const validation = this.validateInput(inputValue);
    
    if (!validation.isValid) {
      this.displayMessage(MESSAGES.INVALID_INPUT);
      return;
    }

    const guess = validation.value;

    if (guess === this.secretNumber) {
      this.handleWin();
    } else {
      this.handleWrongGuess(guess);
    }
  }

  /**
   * Reset game to initial state
   */
  resetGame() {
    this.score = GAME_CONFIG.INITIAL_SCORE;
    this.generateSecretNumber();
    this.displayMessage(MESSAGES.START);
    this.updateScoreDisplay();
    this.elements.number.textContent = '?';
    this.elements.guess.value = '';
    this.elements.body.style.backgroundColor = GAME_CONFIG.DEFAULT_BG_COLOR;
    this.elements.number.style.width = GAME_CONFIG.DEFAULT_NUMBER_WIDTH;
    
    // Focus on input for better UX
    this.elements.guess.focus();
  }

  /**
   * Bind event listeners
   */
  bindEvents() {
    // Check button click
    this.elements.checkBtn.addEventListener('click', () => {
      this.handleGuess();
    });

    // Again button click
    this.elements.againBtn.addEventListener('click', () => {
      this.resetGame();
    });

    // Enter key support for better UX
    this.elements.guess.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleGuess();
      }
    });

    // Input validation on typing
    this.elements.guess.addEventListener('input', (e) => {
      const value = e.target.value;
      if (value && isNaN(Number(value))) {
        e.target.setCustomValidity('Please enter a valid number');
      } else {
        e.target.setCustomValidity('');
      }
    });
  }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new GuessMyNumberGame();
});
