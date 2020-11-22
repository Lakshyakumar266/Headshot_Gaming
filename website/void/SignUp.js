// console.log("login inside");

let log_in_button = document.getElementById("SignupPage");
let signupnow = document.getElementById("signupnow");
log_in_button.addEventListener("click", function () {
  signupnow.innerHTML = `
    <style>
    * {
        margin: 0;
        padding: 0;
      }
      .hide-show{
          display: none;
      }
      .signup {
        position: fixed;
        display: flex;
        z-index: 99999999;
        justify-content: center;
        padding: 15px;
        top: 0;
        bottom: 10px;
        left: 0;
        width: 100%;
        outline: 0;
        overflow: hidden;
        height: 100vh;
        width: 100%;
        margin-bottom: 10px; 
      }
      
      .signhedding {
        text-align: left;
        border-bottom: 1px solid #cbcdcf;
        padding: 10px 20px;
      }
      p{
        margin-bottom: 0!important;
      }
      .box-signup {
        border-radius: 5px !important;
        padding: 10px 0;
        height: 150vh;
        background-color: #fff;
        width: 40%;
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
      .email {
        width: 70% !important;
      }
      .password {
        width: 90% !important;
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
      
    </style>
        <div class="box-signup">
            <button type="button" class="close" data-dismiss="alert" id="remove" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
            <h4 class="signhedding">SignUp for an Account</h4>
            <form class="form" id="Signup-control-form">
                <div class="form-group ">
                    <label for="text">Username</label>
                    <input type="text" id="UserName" class="form-control" placeholder="Enter Your Name">
                    <p class="light-view">Your unique username must be less than 10 characters (only lowecase letters,numbers & underscores allowed) with no spaces</p>
                    <div id="show-error"></div>
                </div>
                <div class="form-group ">
                    <label for="text">First Name</label>
                    <input type="text" id="FirstName" class="form-control" placeholder="Enter Your First Name">
                    <div id="show-error1"></div>
                    </div>
                    <div class="form-group ">
                    <label for="text">last Name</label>
                    <input type="text" id="LastName" class="form-control" placeholder="Enter Your Last Name">
                    <div id="show-error2"></div>
                    </div>
                    <div class="form-group ">
                    <label for="text">Email</label>
                    <input type="email" id="Email" class="email form-control" placeholder="Enter Your email">
                    <div id="show-error3"></div>
                    </div>
                    <div class="form-group ">
                    <label for="text">Choose a password</label>
                    <input type="password" id="Password" class="password form-control" placeholder="Type Your Password">
                    <div id="show-error4"></div>
                    </div>
                    <div class="form-group ">
                    <label for="text">Retype Your password</label>
                    <input type="password" id="RetypPeassword" class="password form-control" placeholder="Retype Your Password">
                    <div id="show-error5"></div>
                </div>          
                <div class="form-group">
                    <input type="submit" id="Submit" class="btne btn" value="SignUp">
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
    signupnow.innerHTML = ''
  })
  exit_cross.addEventListener('click', function () {
    signupnow.innerHTML = ''
  })

  let Signupform = document.getElementById('Signup-control-form')
  Signupform.addEventListener('submit', function (e) {
    e.preventDefault();
  })


  function validation(givenid, placeid, textshowless, textshowmore) {
    this.givenid = givenid
    $(document).ready(function () {
      $('#Submit').click(function () {
        let id = $(`${givenid}`).val();
        if (id == "") {
          $(`${placeid}`).html(`${textshowmore}`)
          $(`${placeid}`).css('color', 'red')
          return false;
        }
        else if (id.length <= 2 || id.length >= 25) {
          $(`${placeid}`).html(`${textshowless}`)
          $(`${placeid}`).css('color', 'red')
        }
        else (
          $(`${placeid}`).html("")
        )
      });
    })
  }

  let UsernameValidate = new validation('#UserName', '#show-error', '* The Username Must Be More than 2 or less than 25 character*', '*The Username Must Must Be Fild*.')
  let FirstNamevalid = new validation('#FirstName', '#show-error1', '* The First Name Must Be More than 2 or less than 25 character*', '*The First Name Must Must Be Fild*.')
  let LastNamevalid = new validation('#LastName', '#show-error2', '* The Last Name Must Be More than 2 or less than 25 character*', '*The Last Name Must Must Be Fild*.')
  let Emailvalid = new validation('#Email', '#show-error3', '*Incorrect Email*', '*The Email Must Must Be Fild*.')

  // let Passwordvalid = new validation('#Password', '#show-error4', '', '')
  // let retypePasswordvalid = new validation('#RetypPeassword', '#show-error5', '', '')

});