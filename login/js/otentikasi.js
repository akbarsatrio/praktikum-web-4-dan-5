function run() {
  let us = document.getElementById("us").value;
  let pw = document.getElementById("pw").value;
  if  (us == "admin" && pw == "admin") {
      window.alert("Login Berhasil")
      location.href = "sukses.html";
  } else {
    window.alert("Login Gagal")
    return false;
  }
}