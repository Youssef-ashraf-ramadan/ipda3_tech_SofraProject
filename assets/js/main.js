
let chooseboxes = document.querySelectorAll('.choose-box2');


$('.upload-img').click(function(){
    $('.upload-input').trigger('click');
})

$('.fa-shopping-cart').click(function(){
    $('.dropdown-first').toggleClass('dropdown-first-show dropdown-first-hide');
})
$('.fa-user-circle').click(function(){
    $('.dropdown-second').toggleClass('dropdown-first-show dropdown-first-hide');
})

for(let i = 0 ; i < chooseboxes.length; i++){
   
    chooseboxes[i].addEventListener('click' , function(){
        let current = document.querySelectorAll('.box2.active');

        for(let j = 0; j < current.length; j++){
            current[j].classList.remove('active');
        }
        chooseboxes[i].classList.add('active');
    })
}


