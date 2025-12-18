import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Color palette - iOS style
  const colors = [
    "#FFD60A", // Yellow
    "#FFB4A2", // Pink
    "#B4E7CE", // Mint
    "#A8D8FF", // Blue
    "#E0AAFF", // Purple
    "#FFE5B4", // Peach
  ];

  // Load notes on mount
  useEffect(() => {
    loadNotes();
  }, []);

  // Save notes whenever they change
  useEffect(() => {
    if (!isLoading) {
      saveNotes();
    }
  }, [notes, isLoading]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl/Cmd + N: New note
      if ((e.ctrlKey || e.metaKey) && e.key === "n") {
        e.preventDefault();
        addNote();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [notes]);

  const loadNotes = async () => {
    try {
      const savedNotes = await invoke("load_notes");
      const parsedNotes = JSON.parse(savedNotes);
      setNotes(parsedNotes);
    } catch (error) {
      console.error("Failed to load notes:", error);
      setNotes([]);
    } finally {
      setIsLoading(false);
    }
  };

  const saveNotes = async () => {
    try {
      await invoke("save_notes", { notes: JSON.stringify(notes) });
    } catch (error) {
      console.error("Failed to save notes:", error);
    }
  };

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      content: "",
      color: colors[Math.floor(Math.random() * colors.length)],
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
  };

  const updateNote = (id, field, value) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, [field]: value } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="app-title">📌 StackDeck</h1>
        <motion.button
          className="add-button"
          onClick={addNote}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Create new note (Ctrl+N)"
        >
          + New Note
        </motion.button>
      </header>

      <div className="notes-container">
        <AnimatePresence>
          {notes.length === 0 ? (
            <motion.div
              className="empty-state"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="empty-icon">📝</div>
              <p>No notes yet</p>
              <p className="empty-subtitle">
                Click "New Note" or press Ctrl+N to get started
              </p>
            </motion.div>
          ) : (
            <div className="notes-grid">
              {notes.map((note, index) => (
                <motion.div
                  key={note.id}
                  className="note-card"
                  style={{ backgroundColor: note.color }}
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                  layout
                >
                  <button
                    className="delete-button"
                    onClick={() => deleteNote(note.id)}
                    title="Delete note"
                  >
                    ×
                  </button>

                  <input
                    type="text"
                    className="note-title"
                    placeholder="Title"
                    value={note.title}
                    onChange={(e) =>
                      updateNote(note.id, "title", e.target.value)
                    }
                  />

                  <textarea
                    className="note-content"
                    placeholder="Start typing..."
                    value={note.content}
                    onChange={(e) =>
                      updateNote(note.id, "content", e.target.value)
                    }
                    rows={6}
                  />

                  <div className="note-footer">
                    {new Date(note.createdAt).toLocaleDateString()}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      <footer className="app-footer">
        <kbd>Ctrl+N</kbd> New Note
      </footer>
    </div>
  );
}

export default App;
