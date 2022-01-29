// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function
(function()
{

    function DisplayHome()
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
        console.log("Contact Us Page");

        let sendButton = document.getElementById("sendButton");
        let subcribeCheckbox = document.getElementById("subcribeCheckbox");


        sendButton.addEventListener("click", function()
        {

            if(subscribeCheckbox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0,1) + Date.now();
                    
                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");
        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");

            let data = ""; // data container -> add deserialize data from localStorage

            let keys = Object.keys(localStorage); //returns a string array

            let index = 1; //counts how many keys
            
            //for every key in the keys array (collection), loop
            for (const key of keys)
            {
                let contactData = localStorage.getItem(key); //get localStorage data value related to the key

                let contact = new Contact(); //create a new empty contact object
                contact.deserialize(contactData); 

                //inject a repeatable row into the contactList
                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;

                index++;
            }

            contactList.innerHTML = data;
        }
    }

    //named function option
    function Start()
     {

        console.log("App Started!!");

        switch (document.title) {
          case "Home":
            DisplayHome();
            break;
          case "Our Products":
            DisplayProductsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "ContactList":
            DisplayContactListPage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
        }

      
    }

    window.addEventListener("load", Start);



})();