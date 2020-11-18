function hitung() {
  let inp = document.getElementById("inp").value; //ambil value dari id inp
  let valas = document.getElementById("valas").value; //ambil value dari id valas
  if(valas == "usd") {  //jika valuenya USD, maka
    nilai = 9915; //buat nilai per 1 valasnya sebesar Rp. 9915
    res = inp*nilai; //perkalian apa yang di input user dikali dengan nilai per 1valas
    document.getElementById("res").value = "Rp. " + res; //tampilkan output ke id res
  } else if(valas == "sgd") {
    nilai = 13472;
    res = inp*nilai;
    document.getElementById("res").value = "Rp. " + res;
  } else if(valas == "myr") {
    nilai = 874;
    res = inp*nilai;
    document.getElementById("res").value = "Rp. " + res;
  } else if(valas == "jpy") {
    nilai = 120;
    res = inp*nilai;
    document.getElementById("res").value = "Rp. " + res;
  } else if(valas == "eur") {
    nilai = 15888;
    res = inp*nilai;
    document.getElementById("res").value = "Rp. " + res;
  } else if(valas == "ryl") {
    nilai = 3592;
    res = inp*nilai;
    document.getElementById("res").value = "Rp. " + res;
  }
}