const session = localStorage.sessionLibrairie;


fetch("https://blog-7s1h.onrender.com/api/livre/getAll")
  .then((res) => res.json())
  .then((succes) => {
    console.log(succes);
    const content = document.querySelector("#content");
    console.log(content);
    if (succes.data.length) {
      succes.data.forEach((element) => {
        content.innerHTML += `<div class="bix">
            <div class="images"><img src="${element.image}" class="imgs" alt=""></div>
            <div class="texteo">
              <p class="lili">${element.titre}</p>
              <p class="nono">${element.auteur}</p>
            </div>
            
          </div>`;
      });
    }
});
