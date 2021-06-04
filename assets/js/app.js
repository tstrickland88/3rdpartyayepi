$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))

var currTime=moment().format("dddd MMMM YYYY hh:mm:ss")
$("#currentDay").text(currTime)

$("textarea").each(function(){
var temp=$(this).attr('id')
console.log(temp)
var nowTime= moment().hours()
if(temp<nowTime){
$(this).addClass("past")
} else if(temp==nowTime){
$(this).addClass("present")
} else{
$(this).addClass("future")

}
})
$(document).ready(function(){

$(".save").on("click",function(){

    var  time =$(this).val()
    console.log(time)
    var activity=$(`textarea#${time}`).val()
    console.log(activity)
    localStorage.setItem(time,activity)

})

})