import { ipcMain } from "electron";
import { StoreService } from "../../infrastructure/services/store.service";
import { from } from "rxjs";

ipcMain.handle("get-store", () => from(StoreService.getStore()));
