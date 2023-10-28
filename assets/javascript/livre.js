const session = localStorage.sessionLibrairie;
if (!session) window.location.href = "./connecter.html";
console.log(JSON.parse(session).token);
let formulaire = document.querySelector("form");
console.log(formulaire);
formulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  const allInput = event.target.querySelectorAll("input");
  const formData = new FormData();
  allInput.forEach((input) => {
    console.log(input.files);
    if (input.files) {
      formData.append(input.name, input.files[0]);
    } else {
      formData.append(input.name, input.value);
    }
  });
  fetch("https://blog-7s1h.onrender.com/api/livre/creer", {
    method: "POST",
    body: formData,
    headers: { Authorization: JSON.parse(session).token }
  })
  .then((res) => res.json())
  .then((succes) =>{
      if(succes.status){
          alert(succes.message);
          allInput.forEach(input=>input.value="");
      }else{
          alert(succes.message)
      }
  });
});
