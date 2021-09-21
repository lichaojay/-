"ui";
//强制引流
// app.startActivity({
//     data: "mqqapi://card/show_pslcard?card_type=group&uin=560899667"
// })

// var x = device.width;
// var y = device.height;


var fun = require("fun.js");

var 宇宙烧烤店 = require("宇宙烧烤店.js")

//var 王者爱答题 = require("王者爱答题.js");
var 梦幻餐厅 = require("梦幻餐厅.js");
var 成语夺宝赛 = require("成语夺宝赛.js");
fun.更新("main", "1.0")
ui.layout(

    <vertical >

        <frame>
            <card w="auto" h="auto" layout_gravity="center"  >
                <Switch  id="autoService" text="无障碍服务开关--->" checked="{{auto.service != null}}" textSize="20sp" textStyle="bold" />
            </card>
        </frame>
        <horizontal layout_gravity="center" >
            {/* <button id="cap" text="悬浮窗权限" textSize="15sp" layout_gravity="center" margin="20 20 0 10" w="auto" /> */}
            <text text="识别度" textColor="black" margin="15 20 0 10" textSize="20sp" />
            <input id="sbd1" singleLine="true" hint="范围0.1-0.9"  w="50" margin="0 20 0 10" text="0.9" />
            <text text="激活码："  textColor="blue"  margin="15 20 0 10" textSize="20sp" textStyle="bold|italic"   />
            <input id="jhm" singleLine="true" hint="请输入激活码"  w="auto" margin="0 20 0 10" />
        </horizontal>
        <card w="*" h="auto" margin="5"  >
            <vertical >
                <horizontal>
                    <checkbox margin="15 0 0 0" id="yzskd_box" text="宇宙烧烤店" textSize="15sp" />
                    <input id="zqkd" hint="运行时长" w="auto" gravity="center" margin="65 0 0 10" text="15" />
                    <text text="分钟" textSize="15" textColor="red" />
                    <button margin="15 0 0 10" id="yzskd" text="去下载" textSize="15sp" w="auto" />
                </horizontal>

                <horizontal>
                    <checkbox margin="15 0 0 0" id="wzadt_box" text="王̶者̶爱̶答̶题̶" textSize="15sp" />
                    <input id="wzadt_t" hint="运行时长" w="auto" gravity="center" margin="65 0 0 10" text="15" />
                    <text text="分钟" textSize="15" textColor="red" />
                    <button margin="15 0 0 0" id="wzadt_down" text="去下载" textSize="15sp" w="auto" />
                </horizontal>

                <horizontal>
                    <checkbox margin="15 0 0 0" id="mhct_box" text="梦幻餐厅" textSize="15sp" />
                    <input id="mhct_t" hint="运行时长" w="auto" gravity="center" margin="81 0 0 10" text="15" />
                    <text text="分钟" textSize="15" textColor="red" />
                    <button margin="15 0 0 10" id="mhct_down" text="去下载" textSize="15sp" w="auto" />
                </horizontal>

                <horizontal>
                    <checkbox margin="15 0 0 0" id="cydbs_box" text="成语夺宝赛" textSize="15sp" />
                    <input id="cydbs_t" hint="运行时长" w="auto" gravity="center" margin="65 0 0 10" text="15" />
                    <text text="分钟" textSize="15" textColor="red" />
                    <button margin="15 0 0 10" id="cydbs_down" text="去下载" textSize="15sp" w="auto" />
                </horizontal>

            </vertical>
        </card>
        <button id="start" text="开始运行" textSize="20sp" w="200" layout_gravity="center" />
        <text margin="0 20 0 20" text="必须打开无障碍，悬浮窗，截图权限才能运行本软件，测试版1.0.1" textSize="20sp" gravity="center" />

    </vertical>
)


threads.start(function () {

    if (!requestScreenCapture()) {
        toast("请求截图失败");
        exit();
    }

})

ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});
//下载宇宙烧烤店
ui.yzskd.click(function () {
    app.openUrl("https://wwa.lanzoui.com/iHPuMskri0d")

});
//下载王者答题http://http://gameforum.adspools.cn/appweb/index.html?appId=207&uid=6650180
ui.wzadt_down.click(function () {
    app.openUrl("http://gameforum.adspools.cn/appweb/index.html?appId=207&uid=6650180")

});
//下载梦幻餐厅https://www.joyo.games/share/mhct/qrcode.html?os=android&userId=100208948
ui.mhct_down.click(function () {
    app.openUrl("https://www.joyo.games/share/mhct/qrcode.html?os=android&userId=100208948")

});

//下载成语夺宝赛http://fission.ewxmax.com/fission/chengyu2.html
ui.mhct_down.click(function () {
    app.openUrl("http://fission.ewxmax.com/fission/chengyu2.html")

});

//开始按钮
ui.start.on("click", function () {
    //程序开始运行之前判断无障碍服务
    var sbd = ui.sbd1.text()
    var t = ui.zqkd.text()
    var wzadt = ui.wzadt_t.text()
    var mhctt = ui.mhct_t.text()
    var cydbs = ui.cydbs_t.text()

    var 识别率 = parseFloat(ui.sbd1.text()).toFixed(2)
    存储识别度配置.put("sbd", sbd)
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    threads.start(function () {
        console.show()

        if (ui.yzskd_box.checked) {

            宇宙烧烤店.运行(t, 识别率);
        }
        //id="jj_box"

        if (ui.wzadt_box.checked) {
            王者爱答题.运行(wzadt, 识别率)

        }

        if (ui.mhct_box.checked) {
            梦幻餐厅.运行(mhctt, 识别率)

        }

        if (ui.cydbs_box.checked) {
            成语夺宝赛.运行(cydbs, 识别率)

        }



    })
});
///////////////////存储识别度配置//////////////////////
var 存储识别度配置 = storages.create("JACK脚本")
var sbd = 存储识别度配置.get("sbd")
if (sbd) {
    ui.sbd1.setText(sbd)
}






///全分辨率点击

// function 坐标点击(x1, y1) {
//     log(x + "," + y)
//     log(x / 1080 * x1, y / 2400 * y1)
//     click(x / 1080 * x1, y / 2400 * y1)

//     sleep(1500)
// }








//     sleep(1500)
// }















