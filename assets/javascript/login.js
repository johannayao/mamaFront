

const formulaire = document.querySelector("#formulaire");
 
formulaire.addEventListener("submit", (e)=>{
    e.preventDefault()
    const allInput = e.target.querySelectorAll("input");
    const  formData = new FormData();
    allInput.forEach(input=>formData.append(input.name, input.value));
    fetch("https://blog-7s1h.onrender.com/api/librairie/login",{
        method: "POST",
        body: new URLSearchParams(formData)
    })
    .then(res=> res.json())
    .then(succes =>{
        console.log(succes);
        if(succes.token){
            const data = {
                token: succes.token,
                expire: new Date().getMilliseconds()+4*3600*1000
            }
            localStorage.setItem("sessionLibrairie", JSON.stringify(data));
            window.location.href="./panierConnect.html"
        }else{
            alert("echoué")
        }
    })

})