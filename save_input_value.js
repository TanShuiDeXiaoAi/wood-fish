 //这是写电子木鱼的储存值的脚本
 window.onload = function() {
     //储存input的值
     if (localStorage.getItem("gd") == undefined) {
         $("input").val(1)
     } else {
         $("input").val(localStorage.getItem("gd"))
     }
 }