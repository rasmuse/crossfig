// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const {remote} = require('electron');
//const {BrowserWindow, dialog, shell} = remote;
//const fs = require('fs');

const fs = require('fs');

const w = remote.getCurrentWindow();
console.log(w)

function getImg() {
    var r
    w.capturePage(function (img) {
        r = img
        console.log('inside')
        console.log(img)
        pngBuffer = img.toPng()
        fs.writeFile("/tmp/test.png", pngBuffer)
    })
    return r
}

function printMe() {
  w.webContents.printToPDF({pageSize: {height: 200000, width: 200000}}, (error, data) => {
    if (error) throw error;
    fs.writeFile('/tmp/print.pdf', data, (error) => {
      if (error)
        throw error;
      console.log('Write PDF successfully.');
    });
  }); 
}

exports.pm = printMe
exports.gi = getImg
exports.w = w
