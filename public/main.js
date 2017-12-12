const electron = require('electron');
const { app, BrowserWindow, Menu, ipcMain } = electron;
const isDev = require('electron-is-dev');
const path = require('path');
const db = require('../src/db');


let mainWindow;

const installExtensions = async () => {
  const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

  await installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  await installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
};

function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 900,
    height: 680,
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' :
    `file://${path.join(__dirname, '../build/index.html')}`);

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', async () => {
  if (isDev) {
    await installExtensions();
  }

  createWindow();

  if (isDev) {
    mainWindow.webContents.openDevTools();
    mainWindow.webContents.on('context-menu', (e, props) => {
      Menu.buildFromTemplate([{
        label: 'Inspect element',
        click() {
          mainWindow.inspectElement(props.x, props.y);
        }
      }]).popup(mainWindow);
    });
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('test:send', () => {
  db.query('SELECT * FROM clients WHERE id = 2')
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack));
});