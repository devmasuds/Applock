function pargap(subjet,marks) {
    if(marks>80 && marks<=100){
        console.log(subjet+" "+"A+"+" "+marks);
    }else{
        console.log(subjet+" "+"Fail"+" "+marks);
    }

    
}
// pargap("Bangla 1st",80)
// pargap("Bangla 2st",85)
// pargap("English 1st",89)
// pargap("English 2st",99)
// pargap("math",90)

var appliresult=function(nam,age) {
    switch (true) {
        case (age>=18):
            console.log(nam+" "+"nibondon kra jabe"+" "+age);
        
            
            break;
    
        default:
            console.log(nam+" "+"nibondon kra jabe na"+" "+age);
            break;
    }
    
}
//  appliresult("masud",19)
//  appliresult("julhas",25)
//  appliresult("rohan",17)
//  appliresult("tamim",4)

var agekomper=(nam,age)=>{
    if(age>=18 && age<=25){
        console.log(nam+" "+"jubok"+" "+age);
    }else if(age>25 && age <=35){
        console.log(nam+" "+"purno jubok"+" "+age);
    }else if(age>35 && age<=55){
        console.log(nam+" "+"caca "+" "+age);
    }else if(age >55 && age <=75){
        console.log(nam+" "+"bura "+" "+age);
    }else{
        console.log(nam+" "+"hoi to jibito nai"+" "+age);
    }
}

// agekomper("masud",24)
// agekomper("noyon",28)
// agekomper("nuramin",40)
// agekomper("krim mola",74)
// agekomper("borkot",77)


var amaunt=[10,20,30,40,50,60,70]
amaunt.forEach((item)=>{
    // console.log(item);
})
  
var totsl=amaunt.map((item)=>{
 return item 

})
// console.log(totsl[1]);

// var string="101001"
// flsfd=Number(string)
// nonde=flsfd.toString()
// console.log(nonde);

var jjjj=["a","b","c","d","e"]
var fff=jjjj.join(" "+"f"+" ")
// console.log(fff);
   
var vvvv="masud rana"
var vvvvo=vvvv.split(" ")
// console.log(vvvvo);

 jjjj.push("f","g")
//  console.log(jjjj);


var jjjjp=["a","b","c","d","e"]
 jjjjp.pop()
//  console.log(jjjjp);

 var jjjjo=["a","b","c","d","e"]
 jjjjo.shift()
//  console.log(jjjjo);

var jjjju=["a","b","c","d","e"]
jjjju.unshift("you")
// console.log(jjjju);

var jjjjy=["a","b","c","d","e"]
jjjjy.splice(1,3,"masud")
// console.log(jjjjy);
   


var jjjjo=["a","b","e","d","e"]
function newyer(i){
    return i ==="e"
}
// console.log(jjjjo.find(newyer));
// console.log(jjjjo.filter(newyer));
// console.log(jjjjo.some(newyer));
// console.log(jjjjo.indexOf("e"));
// console.log(jjjjo.lastIndexOf("e"));
// console.log(jjjjo.includes("v"));


var julhas=[10,20,30,40,50,60,70,80,90]
var masud=[10,20,30,40,50,60,70,80,90]
var tamim=[10,20,30,40,50,60,70,80,90]
// console.log(julhas.concat(masud,tamim));


var julhas=[10,20,30,40,50,60,70,80,90]
// console.log(julhas.reverse());



var julhas=[10,20,15,40,50,60,70,80,90]
// console.log(julhas.sort());


var julhas=[10,20,30,40,50,60,70,80,90]
// console.log(Array.isArray(julhas));

var julhas=[10,20,30]
function nnnn(i){
    return i==10
}
console.log(julhas.at(nnnn));