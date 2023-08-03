/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
    modelName: 'AppHealthApplication',
    freezeTableName: true,
    timestamps: false,
})
export class AppHealthApplicationModel extends Model<AppHealthApplicationModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @Column({
        field: 'technicalSolutionId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    technicalSolutionId: string;

    @Column({
        field: 'name',
        allowNull: false,
        type: DataTypes.STRING(255),
    })
    name: string;

    @Column({
        field: 'description',
        allowNull: true,
        type: DataTypes.TEXT,
    })
    description: string;

    @Column({
        field: 'businessImpact',
        allowNull: true,
        type: DataTypes.TEXT,
    })
    businessImpact: string;

    @Column({
        field: 'type',
        allowNull: false,
        type: DataTypes.ENUM('FRONTEND','SERVER','MOBILE','EMBEDDED'),
    })
    type: string;

    @Column({
        field: 'releaseDate',
        allowNull: false,
        type: DataTypes.DATE,
    })
    releaseDate: string;

    @Column({
        field: 'architectureDiagram',
        allowNull: false,
        type: DataTypes.STRING(255),
    })
    architectureDiagram: string;

    @Column({
        field: 'hasTenants',
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    hasTenants: boolean;

    @Column({
        field: 'hasLicensing',
        allowNull: false,
        type: DataTypes.BOOLEAN,
    })
    hasLicensing: boolean;

    @Column({
        field: 'costLicensesPerYear',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    costLicensesPerYear: number;

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