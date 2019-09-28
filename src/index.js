const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('notifyBtn');

notifyBtn.addEventListener('click', function(event){
    alert();
});