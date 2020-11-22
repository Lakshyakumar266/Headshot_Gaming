// console.log('login');

let btnstart = document.getElementById('loginpage')
let loginnow = document.getElementById("login-formate");
// console.log(btnstart);
// console.log(loginnow);
btnstart.addEventListener("click", function () {
  loginnow.innerHTML = `
    <style>
    * {
        margin: 0;
        padding: 0;
      }
      .hide-show {
        display: none;
      }
      .Login {
        position: fixed;
        display: flex;
        z-index: 99999999;
        justify-content: center;
        padding: 35px;
        top: 20px;
        left: 0;
        width: 100%;
        outline: 0;
        overflow: hidden;
        height: 100vh;
        width: 100%;
        text-transform: capitalize;
      }
      
      .LogIn-h4 {
        text-align: left;
        border-bottom: 1px solid #cbcdcf;
        padding: 10px 20px;
      }
      .box-login {
        border-radius: 7px !important;
        padding: 10px 0;
        height: 70vh;
        background-color: #fff;
        width: 35%;
      }
      .form-group {
        margin: 20px;
        text-align: left;
        flex-direction: column;
      }
      .close {
        margin: 0px 15px;
      }
      .form input {
        width: 100%;
      }
      .light-view {
        font-size: 13px;
        color: #6d6d6d;
        margin-top: 2px;
      }
      .exit {
        text-align: right !important;
      }
      .exit button {
        width: 20%;
        text-transform: capitalize;
        color: white;
        font-weight: 400;
        background-color: rgb(112, 110, 110) !important;
        border: none !important;
      }
      .exit button:hover {
        background-color: rgb(112, 110, 110) !important;
        border: none !important;
      }
      .exit button:focus {
        box-shadow: 0 0 0 0.2rem rgba(112, 110, 110, 0.6) !important;
      }
      .contaner {
        background-color: rgba(0, 0, 0, 0.3) !important;
      }
      .modal-hidden {
        overflow-x: hidden;
        overflow-y: auto;
      }
      .modal-hide {
        overflow: hidden;
      }
      .content-between {
        background-color: rgba(0, 0, 0, 0.3) !important;
      }
      .login {
        width: 20%!important;
      }
      
    </style>
        <div class="box-login">
            <button type="button" class="close" data-dismiss="alert" id="remove" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="LogIn-h4">Login using your credentials</h4>
            <form id="login-control-form">
                <div class="form-group ">
                <label for="text">Username</label>
                <input type="text" class="form-control" id="Name" placeholder="Enter Your Name">
                <div id="show-error"></div>
                </div>
                <div class="form-group ">
                <label for="text">password</label>
                <input type="password" id="Password" class="password form-control" placeholder="Type Your Password">
                <div id="show-error1"></div>
                </div>
                <div class="form-group">
                    <input type="submit" id="Submit" class="login btne btn" value="LogIn">
                </div>
                <hr>
                <div class="form-group exit">
                    <button id="exit-btn" class=" btne btn">Close</button>
                </div>
            </form>
        </div>
        `;
  let exit_btn = document.getElementById("exit-btn")
  let exit_cross = document.getElementById("remove")
  // console.log(exit_btn);
  exit_btn.addEventListener('click', function () {
    loginnow.innerHTML = ''
  })
  exit_cross.addEventListener('click', function () {
    loginnow.innerHTML = ''
  })

  let form = document.getElementById('login-control-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  })

  
  function validation(givenid,placeid,textshowless,textshowmore) {
    $(document).ready(function(){
        $('#Submit').click(function(){
            let id = $(`${givenid}`).val();
            // console.log(id);
            if (id == "") {
                $(`${placeid}`).html(`${textshowmore}`)
                $(`${placeid}`).css('color','red')
                return false;
            }
            else if (id.length <= 2 || id.length >= 25) {
                $(`${placeid}`).html(`${textshowless}`)
                $(`${placeid}`).css('color','red')
            }
            else(
                $(`${placeid}`).html("")
            )
        })
    });
  }
  let Namevalid = new validation('#Name','#show-error', '*Incorrect Name*','*The Name Must Must Be Fild*.')
  let Passwordvalid = new validation('#Password','#show-error1', '*Wrong Password*','*The password Must Must Be Fild*.')
});

