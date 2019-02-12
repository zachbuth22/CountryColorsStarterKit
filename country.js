$(document).ready(
    function () {
        $("div").css({
            'background-color': 'blue'
        });
    });

class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    setColors() {

    }
}
var usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
var mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
var algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    var input = $("#CountryList option:selected").val();
    var country;

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

    $("#Color1").css("background-color", country.colors[0]);
    $("#Color2").css("background-color", country.colors[1]);
    $("#Color3").css("background-color", country.colors[2]);

    $("#CountryName").text(country.name);

}