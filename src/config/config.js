// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-04948a92c14322f155f40ee20dbf102a58ebc244.crxavvp2had5.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '_hV8fs1>[FM.*LR;%Lg-SSZeCrY5oF53'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}