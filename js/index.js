/*imgcontainer 스크롤 값
const imgContainer = document.querySelectorAll("#imgContainer");

window.addEventListener("scroll", (e) => {
  let scroll = document.querySelector("html").scrollTop;
  
  console.log(scroll)
  if(scroll > 300) {
    for(let list of imgContainer){
      list.classList.add("on");
    }
  }
});*/


/*로딩페이지*/
  window.addEventListener('DOMContentLoaded', function()
{
// wrap none
document.querySelector(".wrap").style.display='none';
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
    document.querySelector(".loading-page .counter h1").innerHTML=c + "%";
    //document.querySelector(".loading-page .counter hr").style.width=c + "%";
    document.querySelector(".loading-page .counter hr").style.display='block';
    counter++;
    c++;
    if(counter == 101) {
        clearInterval(i);
        document.querySelector(".loading-page").style.display='none';
        document.querySelector(".wrap").style.display='block';

    }
  }, 30);
});
  

const subMenu = document.querySelector(".sub-menu>li>button");
const subMenus = document.querySelector(".sub-menu>li>ul");

subMenu.addEventListener("click",()=>{
  subMenus.classList.toggle("on");
});

/*scrollTop*/
const scrollTop1 = document.querySelector(".scrollTop1");
const scrollTop2 = document.querySelector(".scrollTop2");
const scrollTop3 = document.querySelector(".scrollTop3");
const scrollTop4 = document.querySelector(".scrollTop4");
const scrollTop5 = document.querySelector(".scrollTop6");
const scrollTop6 = document.querySelector(".scrollTop7");
const scrollTop7 = document.querySelector(".scrollTop8");

window.addEventListener('scroll',() => {
  let scroll = document.querySelector('html').scrollTop;
   console.log('scroll')

  if(scroll > 0) {
    scrollTop1.style.opacity = 1;
    scrollTop2.style.opacity = 1;
  }
  if(scroll > 760) {
    scrollTop3.style.opacity = 1;
    scrollTop4.style.opacity = 1;
  }
  if(scroll > 1280) {
    scrollTop5.style.opacity = 1;
  }

})

// footer top버튼
const topBtn = document.querySelector(".top_btn"); 

topBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

