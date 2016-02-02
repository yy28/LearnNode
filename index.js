/**
 * Sign in app server 主进程
 */
'use strict';


// 引用常用库
const config = require('config');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');


// 载入配置
const CFG_DBCONFIG = config.get('dbconfig');
const CFG_HTTPCONFIG = config.get('httpconfig');

// 载入所有的action
const actions = new Map();
fs.readdirSync('./actions/').forEach(function(filename){
    let tmp = filename.split('.');
    //console.log(tmp);
    if (tmp.length===2 && tmp[1]==='js') {
        console.log('载入'+tmp[0]);
        actions.set(tmp[0], require('./actions/'+filename));
    }
});

// action封装函数
function actionWarp(actionName, action, socket) {
    let _actionName;
    let _action;
    let _socket;

    function onMsg(msg) {
        // TODO 增加try/catch代码,并且封装一下
        let rtn = _action(msg);
        _socket.emit(_actionName, rtn);
        //console.log('in actionWarp:%s', actionName);
        return rtn;
    }

    _actionName = actionName;
    _action = action;
    _socket = socket;

    return onMsg;
}

// 配置Web服务
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// 配置IO服务
io.of(CFG_HTTPCONFIG.iopath).on('connection', function (socket) {
    console.log('有连接进来');

    // 绑定所有的actions
    for (let actName of actions.keys()) {
        socket.on(actName, actionWarp(actName, actions.get(actName), socket));
    }

});

// 启动服务
try {
    http.listen(CFG_HTTPCONFIG.port, function () {
        console.log('服务器已经启动在 *:%d', CFG_HTTPCONFIG.port);
    });
}catch (error) {
    console.error("无法启动服务器. 因为: %s", error.message);
}
