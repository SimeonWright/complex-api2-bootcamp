// document.querySelector('button').addEventListener('click', findPoke)

// const choice = document.querySelector('input').value
// const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

// function findPoke(){
//     console.log(choice)
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//          console.log(data.forms[0].name)
//          let choice = data.forms[0].name
//          fetch(`https://www.amiiboapi.com/api/amiibo/?name=${choice}`)
//          .then(res => res.json())
//          .then(data => {
//             console.log(data.amiibo[0].image)
//             document.querySelector(`img`).src = data.amiibo[0].imagew
//          })
//         .catch(err => {
//         console.log(`error ${err}`)
//         });
// })

document.querySelector('button').addEventListener('click', GetNasa)

function GetNasa(){
    let type = document.querySelector('input').value
    console.log(type)
    const url = `https://www.balldontlie.io/api/v1/players?search=${type}`
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.data[0].first_name
        
        let word = data.data[0].first_name
        fetch(`https://api.celebrityninjas.com/v1/search?name=${word}`,{
        method: "GET",
        headers: { "X-Api-Key": "VIRKOEzNHwvwRZ9SIhD5Bg==FkOR00OPqfQ19LjM"},
        })
        //  console.log(word)
         .then(res => res.json()) 
         .then(data => {
             console.log(word)
             console.log(data)
             document.querySelector('h3').innerText = data[0].net_worth
             // document.querySelector('h3').innerText = data.results[1].powerstats.speed
             // document.querySelector('img').src = data.results[1].image.url
        })   
    })
    
}
    
