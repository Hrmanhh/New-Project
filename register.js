function check() {
  let username = document.getElementById('tdn').value;
  let password = document.getElementById('mk').value;
  let rePassword = document.getElementById('rmk').value;
  let phone = document.getElementById('sdt').value;


  if (username.length == 0) {
      alert("Vui lòng nhập tên của bạn!");
  } else {
    if (username.length < 4) {
      alert("Tên đăng nhập phải có 5 kí tự trở lên")
    }
  }



  if (password.length == 0) {
    alert("Vui lòng nhập mật khẩu của bạn!");
  } else {
    if (password.length < 8) {
      alert("Mật khẩu phải có 8 kí tự trở lên!");
    } else {
      if (rePassword != password) {
        alert("Mật khẩu lần 2 không đúng!");
      }
    }
  }



  if (phone.length == 0) {
    alert("Vui lòng nhập số điện thoại của bạn!");
  } else {
    if (phone.length < 10) {
      alert("Định dạng số điện thoại không đúng!");
    }
  }


  
  if (username.length > 4) {
    if (password.length >= 8) {
      if (rePassword == password) {
        if (phone.length >= 10) {
          alert("Đăng kí thành công");
          login.click();
        }
      }
    }
  }
}