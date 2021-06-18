import { UUIDV4 } from 'sequelize';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize';

export interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  active: boolean;
}


export class User extends Model<UserProps>{
  public id!: string;
  public name!: string;
  public email!: string;
  public password?: string;
  public phone?: number;
  public active!: boolean;

  };
  User.init({
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    phone:{
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: null,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'users'
  });