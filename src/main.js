import "./style.css";

//const para texto en negrita
const Title = "font-size: 20px; font-weight: bold; background-color: green";

//const para los géneros de música
const PopRock = "🎵 Pop Rock";
const Rock = "🎸 Rock";
const HardRock = "🤘 Hard Rock";
const Clasica = "🎼 Clásica";

//Title of the bands
console.log("Band's group", Title);

//Beatles
console.log("-Beatles")
console.log({
    name: "Beatles",
    age: 1960,
    active: "True",
    genre: `${PopRock}`
}
);

//Queen
console.log("-Queen")
console.log({
    name: "Queen",
    age: 1970,
    active: "False",
    genre: `${Rock}`
}
);

//AC DC
console.log("-AC DC")
console.log({
    name: "AC DC",
    age: 1973,
    active: "True",
    genre: `${HardRock}`
}
);

//Ludwig Van Beethoven
console.log("-Ludwig Van Beethoven")
console.log({
    name: "Ludwig Van Beethoven",
    age: 1770,
    active: "False",
    genre: `${Clasica}`
}
);

//The Rolling Stones
console.log("-The Rolling Stones")
console.log({
    name: "The Rolling Stones",
    age: 1962,
    active: "True",
    genre: `${Rock}`
}
);
