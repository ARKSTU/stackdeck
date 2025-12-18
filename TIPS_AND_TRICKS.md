# ⌨️ StackDeck - Keyboard Shortcuts & Tips

## Keyboard Shortcuts

### Global Shortcuts
| Shortcut | Action | Platform |
|----------|--------|----------|
| `Ctrl + N` | Create new note | Windows/Linux |
| `Cmd + N` | Create new note | macOS |

### Navigation
| Shortcut | Action |
|----------|--------|
| `Tab` | Navigate between inputs |
| `Shift + Tab` | Navigate backwards |
| `Enter` | New line in content (textarea) |
| `Esc` | Blur current input |

### Text Editing
| Shortcut | Action |
|----------|--------|
| `Ctrl + A` | Select all |
| `Ctrl + C` | Copy |
| `Ctrl + V` | Paste |
| `Ctrl + X` | Cut |
| `Ctrl + Z` | Undo |
| `Ctrl + Y` | Redo |

## Pro Tips 💡

### 1. Fast Note Creation
```
Press Ctrl+N → Type title → Press Tab → Type content
```
All done in keyboard!

### 2. Organizing Notes
- **Color Coding**: Notes get random colors automatically
- **Date Tracking**: Each note shows creation date
- **Latest First**: New notes appear at the top

### 3. Efficient Workflow
1. **Batch Create**: Press `Ctrl+N` multiple times quickly
2. **Quick Delete**: Hover and click × (no confirmation needed)
3. **Auto-Save**: Just type - saves happen automatically!

### 4. Data Management
- **Location**: Notes stored in app data folder
- **Format**: JSON (human-readable)
- **Backup**: Copy `notes.json` from app data directory
- **Restore**: Replace `notes.json` and restart app

## Hidden Features ✨

### 1. Smooth Animations
- Notes animate in with stagger effect
- Hover effects on all interactive elements
- Smooth delete animations

### 2. Responsive Design
- Works on any window size
- Grid automatically adjusts columns
- Mobile-friendly (if running in browser mode)

### 3. Color System
Notes cycle through 6 beautiful colors:
1. Sunny Yellow 🟡
2. Soft Pink 🔴
3. Fresh Mint 🟢
4. Sky Blue 🔵
5. Lavender Purple 🟣
6. Warm Peach 🟠

## Advanced Usage 🚀

### Backup Your Notes

**Windows:**
```powershell
# Find your notes
explorer %APPDATA%\com.arkstu.stackdeck\

# Backup
copy "%APPDATA%\com.arkstu.stackdeck\notes.json" "backup_notes.json"
```

**macOS:**
```bash
# Find your notes
open ~/Library/Application\ Support/com.arkstu.stackdeck/

# Backup
cp ~/Library/Application\ Support/com.arkstu.stackdeck/notes.json ~/Desktop/backup_notes.json
```

**Linux:**
```bash
# Find your notes
cd ~/.config/com.arkstu.stackdeck/

# Backup
cp notes.json ~/backup_notes.json
```

### Export Notes (Manual)

1. Open notes.json in app data folder
2. Copy the JSON content
3. Use any JSON-to-text converter
4. Or write a simple script:

```javascript
// export-notes.js
const fs = require('fs');
const notes = JSON.parse(fs.readFileSync('notes.json'));

notes.forEach(note => {
  const filename = `${note.title || 'Untitled'}.txt`;
  const content = `${note.title}\n${'='.repeat(50)}\n\n${note.content}\n\nCreated: ${note.createdAt}`;
  fs.writeFileSync(filename, content);
});
```

### Customize Colors

Edit `src/App.jsx`:
```javascript
const colors = [
  "#FFD60A", // Replace with your color
  "#FFB4A2",
  // Add more colors...
];
```

## Performance Tips ⚡

### For Many Notes (100+)
- Use browser DevTools to profile
- Consider adding pagination
- Implement virtual scrolling

### For Low-End Systems
- Reduce animation complexity
- Disable backdrop blur
- Lower shadow effects

### For Large Notes
- Content auto-expands
- Textarea resizes automatically
- Scrollable content areas

## Troubleshooting 🔧

### Notes Not Saving
1. Check app data folder exists
2. Verify write permissions
3. Check console for errors

### App Slow to Start
- First load: Normal (Rust compilation)
- Subsequent loads: Should be fast
- Check system resources

### Notes Disappeared
1. Check app data folder
2. Look for `notes.json`
3. Restore from backup if needed

### Colors Not Showing
- Check CSS loaded correctly
- Verify Vite build succeeded
- Clear browser cache (dev mode)

## Power User Workflows 💪

### Daily Journal
```
Morning: Ctrl+N → "Morning Thoughts" → Brain dump
Evening: Ctrl+N → "Today's Wins" → Gratitude list
```

### Quick Capture
```
Idea strikes → Alt+Tab to StackDeck → Ctrl+N → Type → Done
```

### Meeting Notes
```
Before meeting: Create note with meeting name
During: Type key points
After: Note stays persistent
```

### Task Management
```
Note Title: "Tasks - [Date]"
Content:
- [ ] Task 1
- [ ] Task 2
- [x] Done task
```

## Developer Tips 🛠️

### Modify Window Size
Edit `src-tauri/tauri.conf.json`:
```json
{
  "windows": [{
    "width": 500,    // Change here
    "height": 700,   // And here
    "resizable": true
  }]
}
```

### Add New Shortcuts
Edit `src/App.jsx`:
```javascript
useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === 'YOUR_KEY') {
      // Your action
    }
  };
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

### Add Note Categories
Extend the note object:
```javascript
const newNote = {
  id: Date.now(),
  title: "",
  content: "",
  category: "personal", // Add this
  color: colors[...],
  createdAt: new Date().toISOString(),
};
```

## FAQ ❓

**Q: Can I sync across devices?**  
A: Not yet - local first! But you can manually copy `notes.json`

**Q: Max note limit?**  
A: No hard limit, but performance may vary with 1000+ notes

**Q: Can I format text?**  
A: Not yet - plain text only in v1

**Q: Export to PDF?**  
A: Not built-in, but you can copy/paste into any editor

**Q: Mobile app?**  
A: Desktop only for now - Tauri mobile support coming!

---

**Remember**: This is a rapid MVP! Features can be added as needed.

**Most Important Shortcut**: `Ctrl + N` for new note! 🎯
