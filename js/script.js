$(window).on('scroll' , function(){
    if($(window).scrollTop()){
        $('.header').addClass('navi')
    }
    else{
        $('.header').removeClass('navi')
    }
})


function toggleMenu(){
    document.getElementById('menu').classList.toggle('change')
} 

$("#menu").click(function(){
    $("#nevmobile").fadeToggle(1000);
});

$(".sub-menu2").click(function(){
    $(".mb-ul").slideToggle(500);
});

$(".sub-menu3").click(function(){
    $(".mb-ul2").slideToggle(500);
});

$(".mb-ul").click(function(){
    $(".submenu").slideToggle(500);
});

$(".mb-ul").click(function(){
    $(".submenu1").slideToggle(500);
});

$(".smenu2 li").click(function(){
    $("ul li").slideToggle(500);
});

$(document).on('click' , '.nav-tex ul li a', function(){
    $(this).addClass("active1").siblings().removeClass("active1")
})

$(document).on('click' , '.someWorkBox ul li', function(){
    $(this).addClass("active1").siblings().removeClass("active1")
})

$(document).on('click' , '.ourSkill ul li', function(){
    $(this).addClass("active3").siblings().removeClass("active3")
})


var num1 = setInterval(projectDone, 10)
var num22 = setInterval(happyClt, 0.01)
var num33 = setInterval(winn, 10)
var num44 = setInterval(year, 100)

var count1 = 1;
var count2 = 1;
var count3 = 1;
var count4 = 1;

function projectDone() {
    count1++;
    document.querySelector("#num1").innerHTML = count1;

    if(count1 == 235){
        clearInterval(num1);
     }
}

function happyClt() {
    count2++;
    document.querySelector("#num22").innerHTML = count2;

    if(count2 == 1409){
        clearInterval(num22);
    }
}

function winn() {
    count3++;
    document.querySelector("#num33").innerHTML = count3;

    if(count3 == 75){
        clearInterval(num33);
    }
}

function year() {
    count4++;
    document.querySelector("#num44").innerHTML = count4;

    if(count4 == 8){
        clearInterval(num44);
    }
}


var a = document.getElementById("text1");
var b = document.getElementById("text2");
var c = document.getElementById("text3");
var d = document.getElementById("text4");
var e = document.getElementById("text5");


function one1(){
    a.style.display = 'block'
    b.style.display = 'none'
    c.style.display = 'none'
    d.style.display = 'none'
    e.style.display = 'none'
}

function two1(){
    a.style.display = 'none'
    b.style.display = 'block'
    c.style.display = 'none'
    d.style.display = 'none'
    e.style.display = 'none'
}

function three1(){
    a.style.display = 'none'
    b.style.display = 'none'
    c.style.display = 'block'
    d.style.display = 'none'
    e.style.display = 'none'
}


function four1(){
    a.style.display = 'none'
    b.style.display = 'none'
    c.style.display = 'none'
    d.style.display = 'block'
    e.style.display = 'none'
}

function five1(){
    a.style.display = 'none'
    b.style.display = 'none'
    c.style.display = 'none'
    d.style.display = 'none'
    e.style.display = 'block'
}



// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
