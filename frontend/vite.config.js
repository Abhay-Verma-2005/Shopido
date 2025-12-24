import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})

/*
📁 FILE PURPOSE: vite.config.js
================================
This file CONFIGURES VITE (build tool and dev server).

WHAT IT DOES:
- Configures React plugin
- Sets development server port to 5173
- Handles bundling and hot module replacement

HOW IT WORKS:
- Vite uses this config to set up the dev environment
- @vitejs/plugin-react enables React features
- server.port: 5173 means app runs on http://localhost:5173

WHY VITE?
- ⚡ Super fast hot reload
- 🚀 Quick build times
- 📦 Modern ES modules
- 🔥 Better than Create React App

ANALOGY:
Vite is like a chef's kitchen setup:
- Prepares ingredients (bundles code)
- Quick cooking (fast builds)
- Taste as you go (hot reload)
*/
