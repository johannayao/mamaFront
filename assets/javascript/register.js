let formulaire = document.getElementsByTagName("form")[0];
// // console.log(formulaire)
 formulaire.addEventListener("submit", async (e) => {
    e.preventDefault();
    
   let input = document.querySelectorAll("input");
   console.log(input);
   let monObjet = {};
//    console.log(monObjet);
   input.forEach((element, indice) => {
     console.log(element.name, element.value);
     monObjet[element.name] = element.value;
   });

   let message = document.querySelector(".alerte")

   if (monObjet.password !== monObjet.passwordC) {
     return alert("les mot de pass ne sont pas conforme")
     
   }
  
   console.log(monObjet);

  
    fetch("https://johlibrairie.onrender.com/api/user/signup", {
     method: "POST",
     body: JSON.stringify(monObjet),
     headers: {"content-type": "application/json"}
   })
   .then(res=> res.json())
    .then(succes =>{
      console.log(succes);
         if(succes.newUser){
             alert("inscription reuisiit a reuissir")
             setTimeout(() =>{
               window.location.href = "./inscription.html";
             },[2000])
         }else{
             alert("echoué")
         }
    })
  
 });