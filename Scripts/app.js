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

        //Step 1 - get reference to an entry point(s) (insertion / deletion)
         let MainContent = document.getElementsByTagName("main")[0];
         let DocumentBody = document.body;
        //Step 2 - Create a HTML Element in memory
         let MainParagraph = document.createElement("p");
         let Article = document.createElement("article");
         let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;
        //Step 3 - Configure new Element
         MainParagraph.setAttribute("id", "MainParagraph");
         MainParagraph.setAttribute("class", "mt-3");
         let FirstString = "This is";
         let SecondString = `${FirstString} the Main Paragraph`;
         MainParagraph.textContent = SecondString;
         Article.setAttribute("class", "container");
        //Step 4 - perform insertion / deletion
        //example of insert after (append)
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
     /*    DocumentBody.innerHTML = `
            <div class="container">
            <h1 class="display-1">Hello World!</h1>
            <p class="mt-5">and... what do you think of this</p>
            </div>
        `; */
        //example of insert before
        //MainContent.before(MainParagraph);
        //example of deletion
        //document.getElementById("AboutUsButton").remove();
        //AboutUsButton.remove();
        //ES6 and HTML5 => Template Strings => "Super Strings"
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