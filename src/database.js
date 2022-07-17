import { Pool } from 'pg'


export const pool=new Pool({
    host:'database-1.cukrbqlzgans.us-east-1.rds.amazonaws.com',
    user:'postgres',
    password:'comandantes',
    database:'bdcomandantes',
    port:5432,
    ssl:{rejectUnauthorized:false}
});