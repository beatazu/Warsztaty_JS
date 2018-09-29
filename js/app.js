'use strict';



document.addEventListener ('DOMContentLoaded', function (){
   

    var menuButton = document.querySelector('.for-dropdown');
   
    var subMenu = document.querySelector('.dropdown');
    
    menuButton.addEventListener('mouseover', function() {    
        subMenu.style.display = 'block';    
    });
    
    menuButton.addEventListener('mouseout', function() {    
        subMenu.style.display = 'none';    
    });
    
    var buttons = document.querySelectorAll('.read-more');

    
   
    
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
   
    
    window.addEventListener('scroll', function() {
        navBar.style.borderBottom = '3px solid red';
    
    });
    
    
    var backToTopButton = document.getElementById('to-top');
    
    backToTopButton.addEventListener('click', function () {
        window.scroll( 0, 0);
    });
    
    var sliderItems = document.querySelectorAll('.org');
    var dotItems = document.querySelectorAll('.dot');
    var indexClicked;
    
    
    for (var i = 0; i < dotItems.length; i++) {
        
        dotItems[i].addEventListener('click', function() {
            
            for (var i = 0; i < dotItems.length; i++) {
                dotItems[i].classList.remove('active');
                sliderItems[i].classList.remove('visible'); 
            }
            
        this.classList.add('active');
    
        for (var i = 0; i < dotItems.length; i++) {
            if (dotItems[i].classList.contains('active')) {
            indexClicked = i;
            break;    
            } 
        }

        sliderItems[indexClicked].classList.add('visible');
        }); 
        
    }
      
});



