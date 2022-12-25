import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: 'user_posts' })
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
    // Dans notre appli ou CRM on a une USER qui a un ou plusieurs posts mais un post n’appartient qu’un seul USER 
    @ManyToOne(() => User, (user) => (user.posts))
    user: User;
}