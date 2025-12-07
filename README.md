# 📌 StackDeck - iOS-Style Sticky Notes

A beautiful, lightweight desktop sticky notes application with iOS-inspired design, built with Tauri, React, and Framer Motion.

## ✨ Features

### Core Features
- ✅ **Create & Delete Notes** - Quick note creation with one-click deletion
- ✅ **Auto-Save** - Automatic data persistence to local storage
- ✅ **iOS-Style UI** - Beautiful glassmorphism design with smooth animations
- ✅ **Color-Coded Notes** - Random pastel colors for visual organization
- ✅ **Responsive Grid** - Adaptive layout that works on any screen size
- ✅ **Fast & Lightweight** - Built with Rust backend for optimal performance

### Design Highlights
- 🎨 **Glassmorphism Effects** - Modern, translucent design elements
- 🌈 **6 Beautiful Colors** - Yellow, Pink, Mint, Blue, Purple, Peach
- ✨ **Smooth Animations** - Powered by Framer Motion
- 📱 **iOS-Inspired** - Clean, minimal interface following Apple's design language

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Rust (latest stable)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run in development mode
npm run tauri dev

# Build for production
npm run tauri build
```

## 🎯 Usage

1. **Create a Note**: Click the "+ New Note" button in the header
2. **Edit Notes**: Click on title or content area to start typing
3. **Delete Notes**: Hover over a note and click the × button
4. **Auto-Save**: All changes are saved automatically

## 📁 Data Storage

Notes are stored locally in your system's app data directory:
- **Windows**: `%APPDATA%/com.arkstu.stackdeck/notes.json`
- **macOS**: `~/Library/Application Support/com.arkstu.stackdeck/notes.json`
- **Linux**: `~/.config/com.arkstu.stackdeck/notes.json`

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 7, Framer Motion
- **Backend**: Tauri 2.9, Rust
- **Styling**: Pure CSS with iOS-inspired design
- **Data Persistence**: File-based JSON storage

## 📦 Project Structure

```
stackdeck/
├── src/                    # React frontend
│   ├── App.jsx            # Main app component
│   ├── App.css            # iOS-style styling
│   └── main.jsx           # React entry point
├── src-tauri/             # Rust backend
│   ├── src/
│   │   ├── lib.rs         # Tauri commands & app logic
│   │   └── main.rs        # Entry point
│   ├── Cargo.toml         # Rust dependencies
│   └── tauri.conf.json    # Tauri configuration
└── package.json           # Node dependencies
```

## 🎨 Customization

### Change Color Palette
Edit the `colors` array in `src/App.jsx`:

```javascript
const colors = [
  "#FFD60A", // Yellow
  "#FFB4A2", // Pink
  // Add your custom colors...
];
```

### Modify Window Settings
Edit `src-tauri/tauri.conf.json`:

```json
{
  "app": {
    "windows": [{
      "width": 400,
      "height": 600,
      "alwaysOnTop": false
    }]
  }
}
```

## 🚧 Future Enhancements

- [ ] System tray integration
- [ ] Global keyboard shortcuts
- [ ] Note pinning
- [ ] Search & filter
- [ ] Export notes (PDF, Markdown)
- [ ] Cloud sync
- [ ] Categories/tags
- [ ] Rich text formatting
- [ ] Note templates

## 🐛 Known Issues

None currently! Report issues on GitHub.

## 📝 License

Apache-2.0 License - See LICENSE file for details

## 👨‍💻 Author

ARKSTU - [GitHub](https://github.com/ARKSTU/stackdeck)

## 🙏 Acknowledgments

- Tauri team for the amazing framework
- Framer Motion for smooth animations
- React team for the robust UI library

---

**Built with ❤️ in under 1 hour!**
