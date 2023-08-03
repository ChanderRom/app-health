/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { AppHealthApplicationModel } from '@app/app-health/application';
import { AppHealthDatabaseModel } from '@app/app-health/database';

@Table({
    modelName: 'AppHealthApplicationDatabase',
    freezeTableName: true,
    timestamps: false,
})
export class AppHealthApplicationDatabaseModel extends Model<AppHealthApplicationDatabaseModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @ForeignKey(() => AppHealthApplicationModel)
    @Column({
        field: 'applicationId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    applicationId: string;

    @BelongsTo(() => AppHealthApplicationModel, {
        constraints: false,
        foreignKey: 'applicationId',
    })
    application: AppHealthApplicationModel;

    @ForeignKey(() => AppHealthDatabaseModel)
    @Column({
        field: 'databaseId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    databaseId: string;

    @BelongsTo(() => AppHealthDatabaseModel, {
        constraints: false,
        foreignKey: 'databaseId',
    })
    database: AppHealthDatabaseModel;

    @Column({
        field: 'version',
        allowNull: false,
        type: DataTypes.STRING(20),
    })
    version: string;

    @Column({
        field: 'size',
        allowNull: false,
        type: DataTypes.SMALLINT.UNSIGNED,
    })
    size: number;

    @Column({
        field: 'score',
        allowNull: false,
        type: DataTypes.SMALLINT.UNSIGNED,
    })
    score: number;

    @Column({
        field: 'totalCollectionTables',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    totalCollectionTables: number;

    @Column({
        field: 'totalFields',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    totalFields: number;

    @Column({
        field: 'createdAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    createdAt: string;

    @Column({
        field: 'updatedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    updatedAt: string;

    @Column({
        field: 'deletedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    deletedAt: string;

}