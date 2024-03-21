// console.log("More Warrning");

// alert("NO ENTRY BHAU");
// document.write("BHAU Javascript writeing");
// console.worn("imp warrning");
// console.error("tha error");
// var num1 = 40;
// var num2 = 50;
// console.log(num1 + num2);
// var num1 = 5;
// var num2 = 5;
// console.log(num1 + num2);
// var marks={
//     avi:55,
//     bhavi:25,
//     amer:20,
//     anhy:50.20
// }
// console.log(marks);

// var und;
// console.log(und);
// var a = true;
// var b = false;
// console.log(a);
//Array:-------
// var arr = [1,2,V,5,R];
// console.log(arr);
// var a = 10;
// var b = 20;
// console.log("tha value a+b is", a+b);
// console.log("tha value a-b is", a-b);
// console.log("tha value a*b is", a*b);
// console.log("tha value a/b is", a/b);
// // Assignment operator :------
// var a = 10;
// var b = 20;
// var c = a;
// c+=2;
// c-=5;
// console.log(c);
// comparison operator:---
var x =30;
var y =20;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x<y);
console.log(x>y);
// logical operator:---------------
console.log(true && true)
console.log(true && false)
console.log(false && true )
console.log(false&& false)
//...or()
console.log(true || false)
console.log(true || true)
console.log(false || true )
console.log(false || false)
//.....not
console.log(!false)
console.log(!true)
//.....function:--------
function avg(a,b){
    return (a + b )/2;
    
}
c1 = avg(4,6);
c2 = avg(14,16);
console.log(c1,c2);
//.......conditional:----
//if else statement....
var age=5;
if(age<6){
console.log("good");
}
else{
    console.log("bad")
}
//,,,if sta....
var age=5;
if(age<6){
console.log("good");
}
//if else ...ladder..,,,,
age=29;
if(age<6){
    console.log("aa");
    }
    else if(age<25){
        console.log("bb")
    }
    else if(age>30){
        console.log("cc")
    }
    else if(age<60){
        console.log("dd")
    }
    //,,,,,,,for loops,,:-----
    var arr = [1,2,3,4,5,6,7];
    arr.forEach(function(element){
        console.log(element)
    })
    // //......while loops..:--------
    let j= 0;
    while(j<arr.length){
        console.log(arr[j]);
        j ++;
    }
    //;;;;do ,while loops:---------
    let i=0;
    do{
        console.log(arr[i]);
        i++;
    }while(i<arr.length);
    //.....Arry method,,,,:----
    let myarr=["fan","camera",34,null,true];
    console.log(myarr.length);
    myarr.pop();
    console.log(myarr);
    myarr.push(false);
    console.log(myarr);
    myarr.shift();
    console.log(myarr);
    myarr.unshift(5245462116);
    console.log(myarr);
//...... string method:------
let mylovestring = "harry is a good boy harry";
console.log( mylovestring.length)
console.log( mylovestring.indexOf("boy"))
console.log( mylovestring.lastIndexOf("harry"))
console.log( mylovestring.slice(11,16))
d= mylovestring.replace("boy","girls");
console.log(d);
let mydate= new Date();
console.log(mydate.getHours());
console.log(mydate.getFullYear());
//....dom manipulate....:-----]

// let elem =document.getElementById('click me');
// console.log(elem);
let elemclass =document.getElementsByClassName('abc');
console.log(elemclass);
// elemclass[0].style.background= "blue"
elemclass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elemclass[0].innerHTML);
// console.log(elem.innertext);
// console.log(elemclass[0].innertext);

// tn= document.getElementsByName('p');
// console.log(tn);
// createdElement=document.createdElement('p')
// createdElement.innerText= "This is a javascirpt";
// tn[0].appendchild(createdElement);

//,,,,,,,,,,,,Query Selecting:-----
sel=document.querySelector('.abc');
console.log(sel);
el=document.querySelectorAll('.abc');
console.log(sel);

//.....EVENT....:-----
function clicked(){
    console.log('VRUSHABH BHAU')
}
firstabc.addEventListener('click', function(){
    console.log("bs kr bhai")
})
firstabc.addEventListener('mouseover', function(){
    console.log("mouseover hoy te")
})
firstabc.addEventListener('mouseout', function(){
    console.log("mouse bher challa  re")
})
//settimeout and setinterval........
logkaro = ()=>{
    console.log("log zala re ba")
}
clr= setTimeout(logkaro,2000);
clr= setInterval(logkaro,3000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


localStorage.setItem('name','haryy')
// localStorage
// localStorage.getItem('name')