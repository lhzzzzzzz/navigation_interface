// 更新并显示当前时间
function updateCurrentTime() {
    // 获取当前时间并格式化为字符串
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 添加零以保证秒数为两位数
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // 格式化时间为 HH:MM:SS 格式
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // 获取用于显示时间的 <div> 元素
    var timeElement = document.getElementById("time");

    // 设置当前时间为 <div> 元素的文本内容
    timeElement.textContent = "现在的时间是 " + formattedTime;
}

// 在页面加载完成后执行显示当前时间的函数，并每秒钟刷新一次
window.onload = function () {
    // 更新当前时间并显示
    updateCurrentTime();

    // 每秒钟刷新一次时间
    setInterval(updateCurrentTime, 1000);
};
