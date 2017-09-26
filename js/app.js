
let first_text_field = document.getElementById("name");
let select_id = document.getElementById("title");
let otherfieldtext = document.getElementById("otherfieldtext");
let user_selected_design = document.getElementById("design");
let user_theme_colour = document.getElementById("color");
let theme_colour_all_options = document.getElementById("colors-js-puns");
let activities = document.querySelector(".activities");
let user_payment = document.querySelector('#payment');
let paypal = document.querySelector('#paypal');
let bitcoin = document.querySelector('#bitcoin');
let credit_card = document.querySelector('#credit-card');
const form = document.querySelector("form");
const submitBtn = document.querySelector("button");
const email = document.querySelector("#mail");
const main = document.querySelector('input[name="all"]'); 
const jsFrameworks = document.querySelector('input[name="js-frameworks"]');
const jsLibraries = document.querySelector('input[name="js-libs"]');
const express = document.querySelector('input[name="express"]');
const nodeJS = document.querySelector('input[name="node"]');
const buildTools = document.querySelector('input[name="build-tools"]');
const npm = document.querySelector('input[name="npm"]');
const creditcard_number = document.querySelector("#cc-num");
const zip= document.querySelector("#zip");
const cvv = document.querySelector("#cvv");


//get the focus of the first text field when form loads
first_text_field.focus();

//to program credit card as first and default payment option
user_payment.options.selectedIndex = 1;
paypal.style.display = "none";
bitcoin.style.display = "none";


//To hide other payment options for example if Credit card is selected Paypal and Bitcoin will be disabled and vice versa
user_payment.addEventListener('change',()=>{
    
    let payment_options = user_payment.options[user_payment.selectedIndex].value;
    
    if(payment_options =='paypal')
        {
          paypal.style.display = "block"; 
            credit_card.style.display = "none";
            bitcoin.style.display = "none";
        }
    else
        {
          paypal.style.display = "none";  
        }
    if(payment_options =='credit card')
        {
          paypal.style.display = "none"; 
            credit_card.style.display = "block";
            bitcoin.style.display = "none";
        }
    else
        {
          credit_card.style.display = "none";  
        }
    if(payment_options =='bitcoin')
        {
          paypal.style.display = "none"; 
            credit_card.style.display = "none";
            bitcoin.style.display = "block";
        }
    else
        {
          bitcoin.style.display = "none";  
        }
});


//all colour options disabled or hide(it will appear when any of the theme selected)
theme_colour_all_options.style.display = "none";
//other field option disabled by default appear when Job role selected as Other
otherfieldtext.style.display = "none";


//=============Function to hide and display colour based on specific theme (js puns OR heart js)==========

function hidedisplaycolor(design_type)
{
 for(i=0; i < user_theme_colour.length ; i ++)
    if(design_type == 'js puns')
        {
        theme_colour_all_options.style.display = "block";
         user_theme_colour.innerHTML = '<option value="cornflowerblue">Cornflower Blue</option>' +
    '<option value="darkslategrey">Dark Slate Grey</option>' +
    '<option value="gold">Gold</option>';
            
        }
    
    if(design_type == 'heart js')
        {
            theme_colour_all_options.style.display = "block";
            user_theme_colour.innerHTML = '<option value="tomato">Tomato</option>' +
    '<option value="steelblue">Steel Blue</option>' +
    '<option value="dimgrey">Dim Grey</option>';
        }       
           
};

//Event Handler for Job role and display other field text when Job role Other is selected
           
select_id.addEventListener('change',()=>{

   let select_id_name = select_id.options[select_id.selectedIndex].value;
   if(select_id_name == 'other')
       {
           
           otherfieldtext.style.display = 'block';
           
       }
    else
        {
            otherfieldtext.style.display = 'none';
        }
});


//Event Handler to display colour based on specific theme selected **********This Event Handler Used hidedisplaycolor Function *****************

user_selected_design.addEventListener('change', ()=> {
    
    let design_type = user_selected_design.options[user_selected_design.selectedIndex].value;
    theme_colour_all_options.style.display = "none";
    if (design_type =='js puns')
        {
            
            hidedisplaycolor(design_type);
        }
    if(design_type == 'heart js' )
            {
                hidedisplaycolor(design_type);
            }

});


//To calculate Total based on the number of event selected

//Display Total = 0

let Total = 0
let div = document.createElement('div');
div.innerHTML = '<h3>' + 'Total : ' + Total + '</h3>';
activities.appendChild(div);

//calculate total based on the number of event selected

activities.addEventListener("change", (e) => { 
            
            let conference_name  = e.target.getAttribute('name'); 
            if(e.target.checked == true){
                
                if (conference_name == 'all' && main.checked)
                    {
                        Total = Total + 200;
                        div.innerHTML = '<h3>' + 'Total : ' + Total + '</h3>';
                        activities.appendChild(div);  
                    }
                    if (conference_name != 'all')
                        {
                        Total = Total + 100;
                        div.innerHTML = '<h3>' + 'Total : ' + Total + '</h3>';
                        activities.appendChild(div);  
                    } 
            }
                if(e.target.checked == false)
                    
                    if(conference_name == 'all') {
                        Total = Total - 200;
                        div.innerHTML = '<h3>' + 'Total : ' + Total + '</h3>';
                        activities.appendChild(div);  
                       
                       }
                       else
                    
                    {
                        Total = Total - 100;
                        div.innerHTML = '<h3>' + 'Total : ' + Total + '</h3>';
                        activities.appendChild(div);  
                    }
                 
                
    
        
    //9am-12pm
		 
        //Validating that No two conflicting timing events selected by user
        
        if(jsFrameworks.checked)
             {
                express.disabled = true; 
                buildTools.disabled = true; 
             }
        else if (express.checked)
            {
                jsFrameworks.disabled = true;
                buildTools.disabled = true;
            }
                
            
        else if (buildTools.checked)
            {
                jsFrameworks.disabled = true;
                express.disabled = true;
                
            }
        else
            {
                
                express.disabled = false;
                buildTools.disabled = false; 
                jsFrameworks.disabled = false;
            }
    
    
    //1pm-4pm
    
            if(jsLibraries.checked)
             {
                
                nodeJS.disabled = true; 
                npm.disabled = true;
             }
        else if (nodeJS.checked)
            {
                jsLibraries.disabled = true;
                npm.disabled = true;
            }
                
            
        else if (npm.checked)
            {
                jsLibraries.disabled = true;
                nodeJS.disabled = true; 
                
            }
        else
            {
                
                jsLibraries.disabled = false;
                nodeJS.disabled = false; 
                npm.disabled = false;
            }  
		 
	});



