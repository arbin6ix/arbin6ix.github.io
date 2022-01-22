// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function
(function()
{

    function DisplayHomePage()
    {
        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });
     
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }

    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
    }

    //named function option
    function Start()
     {

        console.log("App Started!!");

        switch(document.title)
        {
            case "Home": 
                DisplayHomePage();
                break;
            case "Our Products": 
                DisplayHomePage();
                break;
            case "Our Services": 
                DisplayHomePage();
                break;
            case "About Us": 
                DisplayHomePage();
                break;
            case "Contact Us": 
                DisplayHomePage();
                break;
        }

      
    }

    window.addEventListener("load", Start);



})();