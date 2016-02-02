/**
 * 用户认证 AuthLogout
 * 主要工作:
 * 1. 认证用户的Token是否匹配
 * 2. 终止session
 *
 *
 * action规范:
 * 1. 文件名,就是IO绑定的消息名称
 * 2. 每个文件只输出一个函数,可以名称为 doAction
 * 3. 函数唯一参数为:IO收到的消息内容
 * 4. 函数返回值为IO发出去的消息
 * 5. 所有抛出的错误,都被包装成未知错误返回给客户端
 *
 *
 */

'use strict';

function doAction(msg){
    console.log('GetUserInfo: ' + msg);
    var rtn = `
	{
	    "Status": "OK",
	    "Code"        : "123456",        // 人员编号
	    "Name"        : "xxxxxx",        // 姓名
	    "DeptName"    : "xxxxx",         // 部门名称
	    "JobName"     : "xxxxx",         // 岗位名称
	    "JoinDate"    : "xxxx年xx月xx日", // 参加工作日期
	    "SignDate"    : "xxxx年xx月xx日", // 最后签到日期
	    "HomeAddress" : "x市x区x路x号",   // 家庭住址
	    "LoginName"   : "xxxxxx"         // 登录账户名
	}
		`;
    return rtn;
}

module.exports = doAction;