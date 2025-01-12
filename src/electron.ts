import { app, BrowserWindow } from "electron";
import path from "node:path";

import {
  closeConnection,
  openConnection,
} from "./electron/config/DataSourceConnection";
import { registerHandlers } from "./electron/controller/handlers.controller";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL("http://localhost:4200/");
  //win.loadFile(path.join(__dirname, "/jpets-desk/browser/index.html"));
}

app.whenReady().then(() => {
  openConnection();
  registerHandlers();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    closeConnection();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
