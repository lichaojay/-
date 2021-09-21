var 宇宙烧烤店 = {};

fun.更新("宇宙烧烤店","1.0")
宇宙烧烤店.运行 = function (t, 识别率) {
    let 时间开始 = new Date().getTime()

    console.log("运行定时" + t + "分钟")
    console.log("延迟5秒,打开宇宙烧烤店")
    sleep(5000)
    launch("com.qdgame.yzskd")//应用活动进程
    waitForPackage("com.qdgame.yzskd")//应用活动进程
    var 宇宙arr = [
        "宇宙首页关闭",
        "宇宙提现",
        "宇宙观看",
        "宇宙观看关闭",
        "宇宙真提现"
    ]
    while (true) {
        // toast("宇宙烧烤店")
        // launchApp("宇宙烧烤店")

        this.关闭弹窗()
        fun.找图(宇宙arr,识别率)
        let 时间结束 = new Date().getTime()
        let 时间间隔 = Math.floor((时间结束 - 时间开始) / 1000)

        if (时间间隔 >= t * 60) {

            sleep(1000)
            log("时间已到即将停止")
            fun.closeapp("宇宙烧烤店")
            break;

        }

        sleep(1000)

    }
}


宇宙烧烤店.关闭弹窗 = function () {

    //跳过idfullId = com.qdgame.yzskd:id/tt_splash_skip_btn
    var 宇宙_跳过 = id("com.qdgame.yzskd:id/tt_splash_skip_btn").findOnce()
    if (宇宙_跳过) {
        sleep(1500)
        宇宙_跳过.click()
        console.log("宇宙_跳过")
        sleep(1000)
    }


    //广告fullId = com.qdgame.yzskd:id/tt_video_ad_close_layout
    var 宇宙_广告 = id("com.qdgame.yzskd:id/tt_video_ad_close_layout").findOnce()
    if (宇宙_广告) {
        sleep(1500)
        宇宙_广告.click()
        console.log("宇宙_广告")
        sleep(1000)
    }
    //
    var 宇宙_立即获取 = text("立即获取").findOnce()
    if (宇宙_立即获取) {
        sleep(1500)
        宇宙_立即获取.click()
        console.log("宇宙_立即获取")
        sleep(1000)
    }


    //fullId = com.qdgame.yzskd:id/ksad_kwad_web_navi_close
    var 宇宙_获取关闭 = id("com.qdgame.yzskd:id/ksad_kwad_web_navi_close").findOnce()
    if (宇宙_获取关闭) {
        sleep(1500)
        宇宙_获取关闭.click()
        console.log("宇宙_获取关闭")
        sleep(1500)

    }

    if (text("残忍离开").findOnce()) {
        text("残忍离开").findOnce().click()
        sleep(1500)
    }
    //fullId = com.qdgame.yzskd:id/ksad_end_close_btn
    var ksad_end = id("com.qdgame.yzskd:id/ksad_end_close_btn").findOnce()
    if (ksad_end) {
        sleep(1500)
        ksad_end.click()
        console.log("ksad_end")
        sleep(1500)
    }


    //fullId = com.qdgame.yzskd:id/tt_insert_dislike_icon_img


    var 宇宙_icon = id("com.qdgame.yzskd:id/tt_insert_dislike_icon_img").findOnce()
    if (宇宙_icon) {
        sleep(1500)
        宇宙_icon.click()
        console.log("宇宙_icon")
        sleep(1000)
    }



}

module.exports = 宇宙烧烤店;

//var 宇宙烧烤店=require("宇宙烧烤店.js")