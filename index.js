let display=document.getElementById("header")
let sentence=["This is an autotyping project.",
"my name is Halimah",
"I am a student of SQI",
"Studying software engineering",
];
let wordindex=0;
let sentenceindex=0;
// let arr=words.length
let i=0;

function auto(){
    display.innerHTML+=sentence[sentenceindex][wordindex]

    wordindex++
    setTimeout(function(){
        if (sentence[sentenceindex][wordindex]){
            auto();
            
            
        } else{
            deletee();
        }
    },200)
    
    
}
auto();
function deletee(){
if(display.innerHTML==""){
    if(sentence[sentenceindex+1]){
        sentenceindex++;
        wordindex=0;
        auto();
    } else{
        sentenceindex=0;
        wordindex=0;
        auto();
    }
    return;
}
display.innerHTML=display.innerHTML.slice(0,-1);
setTimeout(function(){
    deletee();
},100)
}
// let words=["my name is halimah"]
// let arr= words.split("")
//  let string = "my name is halimah";
//     let array = string.split("");
//     let timer;
//     let i=0;

//     function looper() {
//       if (array.length > i) {
//         document.getElementById("header").innerHTML += array.shift();
//       } else {
//         clearTimeout(looper);
//       }
//       timer = setTimeout('looper()', 50);
//     }
//     looper();
  

























// let arr=["halimah","karimah","sofiyat"]
// let lent=arr.length
// let i=0;

// function loop() {
//   if(i=lent){
//   return   } 
//    setTimeout(function(){
//     loop();
//    },1000);
//   console.log(arr[i]);
//    i++;
//    loop();
   

// }

// ;