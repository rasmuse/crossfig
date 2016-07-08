// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require('fs')
const d3 = require('d3')
const {BrowserWindow} = require('electron').remote

const FIG_FILE = `file://${__dirname}/figure.html`
const WIDTH = 500, HEIGHT = 500;

d3.select('#preview')

var bw = new BrowserWindow({width: WIDTH, height: HEIGHT, show: false, frame: false})



bw.loadURL(FIG_FILE)

function saveImg() {
    bw.capturePage(function (img) {
        var data = img.toDataURL()
        fs.writeFile('/tmp/img.png', img.toPng())
        console.log(data)
        d3.select('#preview')
            .append('img')
            .attr('src', data)
            .style('border', '1px solid #000000')
        bw.close()
    })
}

bw.webContents.on('did-finish-load', () => {
    setTimeout(saveImg, 1)
})
