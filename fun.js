var fun = {}




//关闭应用

fun.closeapp = function (name) {
    recents()
    sleep(3000)
    var zj = desc(name + ",未加锁").findOnce().bounds()
    swipe(zj.centerX(), zj.centerY(), device.width, zj.centerY(), 300)
    sleep(1000)
    home()
    sleep(1000)
    home()
    sleep(1000)
}
//找图
fun.找图 = function (所找图, 识别率) {



    for (var n = 0; n < 所找图.length; n++) {
        let 大图 = captureScreen()
        let 小图1 = images.read("./pic/" + 所找图[n] + ".png");
        let 缩放x = device.width / 1080
        let 缩放y = device.height / 2400
        let 小图 = images.scale(小图1, 缩放x, 缩放y)
        let result = images.matchTemplate(大图, 小图, {
            max: 1,
            region: [0, 0, device.width, device.height], //区域
            threshold: 识别率,
        });

        if (result != null) {

            for (let i = 0; i < result.matches.length; i++) {
                let pp = result.matches[i].point
                // log(pp)
                // console.nk
                console.warn("找到" + 所找图[n], pp.x, pp.y)
                let xx = random(pp.x, pp.x + 小图1.getWidth())
                let yy = random(pp.y, pp.y + 小图1.getHeight())

                click(xx, yy)
                //  log(pp.x, pp.y)
                console.error("点击--" + 所找图[n])
                sleep(1000)
                小图1.recycle();
                sleep(1000)
                break;
            }
        } else {
            console.log("===未找到" + 所找图[n])
        }


    }

}

//更新
fun.更新 = function (t_name, version) {
    threads.start(function () {
        const localname = t_name //此脚本名称需和脚本文件名相同
        const localversion = version //更新时增大版本号
        const vipname = "jack" //换成你的自定义账号 需和脚本云登录的一致
        const baseUrl = "http://103.151.217.181/rgx/";
        var res = http.get(baseUrl + "codelist.php?user=" + vipname).body.json();
        try {
            //遍历云端文件找到同脚本名的脚本，判断版本号大小是否需要更新
            for (var i = 0; i < res.length; i++) {
                var name = res[i].fileName
                cloudfilename = name.substring(0, name.lastIndexOf("."))
                var cloudname = cloudfilename.substring(0, cloudfilename.lastIndexOf("V"))
                var cloudversion = cloudfilename.substring(cloudfilename.lastIndexOf("V") + 1)
                if (cloudname == localname) {
                    if (localversion.replace(/\D/g, '') < cloudversion.replace(/\D/g, '')) {
                        codePath = engines.myEngine().cwd() + "/" + t_name + ".js";
                        files.write(codePath, http.get(baseUrl + "download.php?user=" + vipname + "&name=" + name).body.string())
                        engines.execScriptFile("main.js");
                        toast("更新版本=>V" +cloudname+ cloudversion)
                        exit()
                    }
                }
            }
        } catch (e) { }
    })
}

module.exports = fun;