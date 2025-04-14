export class Utils {
  static saveImage(
    urlImgSave: string,
    nameFolder: string,
    newNameImg: string
  ): string {
    const newUrl = `src/electron/database/imgs/${nameFolder}/${newNameImg}.png`;
    const fs = require("fs");

    fs.copyFile(urlImgSave, newUrl, (err: any) => {
      if (err) {
        console.error("Error al copiar la imagen:", err);
        return "";
      }
      console.log("Imagen copiada con éxito en", newUrl);
      return newUrl;
    });

    return "";
  }
}
