// Ejercicio Map
let almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'tacos', postre: 'helado'},
    {principal: 'pizza', postre: 'galletas'},
    {principal: 'sushi', postre: 'quesillo'},
];

// Forma Tradicional
let platoPrincipal = [];

for(let i = 0; i < almuerzos.length; i++){
    platoPrincipal.push(almuerzos[i].principal);
}

console.log(platoPrincipal);

// Con MAP
let platosPrincipales = almuerzos.map((almuerzo)=>{
    return almuerzo.principal;
});

console.log(platosPrincipales);