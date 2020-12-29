const electron = require("electron");
const isDev = require("electron-is-dev");
require('v8-compile-cache');



const { app  } = electron;

app.disableDomainBlockingFor3DAPIs()

app.on("ready", () => {



  const mainWindow = require('./mainWindow');
  mainWindow.maximize();
  // mainWindow.setMenu(null);
   mainWindow.show();

    const DevTools = require('./devTools')
  const devTools = new DevTools(isDev);

  

 


 
  
});