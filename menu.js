function toggleMenu() {
    var x = document.getElementById("nav");
    console.log("Ds :",x.className)
    if (x.className === "") {
      x.className += "responsive";
} else {
  x.className = "";
}
  }