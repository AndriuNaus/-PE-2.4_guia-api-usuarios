import pool from  "../db/pool.js"

//crud de usuarios

//metodo para obtener todos

export const findAll= async ()=>{
    const [rows]= await pool.execute('SELECT * FROM users ORDER BY name'

    );
    return rows;

}
//obtener por id 
export const findById = async (id) =>{
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}

//crear un usuario

export const createUser = async ({name,email})=>{
    const [result] = await pool.execute('INSERT INTO users VALUES (?,?)',[name,email]);
    return findById (result.insertId);


}
//update 
export const updateUser = async(id,{name,email})=>{
    const fields =[];
    const VALUES=[];

    if (name !==undefined) {fields.push('name=?'); values.push(name);}
    //fields =['name= ?']
    //fields=['Çharlie']

    //ambas condiciones
    //fields=['Name = ?'.'email=?']
    //values=['charlie,''charile@gmail.com']
    if (email !==undefined) {fields.push('email=?'); values.push(email);}
    // == compara si los valores son iguales independiente del tipo de dato 
    //=== comparacion exacta,valida el tipo de dato 
    
    if(fields.length === 0)return findById(id);
    values.push(id);
    //values= ['Charlie','charlie@gmail.com', 12]
    await pool.execute(`UPDATE users set ${fields.join(',')} where id = ?`,)
    return findById (id);
}
//metodo delete 
export const removeUser =(id) => {
    const[resullt] = pool.execute ('Delete FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0 ;

}

