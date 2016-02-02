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
    console.log('GetDeptPerson: ' + msg);
    var rtn = `
	{
	    "Status": "OK",
	    "Person": [
	        {
	            "Name"  : "xxxx",    // 姓名
	            "Phone" : "xxxxxxxx" // 电话号码。字段可能为单个字符串，也可能为数组，表示多个电话号码。
	        },
	        {
	            "Name"  : "xxxx",    // 姓名
	            "Phone" : ["xxxxxxxx", "xxxxxxx"] // 电话号码。字段可能为单个字符串，也可能为数组，表示多个电话号码。
	        }
	    ]
	}
		`;
    return rtn;
}

module.exports = doAction;