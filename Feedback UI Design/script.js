//get html elements
const ratings = document.querySelectorAll('.rating')

const ratingContainer = document.querySelector('.rating-container')

const sendBtn = document.querySelector('#send')

const panel = document.querySelector('#panel')

//sets the default rating to be satisfied
let selectedRating = 'Satisfied'

ratingContainer.addEventListener('click' , (e)=>{

    if(e.target.parentNode.classList.contains('rating')){

        //clear out any old active highlight
        removeActive()

        e.target.parentNode.classList.add('active')
        
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click' , (e)=>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `

})

function removeActive(){
    for(let i=0; i<ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}


//e.target---is the exact element clicked(image)
//e.target.parentNode ---gives the div.rating
//e.target.nextElementSibling.innerHTML --gets the <small> text label