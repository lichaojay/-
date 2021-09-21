
var 梦幻餐厅 = {};
fun.更新("梦幻餐厅","1.0")

梦幻餐厅.运行 = function (mhctt, 识别率) {
    let 时间开始 = new Date().getTime()
    console.log("运行定时" + mhctt + "分钟")
    console.log("延迟5秒,打开>梦幻餐厅到主页")
    sleep(5000)
    launch("com.yunhoon.mhct")//应用活动进程
    waitForPackage("com.yunhoon.mhct")//应用活动进程
    
    var 梦幻arr =[
        "梦幻真提现",
        "梦幻餐厅提现",
        "梦幻餐厅继续",
        "梦幻餐厅赞助",
        "梦幻餐厅领取",
        "梦幻餐厅购买",
    ]
    while (true) {

        梦幻餐厅.关闭_广告();
        fun.找图(梦幻arr, 识别率)
       

        let 时间结束 = new Date().getTime()
        let 时间间隔 = Math.floor((时间结束 - 时间开始) / 1000)

        if (时间间隔 >= mhctt * 60) {

            sleep(1000)
            log("时间已到即将停止")
            fun.closeapp("梦幻餐厅")
            break;

        }

        sleep(1000)


    }


}
//关闭广告
梦幻餐厅.关闭_广告 = function () {
    //fullId = com.yunhoon.mhct:id/tt_video_ad_close_layout视频广告

    var video_ad = id("com.yunhoon.mhct:id/tt_video_ad_close_layout").findOnce()

    if (video_ad) {

        sleep(1500)
        console.log("点击==>video_ad")
        video_ad.click()
        sleep(1000)

    }

    //"com.yunhoon.mhct:id/ksad_end_close_btn"
    var ksad_end = id("com.yunhoon.mhct:id/ksad_end_close_btn").findOnce()

    if (ksad_end) {

        sleep(1500)
        console.log("点击==>ksad_end")
        ksad_end.click()
        sleep(1000)

    }

}

module.exports = 梦幻餐厅;

