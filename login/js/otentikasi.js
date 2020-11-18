function run() {
  let us = document.getElementById("us").value; //ambil value username di id us
  let pw = document.getElementById("pw").value; //ambil value password di id pw
  if  (us == "admin" && pw == "admin") {  //jika username admin dan password admin, jalakan statement true
      window.alert("Login Berhasil")  //tampilkan alert
      location.href = "sukses.html";  //lempar ke sukses.html
  } else {
    window.alert("Login Gagal")
    return false;
  }
}