// let form1=document.getElementById("form1");
// let form2=document.getElementById("form2");
// let form3=document.getElementById("form3");
// let h2=document.getElementsByClassName("h2-1")


let bt1=document.getElementById("bt1");
let bt2=document.getElementById("bt2");
let bt3=document.getElementById("bt3");

let inputs = document.querySelectorAll("#form1 input")
let inputs2 = document.querySelectorAll("#form2 input")
let inputs3 = document.querySelectorAll("#form3 input")

// console.log(inputs3)
// console.log(h2)



// form1.addEventListener("click", function(){
//     form1.classList.replace("passive","active")
//     h2[0].classList.replace("passive","active")
    
    
//     form2.classList.replace("active","passive")
//     h2[1].classList.replace("active","passive")
//     form3.classList.replace("active","passive")
//     h2[2].classList.replace("active","passive")
// });
// form2.addEventListener("click", function(){
//     form2.classList.replace("passive","active")
//      h2[1].classList.replace("passive","active")
     
     
//     form1.classList.replace("active","passive")
//      h2[0].classList.replace("active","passive")
//     form3.classList.replace("active","passive")
//      h2[2].classList.replace("active","passive")
// });
// form3.addEventListener("click", function(){
//     form3.classList.replace("passive","active")
//      h2[2].classList.replace("passive","active")
     
     
//     form2.classList.replace("active","passive")
//      h2[1].classList.replace("active","passive")
//     form1.classList.replace("active","passive")
//      h2[0].classList.replace("active","passive")
// });

// bt1.addEventListener("click", function(){

//  form2.classList.replace("passive","active")
//      h2[1].classList.replace("passive","active")
     
     
//     form1.classList.replace("active","passive")
//      h2[0].classList.replace("active","passive")
//     form3.classList.replace("active","passive")
//      h2[2].classList.replace("active","passive")
     
//      for(let i=0;i<4;i++){
//      inputs[i].setAttribute("readonly","readonly")
// }
// });

// bt2.addEventListener("click", function(){
//     form3.classList.replace("passive","active")
//      h2[2].classList.replace("passive","active")
     
     
//     form2.classList.replace("active","passive")
//      h2[1].classList.replace("active","passive")
//     form1.classList.replace("active","passive")
//      h2[0].classList.replace("active","passive")
     
       
//      for(let i=0;i<12;i++){
//      inputs2[i].setAttribute("disabled","true")
// }
   
// });

// bt3.addEventListener("click", function(){
//     form1.classList.replace("passive","active")
//      h2[0].classList.replace("passive","active")
     
     
//     form2.classList.replace("active","passive")
//      h2[1].classList.replace("active","passive")
//     form3.classList.replace("active","passive")
//      h2[2].classList.replace("active","passive")
     
//        for(let i=0;i<9;i++){
//      inputs3[i].setAttribute("disabled","true")
// }
   
// });


let p = document.querySelectorAll("p")

let submitButton1 = document.getElementById("input1")
let submitButton2 = document.getElementById("input2")
let submitButton3 = document.getElementById("input3")

let form1 = document.getElementById("form1")

let form2 = document.getElementById("form2")


// Utilisateur
let util=document.getElementById("util")
// email
let email=document.getElementById("email")

// password
let psw1=document.getElementById("psw1")
let psw2=document.getElementById("psw2")

// PARTIE 2 du form
let radios= document.querySelectorAll("#grid1 input")
let radios2= document.querySelectorAll("#grid2 input")


// contient les deux chanps de texte
let errorResponse=document.querySelectorAll("#form2 p") 
console.log(p)


form1.addEventListener("submit", function(event){
    event.preventDefault(); // stopper la soumission auto
    
  let formOK= true
  
 
  email.classList.remove("erreur")
  util.classList.remove("erreur")
  psw1.classList.remove("erreur")
  psw2.classList.remove("erreur")
  
  for(let i=0;i<3;i++){
   
   p[i].innerHTML=""
   p[i].classList.remove("erreur")
  }
  
  
  
  if(util.value == ""){
   console.log(p[0])
   p[0].innerHTML="Veuillez renter un nom"
   util.classList.add("erreur")
   formOK=false
   
  }
  
  
  
   else if (email.value.indexOf("@", 0) < 0)                 
    { 
        email.classList.add("erreur")
        p[1].innerHTML="Mettez une adresse email valide.";
       
        formOK=false
    }    
   else if (email.value.indexOf(".", 0) < 0)                 
    { 
         email.classList.add("erreur")
        p[1].innerHTML="Mettez une adresse email valide."
         
        formOK=false
    }    
 
  
 else if(psw1.value== "" ){
    
    psw1.classList.add("erreur")
   p[2].innerHTML="Rentrer une valeur"
   formOK=false
   
  }
  else if(psw2.value== "" ){
    psw2.classList.add("erreur")
     
   p[2].innerHTML="Rentrer une valeur"
   formOK=false
   
  }
  
    
  else if(psw1.value!= psw2.value ){
    psw1.classList.add("erreur")
    psw2.classList.add("erreur")
     
   p[2].innerHTML="Les mots de passes ne correspondent pas"
   formOK=false
   
  }
   else if(formOK==true){
   event.target.submit();
   }
});


form2.addEventListener("submit",function(event){
 
 event.preventDefault();
 
 
 let formOK1=false
 let formOK2=false
 errorResponse[0].innerHTML=""
 errorResponse[1].innerHTML=""
 
 for(let i=0;i<radios.length;i++){
  
  if(radios[i].checked==true){
   
   formOK1=true
  }
 }
 
  for(let i=0;i<radios2.length;i++){
  
  if(radios2[i].checked==true){
   
   formOK2=true
  }
 }
 
 
 
 // test si le form est ok pour etre submit 
 
 
 if(formOK1==false){
  
  errorResponse[0].innerHTML="Veuillez choisir une valeur"
  
 }
  
 if(formOK2==false){
  
  errorResponse[1].innerHTML="Veuillez choisir une valeur"
  
 }
 
 
 if(formOK1==true && formOK2==true){
  
  event.target.submit();
 }

 
 
})
