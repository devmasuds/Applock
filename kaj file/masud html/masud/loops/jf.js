function testFunciotn (subject,marks) {
    if(marks >=80 &&marks <=100) {
        console.log(subject+" "+"A+"+" "+marks)
    }else if(marks >=70 &&marks <80) {
        console.log(subject+" "+"A"+" "+marks)
    }else if(marks >=60 &&marks <70) {
        console.log(subject+" "+"A-"+" "+marks)
     } else if(marks >=50 &&marks <60) {
        console.log(subject+" "+"B"+" "+marks)
     }else if(marks >=40 &&marks <50) {
        console.log(subject+" "+"C"+" "+marks) 
     }else if(marks >=33 &&marks <40) {
         console.log(subject+" "+"D"+" "+marks)
    }else{
        console.log(subject+" "+"fail"+" "+marks);
    }
    
}

testFunciotn("bangla",90)
testFunciotn("english 1",55)
testFunciotn("math",60)
testFunciotn("islam sikha",85)
testFunciotn("kishi sikha",77)
testFunciotn("saririk sikha",70)
testFunciotn("phijiks",45)
testFunciotn("kemesti",50)
testFunciotn("english 2",32)
var masud=34
var julhas=35
function age () {
    if(masud==julhas) {
        console.log(true);
    }else{
        console.log(false);
    }
    
}
age ()
var age =15
function paptoAge() {
    if(age>=20 && age<=40) {
        console.log("apnar biyer byos hoiche");
    }else{
        console.log("apnar biyer byos hoinai");
    }
}
paptoAge()

