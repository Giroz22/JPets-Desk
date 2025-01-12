import { ipcMain } from "electron";
import { StoreService } from "../services/store.service";
import { from } from "rxjs";

ipcMain.handle("get-store", () => from(StoreService.getStore()));
