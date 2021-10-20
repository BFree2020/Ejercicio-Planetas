let nombrePlanetas = Array ('Tierra','Marte','Jupiter')
let distancia =[5,3,'67']
const tamaño =[45,50,60]

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

let i=0;
while(i<= nombrePlanetas.length - 1){
    console.log(i)
    console.log(nombrePlanetas[i]);
    i=i+1
}

for (let index = 0; index < nombrePlanetas.length; index++) {
    console.log(nombrePlanetas[index]);
}

for (const key in Object) {
    if(Object.hasOwnproperty.call(object, key)) {
        const element = object[key];
    }
}

for (const key in nombrePlanetas) {
    console.log(nombrePlanetas[key])
}

//Recorrer planeta
for (const planeta of nombrePlanetas) {
    console.log(planeta)
}


//operador de igualdad
for(const key in distancia) {
    if(distancia[key] === '5'){
        console.log('Se encontró la distancia')}
        else{
            console.log('No se encontró la distancia')
        }
    }

    nombrePlanetas.forEach((value,index,array)=> {
        console.log('planeta', index, value)
    });
    nombrePlanetas.map((planetas, index)=> {
        return(
        console.log(`El planeta ${planetas} tiene tamaño de : ${tamaño[index]}`)
    )});
    
    let resultadoMap= nombrePlanetas.map((planetas, index)=> {
        return(`El planeta ${planetas} tiene tamaño de : ${tamaño[index]}`)})
    console.log(resultadoMap)
    
