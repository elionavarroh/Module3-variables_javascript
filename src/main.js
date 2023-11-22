import "./style.css";

//const para texto en negrita
const Title = "font-size: 20px; font-weight: bold; background-color: green";

//const para los géneros de música
const PopRock = "🎵 Pop Rock";
const Rock = "🎸 Rock";
const HardRock = "🤘 Hard Rock";
const Clasica = "🎼 Clásica";

//Title of the bands
console.log("Band's group");

//Beatles
const firstgroup = {Name: "Beatles", Age: 1960, Active: "True", Genre: `${PopRock}`};
console.log(`%c ${firstgroup.Name}`, Title, firstgroup);

//Queen
const secondgroup = {Name: "Queen", Age: 1970, Active: "False", Genre: `${Rock}`};
console.log(`%c ${secondgroup.Name}`, Title, secondgroup);

//AC DC
const thirdgroup = {Name: "AC DC", Age: 1973, Active: "True", Genre: `${HardRock}`};
console.log(`%c ${thirdgroup.Name}`, Title, thirdgroup);

//Ludwig Van Beethoven
const fordgroup = {Name: "Ludwig Van Beethoven", Age: 1770, Active: "False", Genre: `${Clasica}`};
console.log(`%c ${fordgroup.Name}`, Title, fordgroup);

//The Rolling Stones
const fivegroup = {Name: "The Rolling Stones", Age: 1962, Active: "True", Genre: `${Rock}`};
console.log(`%c ${fivegroup.Name}`, Title, fivegroup);
