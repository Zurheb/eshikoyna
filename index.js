const body = document.body;
const changeButton = document.querySelector('#btn');




changeButton.addEventListener('click', function () {
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        
    } else {
       
        body.classList.add('dark-mode');
        
    }
});

    

