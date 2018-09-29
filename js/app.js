'use strict';



document.addEventListener ('DOMContentLoaded', function (){
    console.log('Beata');

    var menuButton = document.querySelector('.for-dropdown');
    console.log(menuButton);
    var subMenu = document.querySelector('.dropdown');
    
    menuButton.addEventListener('mouseover', function() {    
        subMenu.style.display = 'block';    
    });
    
    menuButton.addEventListener('mouseout', function() {    
        subMenu.style.display = 'none';    
    });
    
    var buttons = document.querySelectorAll('.read-more');
    console.log(buttons);
    
    console.log(buttons[0].previousElementSibling);
    
    
    function showHide () {
        var textArea = this.previousElementSibling;   
        
        if (textArea.style.display === 'none' || textArea.style.display === '') {
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
                
        } else {
            textArea.style.display = 'none';
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';   
        }  
    }
    
    
    
    //buttons[0].addEventListener('click', showHide);
         
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
    
    
    var navBar = document.querySelector('.navbar');
    console.log(navBar);
    
    window.addEventListener('scroll', function() {
        navBar.style.borderBottom = '3px solid red';
        console.log('balbalbal');
    });
      
});



