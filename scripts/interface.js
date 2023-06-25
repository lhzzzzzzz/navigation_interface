// 更新并显示当前时间
function updateCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var formattedTime = hours + ":" + minutes + ":" + seconds;

    var timeElement = document.getElementById("time");

    timeElement.textContent = "The current time is: " + formattedTime;
}

// 在页面加载完成后执行显示当前时间的函数，并每秒钟刷新一次
window.onload = function () {
    // 更新当前时间并显示
    updateCurrentTime();
    // 每秒钟刷新一次时间
    setInterval(updateCurrentTime, 1000);
};
