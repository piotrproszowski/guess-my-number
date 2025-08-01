# Guess My Number! 🎯

A fun and interactive number guessing game built with vanilla HTML, CSS, and JavaScript.

## 🎮 How to Play

1. Think of a number between 1 and 20
2. Enter your guess in the input field
3. Click "Check!" or press Enter to submit
4. Follow the hints (too high/too low) to adjust your next guess
5. Try to guess the number with the highest score possible!
6. Beat your high score in subsequent games

## ✨ Features

- **Interactive Gameplay**: Guess numbers between 1 and 20
- **Score Tracking**: Start with 20 points, lose 1 point per wrong guess
- **Persistent High Score**: Your best score is saved locally
- **Visual Feedback**: Background changes color when you win
- **Input Validation**: Prevents invalid inputs with helpful messages
- **Keyboard Support**: Press Enter to submit guesses
- **Responsive Design**: Works great on desktop and mobile devices
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🚀 Recent Improvements

This application has been refactored for better code quality and user experience:

### TypeScript Migration
- ✅ Full TypeScript conversion with proper type definitions
- ✅ Interface-based architecture for better code organization
- ✅ Type safety for DOM manipulation and game state
- ✅ Enhanced developer experience with IntelliSense support
- ✅ Compile-time error checking
- ✅ Modern build process with npm scripts

### Code Quality
- ✅ Modular architecture with TypeScript class structure
- ✅ Type-safe development with full TypeScript support
- ✅ Interface definitions for better code documentation
- ✅ Cached DOM elements for better performance
- ✅ Configuration constants instead of magic numbers
- ✅ Comprehensive input validation
- ✅ Error handling and user feedback
- ✅ Clean, maintainable code structure

### User Experience
- ✅ Keyboard support (Enter key to submit)
- ✅ Input placeholder and validation messages
- ✅ Persistent high score using localStorage
- ✅ Focus management for better navigation
- ✅ Smooth animations and transitions
- ✅ Responsive design for all devices

### Accessibility
- ✅ Proper semantic HTML structure
- ✅ ARIA labels and live regions
- ✅ Screen reader support
- ✅ High contrast mode support
- ✅ Reduced motion support for users with vestibular disorders

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and responsive design
- **TypeScript**: Type-safe, object-oriented programming with modern ES features
- **JavaScript (compiled)**: Generated from TypeScript for browser compatibility
- **LocalStorage**: Client-side data persistence

## 📱 Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## 🎯 Getting Started

### For Users
1. Clone this repository
2. Open `index.html` in your web browser
3. Start guessing numbers and have fun!

Or serve it with a simple HTTP server:
```bash
npm start
# Then visit http://localhost:8000
```

### For Developers
1. Clone this repository
2. Install dependencies: `npm install`
3. Make changes to TypeScript files in the `src/` directory
4. Build the project: `npm run build`
5. Or use watch mode for development: `npm run watch`

The TypeScript source code is in `src/script.ts` and gets compiled to `dist/script.js`.

## 🏆 Game Statistics

Your high score is automatically saved and will persist between browser sessions thanks to localStorage integration.

---

**Have fun guessing! 🎉**