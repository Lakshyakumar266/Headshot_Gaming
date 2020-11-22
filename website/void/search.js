console.log('search.js');

var searcherr = document.getElementById('search.js')
searcherr.addEventListener('click', function (e) {
    e.preventDefault()
    let PlaceOfErrorSerch = document.getElementById('searcherr')
    PlaceOfErrorSerch.innerHTML = `
    <style>
        .color-blue{
            color: #7171ff;
        }
        .alert-search{
            z-index: 99999999999!important;
        }
        .alert-background-style{
            color: #004085!important;
            background-color: #cce5ff!important;
            border-color: #b8daff!important;
            text-align: left!important;
        }
        .fs-2{
            font-size: 14px;
        }
        .alert-search{
            padding: .75rem 1.25rem!important;
            margin-bottom: 1rem!important;
            border-radius: .25rem!important;
            position: unset!important;
        }
        #searcherr{
            position: sticky;
            z-index: 1000;
        }
    </style>
    <div class="alert alert-search alert-warning alert-dismissible fade show alert-background-style" role="alert">
        <strong>Sorry: </strong> Search Section Is In Devlopment phase <span class="badge badge-secondary fs-2">Try again after  sum time</span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `
    setTimeout(() => {
        let remover_place = document.getElementById('searcherr')
        remover_place.innerHTML = ``
    }, 3000);
})