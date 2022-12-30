import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { Profile } from "./profile";



@Entity({ name: 'users' })


export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    username: string;

    // @Column()
    // password: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;
//Relation one to Many entre le Profile et le USER
    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

//RELATION one to many entre le User et Les posts
    @OneToMany(()=> Post, (post)=>post.user)
    posts: Post[];
    
}