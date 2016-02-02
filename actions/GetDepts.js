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
    console.log('GetDepts: ' + msg);
    var rtn = `
	{
	    "Status": "OK",
	    "Depts": [
	        {
	            "DeptCode" : "xxxx", // 部门编号
	            "DeptName" : "xxxx", // 部门名称
	            "Person"   : "x"     // 部门内人员数量
	        },
	        {
	            "DeptCode" : "xxxx", // 部门编号
	            "DeptName" : "xxxx", // 部门名称
	            "Person"   : "x"     // 部门内人员数量
	        }
	    ]
	}
		`;
    return rtn;
}

module.exports = doAction;