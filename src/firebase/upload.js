
// una vez pueda subir el json a firestor (hay que resolver assert), borrar de package.json "type": "module"


import MOCK_DATA from '../data/MOCK_DATA.json' // assert { type: 'json'}
import { db } from './config.json'
import { addDoc, collection } from 'firebase/firestore'

console.log(MOCK_DATA)

const data = MOCK_DATA.map((item) => {
    delete item.id
    return item
})

const productosRef = collection(db, 'productos')

data.forEach((item) => {
    addDoc(productosRef, item)
})