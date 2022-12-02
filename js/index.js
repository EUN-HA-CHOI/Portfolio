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
/*scrollTop*/
const scrollTop1 = document.querySelector(".scrollTop1");
const scrollTop2 = document.querySelector(".scrollTop2");
const scrollTop3 = document.querySelector(".scrollTop3");
const scrollTop4 = document.querySelector(".scrollTop4");
const scrollTop5 = document.querySelector(".scrollTop5");
const scrollTop6 = document.querySelector(".scrollTop6");
const scrollTop7 = document.querySelector(".scrollTop7");
const scrollTop8 = document.querySelector(".scrollTop8");

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
  if(scroll > 1320) {
    scrollTop5.style.opacity = 1;
    scrollTop6.style.opacity = 1;
  }
  if(scroll > 1320) {
    scrollTop5.style.opacity = 1;
    scrollTop6.style.opacity = 1;
  }
})


const modal = document.getElementById("modal")
const btnModal = document.getElementById("btn-modal")
btnModal.addEventListener("click", e => {
    modal.style.display = "flex"
})

const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
})

modal.addEventListener("click", e => {
  const evTarget = e.target
  if(evTarget.classList.contains("modal-overlay")) {
      modal.style.display = "none"
  }
})
 