/*============Validation Functions(Name,Email,Payment Options and Credit Card)================*/


//========Name Validation==================

function checkname(name)
{
    if(name.value==0)
        {   
            event.preventDefault();
            email.style.borderColor = "red";
            const label = document.querySelector('[for="name"]');
            const span = document.createElement("span");
            span.textContent = "Field is empty";
            span.style.color = "red";
            span.className = 'error';
            label.appendChild(span);
        } 
};



//=============Email Validation============
function checkemail(email)
{
 
    let user_email = email.value;
    const atpos = user_email.indexOf("@");
    const dotpos = user_email.lastIndexOf(".");
    if (user_email == 0) {
            event.preventDefault();
            const label = document.querySelector('[for="mail"]');
            const span = document.createElement("span");
            span.textContent = "you missed your email!";
            span.style.color = "red";
            span.className = 'error';
            label.appendChild(span);
        
    } 
    else if (atpos<1){
            event.preventDefault();
            const label = document.querySelector('[for="mail"]');
            const span = document.createElement("span");
            span.textContent = "please include an '@' ";
            span.style.color = "red";
            span.className = 'error';
            label.appendChild(span);
    }
    else if (dotpos<atpos+2){
            event.preventDefault();
            const label = document.querySelector('[for="mail"]');
            const span = document.createElement("span");
            span.textContent = "Please enter a part followning '@' ";
            span.style.color = "red";
            span.className = 'error';
            label.appendChild(span);    
    }
    else if (dotpos+2>=user_email.length)
        {
            event.preventDefault();
            const label = document.querySelector('[for="mail"]');
            const span = document.createElement("span");
            span.textContent = "text after dot is missing";
            span.style.color = "red";
            span.className = 'error';
            label.appendChild(span);    
        }
    
};


//============Credit Card Validation===========

function checkcreditcard(creditcard_number,zip,cvv)
{
    if(isNaN(creditcard_number.value))
                        {
                            event.preventDefault();
                            console.log("Hi there");
                            const label = document.querySelector('[for="cc-num"]');
                            const span = document.createElement("span");
                            span.innerHTML =  "Invalid Number";
                            span.style.color = "red";
                            span.className = 'error';
                            label.appendChild(span);  
                        }
                    if (creditcard_number.value.length <13 || creditcard_number.value.length > 16)
                                {
                                    event.preventDefault();
                                    const label = document.querySelector('[for="cc-num"]');
                                    const span = document.createElement("span");
                                    span.innerHTML =  "Invalid Number Range";
                                    span.style.color = "red";
                                    span.className = 'error';
                                    label.appendChild(span);  
                                }
                    if ((isNaN(zip.value)) || (zip.value.length != 5))
                        {
                                    event.preventDefault();
                                    const label = document.querySelector('[for="zip"]');
                                    const span = document.createElement("span");
                                    span.innerHTML =  "Invalid";
                                    span.style.color = "red";
                                    span.className = 'error';
                                    label.appendChild(span);  
                        }
                    if ((isNaN(cvv.value)) || (cvv.value.length != 3))
                        {
                                    event.preventDefault();
                                    const label = document.querySelector('[for="cvv"]');
                                    const span = document.createElement("span");
                                    span.innerHTML =  "Invalid";
                                    span.style.color = "red";
                                    span.className = 'error';   
                                    label.appendChild(span);   
                        }
    
}




form.addEventListener("keyup",(event)=>{
    
    //removing previous errors
    const error = document.querySelectorAll(".error");

        error.forEach(function(element) {
            element.remove();
        });
    
    //checking email,name and Creditcardinformtion on runtime
    checkname(first_text_field);
    checkemail(email);
    checkcreditcard(creditcard_number,zip,cvv);  
});


form.addEventListener("submit", (event) => {
    
    
        //removing previous errors
        const error = document.querySelectorAll(".error");

        error.forEach(function(element) {
            element.remove();
        });
    
        //checking email,name,creditcard information on runtime
        checkname(first_text_field);
        checkemail(email);

    //validate form for atleast one of the event needs to be selected before submission of the form
    
    if (!(main.checked || npm.checked || nodeJS.checked || jsLibraries.checked || buildTools.checked || express.checked || jsFrameworks.checked))
    
        {
            event.preventDefault();
            const span = document.createElement("span");
            span.textContent = "Atleast one of the event needs to be selected";
            span.style.color = "red";
            span.className = 'error';
            activities.appendChild(span); 
        }
    
    //Validate creditcard information is correct before submitting the form
    
    if(user_payment.options[user_payment.selectedIndex].value =='credit card')
        
        {
            checkcreditcard(creditcard_number,zip,cvv);  
        }
    
                    
});


