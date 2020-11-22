// console.log('Blog page');

function dateShow(place,givendate) {
    let element = document.getElementById(`${place}`)
    element.innerHTML=`
    ON ${givendate}
    ` 
    // console.log(givendate);
}
let showDate1 = new dateShow('date1',`11-17-2020 10:16 PM`) // DD-MM-YYYY time
let showDate2 = new dateShow('date2',`12-17-2020 10:16 PM`) // DD-MM-YYYY time
let showDate3 = new dateShow('date3',`13-17-2020 12:27 PM`) // DD-MM-YYYY time


