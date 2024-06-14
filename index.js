/* 
getAll(): devuelve todas las pizzas presentes en la tabla "Pizza" de la base de datos
insert(pizza): recibe un objeto con todas las propiedades de una pizza (menos el id) y la inserta en la base de datos
update(pizza): recibe un objeto con el id (obligatorio) y los campos que se quieren actualizar y modifica la pizza correspondiente en la base de datos
deleteById(id): recibe el id de una pizza y la elimina en la base de datos 
*/

import mysql2 from "mysql2/promise"

const connection = await mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'ejercitacion pizza'
})

async function getAll(){
    return await connection.query("SELECT * from pizza;"),[0];
}

async function insert(pizza){
    return await connection.query("INSERT INTO (nombre, libreGluten, importe, description) VALUES (?,?,?,?);", [pizza.nombre, pizza.libreGluten, pizza.importe, pizza.description])
}

async function update(pizza){
    if(!pizza.id){
        console.log("Se necesita el id para modificar una pizza");
        return;
    }
    return await connection.query("UPDATE pizza SET nombre=?, libreGluten=?, importe=?, description=? WHERE id=?;", [pizza.nombre, pizza.libreGluten, pizza.importe, pizza.description, pizza.id])
}

async function deleteById(id){
    if(!pizza.id){
        console.log("Se necesita el id para eliminar una pizza");
        return;
    }
    return await connection.query("DELETE FROM pizza WHERE id=?;",[pizza.id])
}
