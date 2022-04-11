console.log("hello world");

setInterval(() => {
  var timer = function () {
    var final = new Date("apr 11,2022 6:00:00").getTime();
    var now = new Date().getTime();
    var diffrence = final - now;
    var hours = Math.floor(
      (diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var min = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diffrence % (1000 * 60)) / 1000);
    document.getElementById("content").innerHTML =
      hours + " Hrs" + " : " + min + " Min" + " : " + sec + " Sec";
  };
  timer();
}, 1000);
