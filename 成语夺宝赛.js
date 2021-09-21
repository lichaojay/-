var 成语夺宝赛 = {};
fun.更新("成语夺宝赛", "1.0")
成语夺宝赛.运行 = function (cydbs, 识别率) {
    let 时间开始 = new Date().getTime()
    console.log("运行定时" + cydbs + "分钟")
    console.log("延迟3秒,打开>成语夺宝赛")
    sleep(3000)
    launch("com.devccc.apmatch.e5")//应用活动进程
    waitForPackage("com.devccc.apmatch.e5")//应用活动进程

    var 成语夺宝赛arr = [
        "成语夺宝转盘",
        "成语夺宝抽奖",
        "成语夺宝收下"
    ]

    while (true) {


        成语夺宝赛.关闭_弹窗()
        
       
        fun.找图(成语夺宝赛arr, 识别率)


        

        let 时间结束 = new Date().getTime()
        let 时间间隔 = Math.floor((时间结束 - 时间开始) / 1000)

        if (时间间隔 >= cydbs * 60) {

            sleep(1000)
            log("时间已到即将停止")
            fun.closeapp("成语夺宝赛")
            break;

        }
    }

}
///--------------------------弹窗--------------------------///
成语夺宝赛.关闭_弹窗 = function () {
    //com.devccc.apmatch.e5:id/tt_video_ad_close_layout
var video_ad=id("com.devccc.apmatch.e5:id/tt_video_ad_close_layout").findOnce();
    if(video_ad){
        sleep(1500)
        video_ad.click();
        sleep(2000)
    }
//com.devccc.apmatch.e5:id/tt_insert_dislike_icon_img
var icon=id("com.devccc.apmatch.e5:id/tt_insert_dislike_icon_img").findOnce();
    if(icon){
        sleep(1500)
        icon.click();
        sleep(2000)
    }




}

///--------------------------弹窗结束--------------------------///

module.exports = 成语夺宝赛;