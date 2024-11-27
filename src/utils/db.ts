// src/utils/db.ts
import { Sequelize } from 'sequelize';

// Define the connection string
const connectionString =
  "mssql://your_username:your_password@DESKTOP-Q854V38/SQLEXPRESS/your_database_name";

const sequelize = new Sequelize(connectionString, {
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false, // Use true for Azure or production environments
    },
  },
});

// Define the RegisteredUser model
export const RegisteredUser = sequelize.define('RegisteredUser', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  confirmPassword: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Define the UserProfile model
export const UserProfile = sequelize.define('UserProfile', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: RegisteredUser,
      key: 'id',
    },
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  religion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  occupation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

// Synchronize the database and models
sequelize
  .sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

export default sequelize;
