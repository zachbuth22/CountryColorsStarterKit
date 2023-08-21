class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
let italy = new Country("Italy", "Italian", "Ciao mondo", ["green", "white", "red"]);
let germany = new Country("Germany", "German", "Hallo Welt", ["black","red", "gold"])

function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
  
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Italy") {
        country = italy;
    }
    else if (input === "Germany") {
        country = germany;
    }
    DisplayColors(country);
}

function DisplayColors(c){
    let nameNode = document.querySelector("#CountryName")   
    nameNode.innerText = c.name;
    let langNode = document.querySelector("#OfficialLanguage")   
    langNode.innerText = c.lang;
    let greetingNode = document.querySelector("#HelloWorld")   
    greetingNode.innerText = c.greeting;
    document.querySelector("#color1").style.backgroundColor = c.colors[0];
    document.querySelector("#color2").style.backgroundColor = c.colors[1];
    document.querySelector("#color3").style.backgroundColor = c.colors[2];
   
}




