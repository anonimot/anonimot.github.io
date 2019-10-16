function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function startTime() {
  var today = new Date();

  var d= today.getDay();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ngay= today.getDate();
  var thang= today.getMonth();

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  ngay = checkTime(ngay);
  thang = checkTime(thang);

  var day;
  if(d== 1){
    day= "Thứ 2";
  }
  if(d== 2){
    day= "Thứ 3";
  }
  if(d== 3){
    day= "Thứ 4";
  }
  if(d== 4){
    day= "Thứ 5";
  }
  if(d== 5){
    day= "Thứ 6";
  }
  if(d== 6){
    day= "Thứ 7";
  }
  if(d== 7){
    day= "Chủ nhật";
  }

  document.getElementById("timer").innerHTML = day+ " "+ngay+ "/"+ thang+ " "+h + ":" + m + ":" + s;

  var t = setTimeout(function() {
    startTime();
  }, 1000);
}

function duonglich() {
  var dt = new Date();

  var ngay = dt.getDate();
  var thang = dt.getMonth() + 1;

  if (thang == 10 || thang == 12 || thang == 1) {
    if (thang == 10) {
      var demngay = 31 - ngay;
      demngay = demngay + 30 + 31 + 1;
      document.getElementById("duonglich").innerHTML = demngay;
    }
    if (thang == 12) {
      var demngay = 31 - ngay;
      demngay = demngay + 1;
      document.getElementById("duonglich").innerHTML = demngay;
    }
    if (thang == 1) {
      if (ngay == 1) {
        document.getElementById("duonglich").innerHTML = "Tết dương lịch";
      } else {
        document.getElementById("duonglich").innerHTML = "Qua rồi";
      }
    }
  } else {
    if (thang == 11) {
      var demngay = 30 - ngay;
      demngay = demngay + 31 + 1;
      document.getElementById("duonglich").innerHTML == demngay;
    }
  }
}

function amlich() {
  var dt = new Date();

  var ngay = dt.getDate();
  var thang = dt.getMonth() + 1;

  if (thang == 10 || thang == 12 || thang == 1) {
    if (thang == 10) {
      var demngay = 31 - ngay;
      demngay = demngay + 30 + 31 + 25;
      document.getElementById("amlich").innerHTML = demngay;
    }
    if (thang == 12) {
      var demngay = 31 - ngay;
      demngay = demngay + 25;
      document.getElementById("amlich").innerHTML = demngay;
    }
    if (thang == 1) {
      var demngay = 28 - ngay;
      if (demngay == 1) {
        document.getElementById("amlich").innerHTML = "Tết âm lịch";
      }
      if (demngay == 2) {
        document.getElementById("amlich").innerHTML = "Tết âm lịch";
      }
      if (demngay == 3) {
        document.getElementById("amlich").innerHTML = "Tết âm lịch";
      } else if (demngay <= 0) {
        document.getElementById("amlich").innerHTML = "Qua rồi";
      } else if (demngay >= 0 && demngay != 2 && demngay != 3 && demngay != 1) {
        document.getElementById("amlich").innerHTML = demngay;
      }
    }
  } else {
    if (thang == 11) {
      var demngay = 30 - ngay;
      demngay = demngay + 31 + 25;
      document.getElementById("amlich").innerHTML = demngay;
    }
  }
}
