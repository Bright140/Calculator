function changest(x) {
    document.getElementById(x).style.borderColor= "rgb(40, 40, 255)";
}
function changesr(x) {
    document.getElementById(x).style.borderColor= "rgb(110, 110, 255)";
}
function reset() {
    document.getElementById("oled-1").innerHTML= '';
    document.getElementById("oled-2").innerHTML= '';
    document.getElementById("oled-3").innerHTML= '';
    document.querySelector("#result > p").innerHTML= '';
}
document.getElementsByClassName("reset")[0].onpointerdown= ()=> {
    document.getElementsByClassName("reset")[0].style.borderColor= "rgba(207, 135, 0, 1)"
};
document.getElementsByClassName("reset")[0].onpointerup= ()=> {
    document.getElementsByClassName("reset")[0].style.borderColor= "orange"
};
function numbery(x) {
    r= document.getElementById("oled-2").innerHTML;
    if (r=='') {
        t= document.getElementById("oled-1").innerHTML;
        if (x=='.'&&t=='') {
            document.getElementById("oled-1").innerHTML= t;
        } else {
            document.getElementById("oled-1").innerHTML= t+x;
        }
    } else {
        t= document.getElementById("oled-3").innerHTML;
        if (x=='.'&&t=='') {
            document.getElementById("oled-3").innerHTML= t;
        } else {
            document.getElementById("oled-3").innerHTML= t+x;
        }
    }
}
function result() {
    x= document.getElementById("oled-1").innerHTML;
    y= document.getElementById("oled-2").innerHTML;
    z= document.getElementById("oled-3").innerHTML;
    a= x*1;
    b= z*1;
    if (y=='+') {
        return a+b;
    } else if (y=='-') {
        return a-b;
    } else if (y=='x') {
        return a*b;
    } else {
        return a/b;
    }
}
function mathr(w) {
    x= document.getElementById("oled-1").innerHTML;
    y= document.getElementById("oled-2").innerHTML;
    z= document.getElementById("oled-3").innerHTML;
    if (x!=''&&y!=''&&z!='') {
        r= result();
        document.getElementById("oled-1").innerHTML= r;
        document.getElementById("oled-2").innerHTML= w;
        document.getElementById("oled-3").innerHTML= '';
    } else if (x!='') {
        document.getElementById("oled-2").innerHTML= w;
    }
}
document.getElementById('b=').onclick= ()=> {
    x= document.getElementById("oled-1").innerHTML;
    y= document.getElementById("oled-2").innerHTML;
    z= document.getElementById("oled-3").innerHTML;
    if (x!=''&&y!=''&&z!='') {
        r= result();
        document.querySelector("#result > p").innerHTML= r;
    }
}