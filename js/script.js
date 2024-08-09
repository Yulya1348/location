// Модальное окно Создать локацию

document.getElementById("modal__btn-create").addEventListener("click", function() {
  document.getElementById("modal-create").classList.add("open");
  document.querySelector("#scroll").classList.add("body-scroll")
});

document.querySelector(".btn-cancel").addEventListener("click", function() {
  document.getElementById("modal-create").classList.remove("open");
  document.querySelector("#scroll").classList.remove("body-scroll")
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-create").classList.remove("open");
    document.querySelector("#scroll").classList.remove("body-scroll")
  }
});

document.querySelector("#modal-create .modal-content").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-create").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.querySelector("#scroll").classList.remove("body-scroll")
});


// Модальное окно Изменить локацию

let btnsChange = document.querySelectorAll(".modal-btn");

for(btn of btnsChange) {
  btn.addEventListener("click", function() {
    document.getElementById("modal-change").classList.add("open")
    document.querySelector("#scroll").classList.add("body-scroll")
    document.querySelector(".modal-content").classList.add("body-scroll")
  
    document.getElementById("btn-cancel").addEventListener("click", function() {
      document.getElementById("modal-change").classList.remove("open");
      document.querySelector("#scroll").classList.remove("body-scroll")
    });
    document.getElementById("btn-save").addEventListener("click", function() {
      document.getElementById("modal-change").classList.remove("open")
      document.querySelector("#scroll").classList.remove("body-scroll")
    })
  
    document.querySelector("#modal-change .modal-content").addEventListener('click', event => {
      event._isClickWithInModal = true
    })
    document.getElementById("modal-change").addEventListener('click', event => {
      if (event._isClickWithInModal) return
      event.currentTarget.classList.remove('open')
      document.querySelector("#scroll").classList.remove("body-scroll")
    })

  })

  

  
}