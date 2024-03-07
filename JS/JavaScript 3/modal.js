// var togglebtn = () => {
//   document.querySelector().classList.toggle("active");
// };

// document.querySelector(".btn").addEventListener("click", function () {
//     document.querySelector(".main-ctn").classList.toggle("active");
// })

var modal = document.querySelector(".overlay-ctn");
var modalctn =document.querySelector(".modal-ctn");
var Btn = document.querySelector(".btn");
var closebtn =document.querySelector(".close-btn");

Btn.addEventListener("click", function () {
  modal.style.display = "block";
  modalctn.style.display = "block";
});

closebtn.addEventListener("click", function () {
  modal.style.display = "none";
  modalctn.style.display = "none";
});
