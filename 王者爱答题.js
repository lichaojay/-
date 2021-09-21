var 王者爱答题 = {};
fun.更新("王者爱答题", "1.0")
王者爱答题.运行 = function (wzadt, 识别率) {
    let 时间开始 = new Date().getTime()
    console.log("运行定时" + wzadt + "分钟")
    console.log("延迟5秒,打开>王者爱答题")
    sleep(5000)
    launch("com.wzadt.mobi")//应用活动进程
    waitForPackage("com.wzadt.mobi")//应用活动进程

    var 王者爱答题arr = [
        "王者每日提现",
        "王者去完成",
        "王者领取"
    ]

    while (true) {


        王者爱答题.关闭_弹窗()
        //每日提现
        sleep(1000)
        fun.找图(王者爱答题arr, 识别率)


        //每日提现结束

        let 时间结束 = new Date().getTime()
        let 时间间隔 = Math.floor((时间结束 - 时间开始) / 1000)

        if (时间间隔 >= wzadt * 60) {

            sleep(1000)
            log("时间已到即将停止")
            fun.closeapp("王者爱答题")
            break;

        }


    }



}







///--------------------------弹窗--------------------------///
王者爱答题.关闭_弹窗 = function () {
    //fullId = com.wzadt.mobi:id/tt_video_ad_close_layout
    var video_ad = id("com.wzadt.mobi:id/tt_video_ad_close_layout").findOnce();
    if (video_ad) {
        sleep(1500)
        video_ad.click();
        sleep(1500)
    }
    //className("android.view.View").depth("13").drawingOrder("0").indexInParent("2").findOnce();
    var 王者答题广告 = className("android.view.View").depth("13").drawingOrder("0").indexInParent("2").findOnce();
    if (王者答题广告) {
        sleep(1500)
        王者答题广告.click()
        sleep(1500)
    }
}

///--------------------------弹窗结束--------------------------///

module.exports = 王者爱答题;