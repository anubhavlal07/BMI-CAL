var countdowndate = new Date(
    "Feb 28,2022 20:00:00"
).getTime(); /*To Set the time of release*/
var x = setInterval(function () {
    var curr = new Date().getTime();
    var rem = countdowndate - curr;
    var days = Math.floor(rem / (1000 * 60 * 60 * 24));
    var hours = Math.floor((rem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((rem % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((rem % (1000 * 60)) / 1000);
    document.getElementById(
        "launch"
    ).innerHTML = `&nbsp${days}d ${hours}h ${mins}m ${secs}s&nbsp`;
    if (rem < 0) {
        clearInterval(x);
        document.getElementById("launch").innerHTML = "Date Expired";
    }
}, 1000);

/*To diable the input from the user*/
document.addEventListener(
    "keydown",
    function () {
        if (event.keyCode == 123) {
            return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            return false;
        } else if (event.ctrlKey && event.keyCode == 85) {
            return false;
        }
    },
    false
);

if (document.addEventListener) {
    document.addEventListener(
        "contextmenu",
        function (e) {
            e.preventDefault();
        },
        false
    );
} else {
    document.attachEvent("oncontextmenu", function () {
        window.event.returnValue = false;
    });
}
