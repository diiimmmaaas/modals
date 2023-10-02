var modal = document.getElementById("myModal");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var closeModalBtn = document.getElementById("closeModal");
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

window.onload = function() {
  modal.style.display = "block";
}
