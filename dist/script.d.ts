/**
 * Guess My Number Game
 * A TypeScript version with proper type definitions
 */
interface GameConfig {
    readonly MIN_NUMBER: number;
    readonly MAX_NUMBER: number;
    readonly INITIAL_SCORE: number;
    readonly WINNING_BG_COLOR: string;
    readonly DEFAULT_BG_COLOR: string;
    readonly EXPANDED_NUMBER_WIDTH: string;
    readonly DEFAULT_NUMBER_WIDTH: string;
}
declare const GAME_CONFIG: GameConfig;
interface GameMessages {
    readonly START: string;
    readonly NO_INPUT: string;
    readonly WIN: string;
    readonly TOO_HIGH: string;
    readonly TOO_LOW: string;
    readonly GAME_OVER: string;
    readonly INVALID_INPUT: string;
}
declare const MESSAGES: GameMessages;
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
interface ValidationResult {
    isValid: boolean;
    value: number;
}
/**
 * Main Game class that encapsulates all game logic
 */
declare class GuessMyNumberGame {
    private secretNumber;
    private score;
    private highscore;
    private elements;
    constructor();
    /**
     * Helper method to get DOM elements with error checking
     */
    private getElement;
    /**
     * Initialize the game
     */
    private init;
    /**
     * Generate a new secret number
     */
    private generateSecretNumber;
    /**
     * Load highscore from localStorage
     */
    private loadHighscore;
    /**
     * Save highscore to localStorage
     */
    private saveHighscore;
    /**
     * Display message to user
     */
    private displayMessage;
    /**
     * Update score display
     */
    private updateScoreDisplay;
    /**
     * Update highscore display
     */
    private updateHighscoreDisplay;
    /**
     * Validate user input
     */
    private validateInput;
    /**
     * Handle winning the game
     */
    private handleWin;
    /**
     * Handle wrong guess
     */
    private handleWrongGuess;
    /**
     * Handle user guess
     */
    private handleGuess;
    /**
     * Reset game to initial state
     */
    private resetGame;
    /**
     * Bind event listeners
     */
    private bindEvents;
}
