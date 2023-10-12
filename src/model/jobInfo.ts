import { Sequelize, Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "../config/databaseConfig"; 
import { JobAttributeInterface } from "../types/interface/account";
import { Account } from "./account";

export type JobId = 'id';
export type JobPk = Job[JobId]
export type JobAttributes =  'id' | 'user_id' | 'job_title' | 'description' | 'address' | 'phone_num' | 'skills' | 'resume' | 'position' | 'country' | 'postal_code'
export type JobCreationAtrribute = Optional<JobAttributeInterface, JobAttributes>
export class Job extends Model <JobAttributeInterface, JobCreationAtrribute> implements JobAttributeInterface {
         id!: number;
         user_id: number;
         job_title: string;
         description: string;
         address: string;
         phone_num: string;
         skills: object;
         resume: string;
         position: string;
         country: string;
         postal_code: string;
}

Job.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references : {
            model: Account,
            key: 'id'
        }
    },
    job_title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_num: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skills: {
        type: DataTypes.JSON,
        allowNull: false
    },
    resume: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize, modelName: 'Job'})