
const gubMenu = document.querySelector(".gnb_wrap>.sub-menu>li>button");
const gubMenus = document.querySelector(".gnb_wrap>.sub-menu>li>ul");

gubMenu.addEventListener("click",()=>{
  gubMenus.classList.toggle("on");
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
 