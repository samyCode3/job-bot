import { sequelize } from "../config/databaseConfig";
import { Sequelize, Model, DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, HasOneSetAssociationMixin, Optional } from "sequelize";
import { mediaInterface } from "../types/interface/media";

export type mediaId= "id"
export type mediaPk=Media[mediaId]
export type mediaAttribute="id" | "document" | "videos"
export type mediaCreationAttribute= Optional<mediaInterface, mediaAttribute>

export class Media extends Model<mediaInterface, mediaCreationAttribute> implements mediaInterface {
       id!: number
       document!: string
       videos!: string
}

Media.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    document: {
        type: DataTypes.STRING,
        allowNull: false
    },
    videos: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize, modelName: 'media'})