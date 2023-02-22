const newjoke =document.getElementById('joke');
const nextJoke =document.getElementById('nextJoke');

// promises 
// async 
// fetch 

    const genetaredJokes = ()=>{
        const setHeaders ={
            headers : {
             Accept : "Application/json"
            }
         }
        fetch('https://icanhazdadjoke.com', setHeaders)
        .then((res)=>res.json())
        .then((data)=>newjoke.innerHTML=data.joke)
        .catch((error)=>{
            console.log(error);
        })
    }



nextJoke.addEventListener('click',genetaredJokes);
genetaredJokes();