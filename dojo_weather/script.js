var msg = document.querySelector('.message')
function hideThis(){
    msg.remove ();
    console.log('function functioning')
}

var temp = document.querySelector('.temperature')
var tdyFhi = document.querySelector('.today .high')
var tdyFlw = document.querySelector('.today .low')
var tmrwFhi = document.querySelector('.tomorrow .high')
var tmrwFlw = document.querySelector('.tomorrow .low')
var friFhi = document.querySelector('.friday .high')
var friFlw = document.querySelector('.friday .low')
var strdyFhi = document.querySelector('.saturday .high')
var strdyFlw = document.querySelector('.saturday .low')

function changeTemp(){
    tdyFhi.innerText = "75°"
    tdyFlw.innerText = "65°"

    tmrwFhi.innerText = "80°"
    tmrwFlw.innerText = "66°"

    friFhi.innerText = "69°"
    friFlw.innerText = "61°"

    strdyFhi.innerText = "78°"
    strdyFlw.innerText = "70°"
}