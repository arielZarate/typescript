import { Model, Column, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';


//===decorador ===========
@Table
export class User extends Model<User> {


    @Column
    name!: string;

    @Column
    lastName!: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
 }