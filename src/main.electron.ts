// src/main.ts
import { app, BrowserWindow } from 'electron';
import { AppDataSource } from './app/electron/config/dataSource.config';
import path from 'node:path';

function createWindow() {
  try {
    AppDataSource;
  } catch (error) {
    console.log('Error con: ', error);
  }

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // win.loadURL('http://localhost:4200/');
  win.loadFile(path.join(__dirname, '/jpets-desk/browser/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
