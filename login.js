function check() {
    let username = document.getElementById('tdn').value;
    let password = document.getElementById('mk').value;
    // let text1;
    // let text2;

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
      }
    }     
    if (username.length > 4) {
      if (password.length >= 8) {
        alert("Đăng nhập thành công");
        main.click();
      }
    }
    // document.getElementById("noname").innerHTML = text1;
    // document.getElementById("nonumb").innerHTML = text2;

    // document.getElementById("noname").style.color = "red";
    // document.getElementById("nonumb").style.color = "red";
  }