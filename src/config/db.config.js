import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()
const sequelize = new Sequelize(process.env.PGDATABASE,process.env.PGUSER,process.env.PGPASSWORD,{
    dialect:'postgres',
    host:process.env.PGHOST
})

console.log(sequelize)

export default sequelize