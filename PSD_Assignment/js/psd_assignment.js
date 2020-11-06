function myFunction() {
  var x = document.getElementById("nav");
  var y = document.getElementById("top_logo");

  if (x.className === "col-6 col-sm-5 nav") {
    x.className += " responsive";
    x.classList.remove('col-6');
    x.classList.add('col-12');
    x.classList.add('display_show');

  } else {
    x.className = "col-6 col-sm-5 nav";
    x.classList.remove('col-12');
    x.classList.remove('display_show');
    x.classList.add('col-6');

  }
}

function organisationTable() {
  var x = document.getElementById("collapse_first");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function individualTable() {
  var x = document.getElementById("collapse_second");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}