$(document).ready(function () {
    //以毫秒为周期调用一个函数
    var ggoop = null;




    //以毫秒为周期调用一个函数
    setInterval(daojishi, 1000);
    ggoop = setInterval(Tshow, 1000);


    //点击时间暂停与时间继续
    $("#StoptimeBtn").click(function () {
        clearInterval(ggoop);
    });

    $("#StarttimeBtn").click(function () {
        ggoop = setInterval(Tshow, 1000);
    });



});
function Tshow() {
    var c1 = new Date();
    var yearend = c1.getFullYear().toString().substr(2, 2);
    $(".Span_year").text(yearend);
    datagogo(".date_one", ".date_two", c1.getDate());
    datagogo(".hours_one", ".hours_two", c1.getHours());
    datagogo(".minutes_one", ".minutes_two", c1.getMinutes());
    datagogo(".seconds_one", ".seconds_two", c1.getSeconds());
}


//倒计时计算
function daojishi() {
    var yearNub = parseFloat($(".yearclass").text());
    var monthNub = parseFloat($(".monthclass").text());
    var dateNub = parseFloat($(".dateclass").text());
    var nowdate = new Date();
    var endtime = new Date(yearNub, monthNub - 1, dateNub);
    var leftTime = endtime.getTime() - nowdate.getTime();
    var leftsecond = parseInt(leftTime / 1000);

    //计算需要显示的时间
    var dayy = Math.floor(leftsecond / (60 * 60 * 24));
    var hourr = Math.floor((leftsecond - dayy * 24 * 60 * 60) / 3600);
    var minutee = Math.floor((leftsecond - dayy * 24 * 60 * 60 - hourr * 3600) / 60);
    var secondss = Math.floor(leftsecond - dayy * 24 * 60 * 60 - hourr * 3600 - minutee * 60);


    $(".Jfang_day4").text(dayy.toString().substr(-1, 1));
    $(".Jfang_day3").text(dayy.toString().substr(-2, 1));
    $(".Jfang_day2").text(dayy.toString().substr(-3, 1));
    $(".Jfang_day1").text(dayy.toString().substr(-4, 1));
    datagogo(".Jfang_hour1", ".Jfang_hour2", hourr);
    datagogo(".Jfang_minute1", ".Jfang_minute2", minutee);
    datagogo(".Jfang_seconds1", ".Jfang_seconds2", secondss);
}

function datagogo(classnametime1, classnametime2, classdate) {
    if (classdate < 10) {
        $(classnametime1).text(0);
        $(classnametime2).text(classdate.toString().substr(0, 1));
    } else {
        $(classnametime1).text(classdate.toString().substr(0, 1));
        $(classnametime2).text(classdate.toString().substr(1, 1));
    }
}

