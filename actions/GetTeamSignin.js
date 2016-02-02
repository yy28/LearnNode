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
    console.log('GetTeamSignin: ' + msg);
    var rtn = `
	{
	    "Status": "OK",
	    "Signs": [ // 数组类型的签到记录列表
	        {
	            "EmployeeCode" : "xxxx",                // 员工编号
	            "EmployeeName" : "xxxx",                // 员工姓名
	            "SignTime"     : "xxxx年x月x日x时x分x秒", // 签到时间
	            "Longitude"    : "xxxx",                // 经度
	            "Latitude"     : "xxxx",                // 纬度
	            "Address"      :                        // 地址，百度地图查询到的近似位置地址
	            	{
	            		"Country"  : "xx", // 国家
	            		"Province" : "xx", // 省份
	            		"City"     : "xx", // 城市
	            		"District" : "xx", // 区
	            		"Street"   : "xx", // 街道
	            		"Door"     : "xx", // 门牌号码
	            		"Building" : "xx"  // 建筑物名称
	            	},
	            "Memo"      : "xxxxxxx"                 // 备注
	        },
	        {
	            "EmployeeCode" : "xxxx",                // 员工编号
	            "EmployeeName" : "xxxx",                // 员工姓名
	            "SignTime"     : "xxxx年x月x日x时x分x秒", // 签到时间
	            "Longitude"    : "xxxx",                // 经度
	            "Latitude"     : "xxxx",                // 纬度
	            "Address"      :                        // 地址，百度地图查询到的近似位置地址
	            	{
	            		"Country"  : "xx", // 国家
	            		"Province" : "xx", // 省份
	            		"City"     : "xx", // 城市
	            		"District" : "xx", // 区
	            		"Street"   : "xx", // 街道
	            		"Door"     : "xx", // 门牌号码
	            		"Building" : "xx"  // 建筑物名称
	            	},
	            "Memo"      : "xxxxxxx"                // 备注
	        }
	    ]
	}
		`;
    return rtn;
}

module.exports = doAction;