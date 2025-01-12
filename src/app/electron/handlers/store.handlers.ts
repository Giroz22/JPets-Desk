import { ipcMain } from "electron";
import { StoreService } from "../services/store.service";

ipcMain.handle("get-store", async () => StoreService.getStore());
