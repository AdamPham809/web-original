// IIFE --> Immediately invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
        let deleteButton = document.querySelectorAll('.btn-danger');
    for(button of deleteButton)
    {
        button.addEventListener('click',(event)=>{
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
                window.location.assign('/book-list');
            }
        });
    }
    }
    window.addEventListener("load", Start);
    
})();