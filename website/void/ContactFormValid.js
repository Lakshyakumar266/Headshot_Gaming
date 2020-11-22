// console.log('form validition');

function validation(givenid,placeid,textshowless,textshowmore) {
    $(document).ready(function(){
        $('#submit').click(function(){
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
let namevalid = new validation('#Name','#show-error', '* The Name Must Be More than 2 or less than 25 *','*The Name Must Must Be Fild*.')
let Subjectvalid = new validation('#Subject','#show-error2', '* The Subject Must Be More than 2 or less than 25 *','*The Subject Must Must Be Fild*.')
let Emailvalid = new validation('#Email','#show-error1', '* The Email Must Include @ and . *','*The Email Must Must Be Fild*.')