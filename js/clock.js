var time = document.getElementById('time')
var date = document.getElementById('date')

function startTime(){

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    var dates = new Date()

    var hour = testTime(dates.getHours())
    var minutes = testTime(dates.getMinutes())
    var seconds = testTime(dates.getSeconds())

    var dayWeek = dates.getDay()
    var day = testTime(dates.getDate())
    var month = dates.getMonth()
    var year = dates.getFullYear().toString()

    time.innerHTML = hour+':'+minutes+':'+seconds
    date.innerHTML = days[dayWeek]+', '+months[month]+' '+day+' of '+year

    setTimeout(startTime,100)
}

function testTime(n){
    if (n<10){
        return '0'+n;
    }else{
        return n.toString();
    }


}