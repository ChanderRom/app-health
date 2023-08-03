/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { AppHealthApplicationModel } from '@app/app-health/application';
import { AppHealthApiInterfaceTypeModel } from '@app/app-health/api-interface-type';

@Table({
    modelName: 'AppHealthApplicationApi',
    freezeTableName: true,
    timestamps: false,
})
export class AppHealthApplicationApiModel extends Model<AppHealthApplicationApiModel>
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

    @ForeignKey(() => AppHealthApiInterfaceTypeModel)
    @Column({
        field: 'apiInterfaceTypeId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    apiInterfaceTypeId: string;

    @BelongsTo(() => AppHealthApiInterfaceTypeModel, {
        constraints: false,
        foreignKey: 'apiInterfaceTypeId',
    })
    apiInterface: AppHealthApiInterfaceTypeModel;

    @Column({
        field: 'score',
        allowNull: false,
        type: DataTypes.SMALLINT.UNSIGNED,
    })
    score: number;

    @Column({
        field: 'documentations',
        allowNull: true,
        type: DataTypes.ENUM('OPENAPI','GRAPGQL','HTML','DOCS'),
    })
    documentations: string;

    @Column({
        field: 'requestsPerDay',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    requestsPerDay: number;

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