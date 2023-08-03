/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { AppHealthApplicationModel } from '@app/app-health/application';
import { AppHealthAuthenticationInterfaceModel } from '@app/app-health/authentication-interface';

@Table({
    modelName: 'AppHealthApplicationAuthentication',
    freezeTableName: true,
    timestamps: false,
})
export class AppHealthApplicationAuthenticationModel extends Model<AppHealthApplicationAuthenticationModel>
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

    @ForeignKey(() => AppHealthAuthenticationInterfaceModel)
    @Column({
        field: 'authenticationInterfaceId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    authenticationInterfaceId: string;

    @BelongsTo(() => AppHealthAuthenticationInterfaceModel, {
        constraints: false,
        foreignKey: 'authenticationInterfaceId',
    })
    authenticationInterface: AppHealthAuthenticationInterfaceModel;

    @Column({
        field: 'totalUsers',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    totalUsers: number;

    @Column({
        field: 'score',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    score: number;

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