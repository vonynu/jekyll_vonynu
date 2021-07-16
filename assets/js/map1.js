$(document).ready(function () {
    /* 以上是页面加载的主函数，不能修改。 */

    // 百度地图API功能
    var map = new BMapGL.Map("myMap");      // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(110.171261,22.62957), 18);  // 初始化地图,设置中心点坐标和缩放级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // 设置视角
    map.setHeading(64.5);
	map.setTilt(73);

    /* 以下是页面加载的主函数，不能修改。 */
});
