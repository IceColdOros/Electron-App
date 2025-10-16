import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

type test = string;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Use loadFile (not loadURL)
  win.loadFile(path.join(__dirname, '../../dist-react/index.html'));
}

app.whenReady().then(createWindow);
