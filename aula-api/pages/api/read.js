// pages/api/read.js
import { createConnection } from 'mysql2/promise';

// Função para conectar no MySQL
async function  connectDatabase() {
    return createConnection( {
      port: 3309, // só se a porta for diferente de 3306
      host: 'localhost',
      user: 'root',
      password: '$Objetivo*15',
      database: 'teste-api',
    });
}

export default async function handler(req, res) {
    if (req.method !== 'GET'){
      return res.status(405).json({error: 'Método não permitido' });
    }

    try {
      // Conexão no MySQL
      const connection = await connectDatabase();

      // Execução da query para receber dados da tabela "User de id = 4"
      //const [rows] = await connection.execute('SELECT * FROM users WHERE id = 4', );

      // Este comando verifica tudo que tem na tabela users
      const [rows] = await connection.execute("SELECT * FROM users");


    // Verificar se o usuário existe
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.'});
    }
    
   // Fechar a conexão
   await connection.end();

   // Resposta com os dados do usuário
   res.status(200).json(rows);
 } catch (error) {
   console.error('Erro de conexão com o banco:' , error);
   res.status(500).json({ error: 'Erro interno de servidor'}); 
 }
}
