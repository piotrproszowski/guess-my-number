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

### Code Quality
- ✅ Modular architecture with ES6 class structure
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
- **JavaScript ES6+**: Modular, object-oriented programming
- **LocalStorage**: Client-side data persistence

## 📱 Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## 🎯 Getting Started

1. Clone this repository
2. Open `index.html` in your web browser
3. Start guessing numbers and have fun!

Or serve it with a simple HTTP server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 🏆 Game Statistics

Your high score is automatically saved and will persist between browser sessions thanks to localStorage integration.

---

**Have fun guessing! 🎉**