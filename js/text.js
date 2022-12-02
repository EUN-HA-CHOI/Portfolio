/*인사말*/
"use strict";
const content = "안녕하세요. 포기하지 않는 FE개발자,최은하 입니다!"
const text = document.querySelector(".hello")
let index = 0;

function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function typing(){
  text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(2000);
    }
}
setInterval(typing, 200);