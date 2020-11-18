function hitung() {
  let inp = document.getElementById("inp").value;
  let valas = document.getElementById("valas").value;
  if(valas == 1) {
    nilai = 9915;
    res = inp*nilai;
    document.getElementById("res").value = res;
  } else if(valas == 2) {
    nilai = 13472;
    res = inp*nilai;
    document.getElementById("res").value = res;
  } else if(valas == 3) {
    nilai = 874;
    res = inp*nilai;
    document.getElementById("res").value = res;
  } else if(valas == 4) {
    nilai = 120;
    res = inp*nilai;
    document.getElementById("res").value = res;
  } else if(valas == 5) {
    nilai = 15888;
    res = inp*nilai;
    document.getElementById("res").value = res;
  } else if(valas == 6) {
    nilai = 3592;
    res = inp*nilai;
    document.getElementById("res").value = res;
  }
}