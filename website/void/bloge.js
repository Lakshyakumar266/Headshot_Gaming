// console.log('nuthing inside fire');
function Display_Nuthing() {
    $(document).ready(function () {
        var thing = false;
        $('.nuthing-hear').click(function () {
            if (thing == false) {
                // console.log(thing);
                $('#nthing').html(`
                    <div class="alert alert-warning alert-dismissible fade show alert-background" role="alert">
                    <strong>Sorry:</strong> Nuthing is inside Pleas try Again After Sume Time
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    `)
            }
            // else (
            //     // console.log('no')
            //     // thing =  true;
            // )
            setTimeout(() => {
                let remover = document.getElementById('nthing')
                remover.innerHTML = ``
            }, 3000);
        })
    })
}
let nut = new Display_Nuthing()