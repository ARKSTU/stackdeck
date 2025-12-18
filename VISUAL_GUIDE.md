# 📸 StackDeck - Visual Guide

## App Screenshots & UI Elements

### Main Interface Components

```
┌─────────────────────────────────────────────────────┐
│  📌 StackDeck              [+ New Note]             │  ← Header (Glassmorphism)
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │   [×]   │  │   [×]   │  │   [×]   │            │  ← Delete buttons
│  │ Title   │  │ Title   │  │ Title   │            │
│  │ ─────── │  │ ─────── │  │ ─────── │            │
│  │         │  │         │  │         │            │  ← Notes Grid
│  │ Content │  │ Content │  │ Content │            │
│  │         │  │         │  │         │            │
│  │ 1/15/25 │  │ 1/15/25 │  │ 1/15/25 │            │  ← Date footer
│  └─────────┘  └─────────┘  └─────────┘            │
│                                                     │
├─────────────────────────────────────────────────────┤
│           [Ctrl+N] New Note                         │  ← Keyboard hint
└─────────────────────────────────────────────────────┘
```

## UI Elements Breakdown

### 1. Header Bar
- **Background**: Glassmorphism effect (blur + transparency)
- **Title**: "📌 StackDeck" with shadow
- **Button**: Gradient purple/blue with hover scale
- **Effect**: Backdrop blur with border

### 2. Note Cards
- **Shape**: Rounded corners (16px radius)
- **Colors**: 6 random pastel colors
- **Shadow**: Soft shadow that grows on hover
- **Animation**: Scale up on hover, down on tap

### 3. Note Content
- **Title Input**: Transparent with bottom border
- **Content Textarea**: Expandable, transparent
- **Date Footer**: Small text, top border divider
- **Delete Button**: Top-right corner, hover to show red

### 4. Empty State
- **Icon**: Large 📝 emoji
- **Message**: "No notes yet"
- **Hint**: Keyboard shortcut reminder
- **Animation**: Fade + slide in

## Color Palette Visualization

```
┌────────────┐ ┌────────────┐ ┌────────────┐
│  #FFD60A   │ │  #FFB4A2   │ │  #B4E7CE   │
│   Yellow   │ │    Pink    │ │    Mint    │
└────────────┘ └────────────┘ └────────────┘

┌────────────┐ ┌────────────┐ ┌────────────┐
│  #A8D8FF   │ │  #E0AAFF   │ │  #FFE5B4   │
│    Blue    │ │   Purple   │ │   Peach    │
└────────────┘ └────────────┘ └────────────┘
```

## Interaction States

### Button States
1. **Normal**: Gradient background, white text
2. **Hover**: Scale 1.05, stronger shadow
3. **Active**: Scale 0.95, pressed effect
4. **Focus**: System focus ring

### Note States
1. **Normal**: Static with shadow
2. **Hover**: Translate up 5px, bigger shadow
3. **Editing**: Focus border on inputs
4. **Deleting**: Fade out + scale down

## Animation Timeline

### Creating a Note
```
0ms   → Click button (scale down)
100ms → Button returns (scale up)
150ms → New note appears (fade in)
200ms → Note slides into position
250ms → Note scales to full size
```

### Deleting a Note
```
0ms   → Click × (button rotates)
100ms → Note starts fading
200ms → Note scales down
300ms → Note slides down
350ms → Note removed from DOM
400ms → Grid reflows smoothly
```

## Responsive Breakpoints

### Desktop (> 768px)
- Grid: Auto-fill columns (min 280px)
- Header: Horizontal layout
- Spacing: 20px gaps

### Mobile/Tablet (≤ 768px)
- Grid: Single column
- Header: Vertical stack
- Spacing: 15px gaps

## Typography

```
App Title:    28px, Bold, -0.5px letter-spacing
Button:       16px, SemiBold
Note Title:   18px, SemiBold
Note Content: 14px, Regular, 1.6 line-height
Note Date:    11px, Regular
```

## Spacing System

```
Padding:
- App container:    20px
- Header:           20px
- Note cards:       20px
- Grid gaps:        20px

Border Radius:
- Large (header):   20px
- Medium (notes):   16px
- Small (button):   12px
- Tiny (delete):    50% (circle)
```

## Shadow Levels

```css
Level 1 (Cards):
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

Level 2 (Hover):
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);

Level 3 (Button):
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
```

## Gradient Definitions

### Background
```css
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### Button
```css
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

## Performance Features

- **Hardware Acceleration**: Transform & opacity animations
- **Will-Change**: Applied to animated elements
- **Debounced Saves**: Auto-save on every change
- **Optimized Renders**: React key-based reconciliation
- **CSS Containment**: Isolated layout calculations

## Accessibility Features

- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Proper ARIA labels (via title attributes)
- ✅ High contrast text
- ✅ Scalable fonts
- ✅ Touch-friendly targets (min 44px)

---

**Visual Design**: iOS-inspired with modern web aesthetics  
**Animation Style**: Smooth, subtle, purposeful  
**Color Philosophy**: Soft pastels for easy viewing  
**Layout**: Clean, spacious, organized
