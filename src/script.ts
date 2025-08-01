'use strict';

/**
 * Guess My Number Game
 * A TypeScript version with proper type definitions
 */

// Game configuration constants
interface GameConfig {
  readonly MIN_NUMBER: number;
  readonly MAX_NUMBER: number;
  readonly INITIAL_SCORE: number;
  readonly WINNING_BG_COLOR: string;
  readonly DEFAULT_BG_COLOR: string;
  readonly EXPANDED_NUMBER_WIDTH: string;
  readonly DEFAULT_NUMBER_WIDTH: string;
}

const GAME_CONFIG: GameConfig = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 20,
  INITIAL_SCORE: 20,
  WINNING_BG_COLOR: '#60b347',
  DEFAULT_BG_COLOR: '#222',
  EXPANDED_NUMBER_WIDTH: '30rem',
  DEFAULT_NUMBER_WIDTH: '15rem'
};

// Game messages
interface GameMessages {
  readonly START: string;
  readonly NO_INPUT: string;
  readonly WIN: string;
  readonly TOO_HIGH: string;
  readonly TOO_LOW: string;
  readonly GAME_OVER: string;
  readonly INVALID_INPUT: string;
}

const MESSAGES: GameMessages = {
  START: 'Start guessing...',
  NO_INPUT: '⛔ No number!',
  WIN: '🎉 superb you got it ! 🎉',
  TOO_HIGH: '📈 too high !!',
  TOO_LOW: '📉 too low !!',
  GAME_OVER: '💥 You lost the game!',
  INVALID_INPUT: '⚠️ Please enter a number between 1 and 20!'
};

// DOM elements interface
interface GameElements {
  message: HTMLElement;
  number: HTMLElement;
  score: HTMLElement;
  highscore: HTMLElement;
  guess: HTMLInputElement;
  checkBtn: HTMLElement;
  againBtn: HTMLElement;
  body: HTMLElement;
}

// Input validation result interface
interface ValidationResult {
  isValid: boolean;
  value: number;
}

/**
 * Main Game class that encapsulates all game logic
 */
class GuessMyNumberGame {
  private secretNumber: number = 0;
  private score: number = GAME_CONFIG.INITIAL_SCORE;
  private highscore: number;
  private elements: GameElements;
  
  constructor() {
    this.highscore = this.loadHighscore();
    
    // Cache DOM elements with type safety
    this.elements = {
      message: this.getElement('.message'),
      number: this.getElement('.number'),
      score: this.getElement('.score'),
      highscore: this.getElement('.highscore'),
      guess: this.getElement('.guess') as HTMLInputElement,
      checkBtn: this.getElement('.check'),
      againBtn: this.getElement('.again'),
      body: document.querySelector('body') as HTMLElement
    };
    
    this.init();
  }

  /**
   * Helper method to get DOM elements with error checking
   */
  private getElement(selector: string): HTMLElement {
    const element = document.querySelector(selector) as HTMLElement;
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    return element;
  }

  /**
   * Initialize the game
   */
  private init(): void {
    this.generateSecretNumber();
    this.updateHighscoreDisplay();
    this.bindEvents();
    this.displayMessage(MESSAGES.START);
  }

  /**
   * Generate a new secret number
   */
  private generateSecretNumber(): void {
    this.secretNumber = Math.trunc(
      Math.random() * GAME_CONFIG.MAX_NUMBER
    ) + GAME_CONFIG.MIN_NUMBER;
  }

  /**
   * Load highscore from localStorage
   */
  private loadHighscore(): number {
    const saved = localStorage.getItem('guessMyNumber_highscore');
    return saved ? parseInt(saved, 10) : 0;
  }

  /**
   * Save highscore to localStorage
   */
  private saveHighscore(): void {
    localStorage.setItem('guessMyNumber_highscore', this.highscore.toString());
  }

  /**
   * Display message to user
   */
  private displayMessage(message: string): void {
    this.elements.message.textContent = message;
  }

  /**
   * Update score display
   */
  private updateScoreDisplay(): void {
    this.elements.score.textContent = this.score.toString();
  }

  /**
   * Update highscore display
   */
  private updateHighscoreDisplay(): void {
    this.elements.highscore.textContent = this.highscore.toString();
  }

  /**
   * Validate user input
   */
  private validateInput(input: string): ValidationResult {
    const num = Number(input);
    return {
      isValid: !isNaN(num) && num >= GAME_CONFIG.MIN_NUMBER && num <= GAME_CONFIG.MAX_NUMBER,
      value: num
    };
  }

  /**
   * Handle winning the game
   */
  private handleWin(): void {
    this.displayMessage(MESSAGES.WIN);
    this.elements.number.textContent = this.secretNumber.toString();
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
  private handleWrongGuess(guess: number): void {
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
  private handleGuess(): void {
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
  private resetGame(): void {
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
  private bindEvents(): void {
    // Check button click
    this.elements.checkBtn.addEventListener('click', (): void => {
      this.handleGuess();
    });

    // Again button click
    this.elements.againBtn.addEventListener('click', (): void => {
      this.resetGame();
    });

    // Enter key support for better UX
    this.elements.guess.addEventListener('keypress', (e: KeyboardEvent): void => {
      if (e.key === 'Enter') {
        this.handleGuess();
      }
    });

    // Input validation on typing
    this.elements.guess.addEventListener('input', (e: Event): void => {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      if (value && isNaN(Number(value))) {
        target.setCustomValidity('Please enter a valid number');
      } else {
        target.setCustomValidity('');
      }
    });
  }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', (): void => {
  new GuessMyNumberGame();
});