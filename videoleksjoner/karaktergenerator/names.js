var firstnames = [{
        name: "Diana",
        gender: "F"
    },
    {
        name: "Irene",
        gender: "F"
    },
    {
        name: "Suzy",
        gender: "F"
    },
    {
        name: "Rita Carolina",
        gender: "F"
    },
    {
        name: "Christine",
        gender: "F"
    },
    {
        name: "Miley",
        gender: "F"
    },
    {
        name: "Hailey",
        gender: "F"
    },
    {
        name: "Penny",
        gender: "F"
    },
    {
        name: "Sweet Sue",
        gender: "F"
    },
    {
        name: "Liza",
        gender: "F"
    },
    {
        name: "Princess",
        gender: "F"
    },
    {
        name: "Judy Jane",
        gender: "F"
    },
    {
        name: "Natascha",
        gender: "F"
    },
    {
        name: "Sophie",
        gender: "F"
    },
    {
        name: "Adama",
        gender: "F"
    },
    {
        name: "Lady",
        gender: "F"
    },
    {
        name: "Justine",
        gender: "F"
    },
    {
        name: "Antonia",
        gender: "F"
    },
    {
        name: "Felizia",
        gender: "F"
    },
    {
        name: "Aja Donova",
        gender: "F"
    },
    {
        name: "Vabrava",
        gender: "F"
    },
    {
        name: "Doctor",
        gender: "F"
    },
    {
        name: "Dutchess",
        gender: "F"
    },
    {
        name: "Ebony",
        gender: "F"
    },
    {
        name: "Harmony",
        gender: "F"
    },
    {
        name: "Sicilia",
        gender: "F"
    },
    {
        name: "Frank",
        gender: "M"
    },
    {
        name: "King",
        gender: "M"
    },
    {
        name: "James",
        gender: "M"
    },
    {
        name: "D'Angelo",
        gender: "M"
    },
    {
        name: "Hans",
        gender: "M"
    },
    {
        name: "Piotr",
        gender: "M"
    },
    {
        name: "Gruben",
        gender: "M"
    },
    {
        name: "Duke",
        gender: "M"
    },
    {
        name: "Flavio",
        gender: "M"
    },
    {
        name: "Sarazen",
        gender: "M"
    },
    {
        name: "Big",
        gender: "M"
    },
    {
        name: "Helmüth",
        gender: "M"
    },
    {
        name: "Mustafa",
        gender: "M"
    },
    {
        name: "Georgios",
        gender: "M"
    },
    {
        name: "Caspar",
        gender: "M"
    },
    {
        name: "Sulley",
        gender: "M"
    },
    {
        name: "Leonard",
        gender: "M"
    },
    {
        name: "Stuart",
        gender: "M"
    },
    {
        name: "Bob",
        gender: "M"
    },
    {
        name: "Old man",
        gender: "M"
    },
    {
        name: "Lars",
        gender: "M"
    },
    {
        name: "Dieter",
        gender: "M"
    },
    {
        name: "Doctor",
        gender: "M"
    },
    {
        name: "Professor",
        gender: "M"
    }
];

var lastnames = [
    "Kartsinov",
    "Zoltan",
    "Mohammadi",
    "Ligov",
    "de Potrivec",
    "Lombardi",
    "Sinac",
    "van der Breit",
    "von Bischoven",
    "Zimmer",
    "Carpenter",
    "Cooper",
    "Brink",
    "Zestar Horvath",
    "de Frenkie",
    "var der Broomschtikk",
    "Potter",
    "Stagnatovic",
    "Kingsley",
    "Heart",
    "Olsson",
    "Lee",
    "Wong",
    "Barracudinovic",
    "Stalgmartz",
    "de Haar",
    "Löch",
    "de Gattuso",
    "Pinov",
    "Messin",
    "Piquet",
    "Rodriguez",
    "Baltonelli",
    "Luez",
    "Spinal",
    "Roth",
    "Flasch",
    "Harper",
    "Sol Garder",
    "Prötz",
    "los Gabos",
    "Sivert",
    "Jönsson",
    "Olsen",
    "Chavez",
    "Cannavaro",
    "Edmilson",
    "Hang",
    "Fowler",
    "Stoltz",
    "Xavier",
    "van der Toll",
    "Treschow",
    "Svensson",
    "de Javros",
    "Springer",
    "Hallbakken",
    "Müller"
];


let persons = [];
const maleImages = [];
const femaleImages = [];

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function generate(quantity, minage, maxage){
    for(let p = 0; p < quantity; p++){
        const person = {firstname: null, lastname: null, gender: null, gender: null, image: null};

        //Velge vilkårlig fornavn
        const randomIndex = getRandomInt(0, firstnames.length);
        const firstname = firstnames[randomIndex];
        firstnames.splice(randomIndex, 1)

        //Velge vilkårlig etternavn
        const lastname = lastnames[Math.floor(Math.random() * lastnames.length)]

        
        //Sette tilfeldig alder mellom 18 og 65
        
        let age = getRandomInt(minage, maxage);


        function randomImage(gender){
            let image = getRandomInt(1, 25)
            
             if(gender == "M"){
                if(maleImages.includes(image)) {
                    randomImage(gender);
                } else{
                    maleImages.push(image);
                    return image;
                }
            }
            if (gender == F){
                if(femaleImages.includes(image));
                randomImage(gender);
            } else{
                femaleImages.push(image);
                return image;
            }
        }



        console.log(age)
    }
}

generate(20, 18, 65)