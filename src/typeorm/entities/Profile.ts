import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user_profiles'})
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;


    @Column()
    age: number;
    
    @Column()
    dob: string;
}