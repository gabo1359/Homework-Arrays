/*
1) Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados, cuantos están desaprobandos teniendo en cuenta
que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".

2) Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.

3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
la nueva nota de los alumnos.
*/

const alumnos = [
    {
      nombre: 'Juan',
      carrera: 'Biología',
      nota: 16
    },
    {
      nombre: 'Jose',
      carrera: 'Enfermero',
      nota: 10
    },
      {
      nombre: 'Luis',
      carrera: 'Policía',
      nota: 07
    }
    ,
      {
      nombre: 'Maria',
      carrera: 'Secretariado',
      nota: 10
    },
    {
      nombre: 'Hugo',
      carrera: 'Enfermero',
      nota: 15
    },
      {
      nombre: 'Rosa',
      carrera: 'Enfermero',
      nota: 12
    }
    ,
      {
      nombre: 'Luisa',
      carrera: 'Biología',
      nota: 18
    }
  ]

//   Execise 1

console.log("\t***** Exercise 1 *****")

let approvedCount = 0
let approvedSum = 0
let disapprovedCount = 0
let disapprovedSum = 0
let totalCount = 0
let totalSum = 0

alumnos.forEach(({nombre, carrera, nota}, index) => {
    if (nota >= 13) {
        approvedCount += 1
        approvedSum += nota
    } else {
        disapprovedCount += 1
        disapprovedSum += nota
    }
    totalCount += 1
    totalSum += nota
    if (index % 2 == 0) {
        console.log(`My name is ${nombre} and I am studying ${carrera}`)
    }
})

console.log(`Total approved: ${approvedCount}`)
console.log(`Approved average: ${(approvedSum / approvedCount).toFixed(2)}`)
console.log(`Total disapproved: ${disapprovedCount}`)
console.log(`Disapproved average: ${(disapprovedSum / disapprovedCount).toFixed(2)}`)
console.log(`Total average: ${(totalSum / totalCount).toFixed(2)}`)

// Exercise 2

console.log("\n")
console.log("\t***** Exercise 2 *****")

let names = []
const lessThan13 = alumnos.filter(({nota, nombre}) => nota < 13)
lessThan13.forEach(({nombre}) => names.push(nombre))
console.log("Students with a score less than 13:")
console.log(names)

//   Execise 3

console.log("\n")
console.log("\t***** Exercise 3 *****")

console.log("The new scores are:")
const newScores = alumnos.map(({nombre, nota}) => `${nombre}: ${nota * 3 / 2}`)
console.log(newScores)