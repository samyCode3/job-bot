import { sequelize } from "../config/databaseConfig";
import { Sequelize, Model, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Optional } from "sequelize";
import { AccountAttributeInterface } from "../types/index.interface";
import { hash_data } from "../utils/bcrypt";
import { Job, JobId } from "./jobInfo";
import { JOBENUM, ROLE } from "../types/enums/enum";


export type AccountId = "id"
export type AccountPk= Account[AccountId]
export type AccountAttributes = 'id' | 'email' | 'fullname' | 'role' | 'job_type' | 'password' | 'username' | 'is_email_verified'
export type AccountCreationAttribute = Optional<AccountAttributeInterface, AccountAttributes>

export class Account extends Model<AccountAttributeInterface, AccountCreationAttribute> implements AccountAttributeInterface {
    id!:number;
    email!:string;
    fullname!:string;
    password!:string;
    username!:string;
    is_email_verified!:boolean;
    role : "USER" | "EMPLOYER" | "ADMIN";
    job_type : "JOB SEARCH" | "EMPLOYING";
    getJobInfo!: HasOneGetAssociationMixin<Job>;
    setJobInfo!: HasOneSetAssociationMixin<Job, JobId>;
    createJob!:  HasOneCreateAssociationMixin<Job>

} 
Account.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
   fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role : {
       type :DataTypes.ENUM("USER", "EMPLOYER", "ADMIN"),
       defaultValue: "USER"
    },
    job_type : {
        type :DataTypes.ENUM("JOB SEARCH", "EMPLOYING"),
         allowNull :  false
    },
    is_email_verified : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value: string) {
             this.setDataValue('password', hash_data(value))
        },
    
    }
}, {sequelize, modelName: 'Account'}) 