//var p = new Array(24);
//for(var i = 0; i < 24; i++){
//    p[i]=document.getElementById("p"+i);
//}
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var p8 = document.getElementById("p8");
var p9 = document.getElementById("p9");
var p10 = document.getElementById("p10");
var p11 = document.getElementById("p11");
var p12 = document.getElementById("p12");
var p13 = document.getElementById("p13");
var p14 = document.getElementById("p14");
var p15 = document.getElementById("p15");
var p16 = document.getElementById("p16");
var p17 = document.getElementById("p17");
var p18 = document.getElementById("p18");
var p19 = document.getElementById("p19");
var p20 = document.getElementById("p20");
var p21 = document.getElementById("p21");
var p22 = document.getElementById("p22");
var p23 = document.getElementById("p23");
var p24 = document.getElementById("p24");
var p = new Array(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24);


for(var i = 0; i < 24; i++){
    p[i].style.opacity = "1";
    p[i].addEventListener("click", function() {
        if(this.style.opacity == "1"){
            this.style.opacity = "0.5";
        }else{
            this.style.opacity = "1";
        }
    }, false);
}

function selectionElement(tabElements){
  var n = tabElements.length;
  var num = Math.floor(Math.random() * n);
  return tabElements[num];
}
