import path from "path";
import url from "url";
import { app, BrowserWindow } from "electron";

let win = null;

app.on("ready", () => {
  win = new BrowserWindow();

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "./index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win.show();

  win.on("closed", () => {
    win = null;
  });
});
