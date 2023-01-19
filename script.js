const btnE1=document.getElementById("btn")
const jokeE1=document.getElementById("joke");

const apikey="SJXRI+AMVxEhlmtd1OMfwg==Hzw7UggrPPYxcEtP"


const options={
    method: "GET",
    headers:{
        "X-Api-key": apikey
    },
};


const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"



   async function getJoke(){

try {
    jokeE1.innerText="Updating...";
    btnE1.disabled=true;
    btnE1.innerText="Loading..."
       const response=await fetch(apiURL,options)
       const data=await response.json()
       //console.log(data[0].joke);
       btnE1.disabled=false;
       btnE1.innerText="Tell Me a Joke"

       jokeE1.innerText=data[0].joke;
    
} catch (error) {
    jokeE1.innerText="an error occuor,try again later";
    btnE1.disabled=false;
    btnE1.innerText="Tell Me a Joke"

    console.log("error");
    
}



    
    }



btnE1.addEventListener("click",getJoke)