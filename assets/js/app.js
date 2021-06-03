$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#1").val(localStorage.getItem("1"))
$("#2").val(localStorage.getItem("2"))
$("#3").val(localStorage.getItem("3"))
$("#4").val(localStorage.getItem("4"))
$("#5").val(localStorage.getItem("5"))


$(document).ready(function(){

$(".save").on("click",function(){

    var  time =$(this).val()
    console.log(time)
    var activity=$(`textarea#${time}`).val()
    console.log(activity)
    localStorage.setItem(time,activity)

})

})