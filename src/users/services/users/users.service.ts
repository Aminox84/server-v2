import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

import { CreateUserParams, CreateUserProfileParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    //Le get des users
    findUsers() {
        return this.userRepository.find()

    }
    // creation d'un user
    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date(),
        });
        return this.userRepository.save(newUser);
    }
    //L'update du User
    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails });
    }
    deleteUser(id: number) {
        return this.userRepository.delete({ id });
    }
    async createUserProfile(
        id: number,
        createUserProfileDetails: CreateUserProfileParams,
    ) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new HttpException(
                'User pas trouvé, on peut pas crée le profile',
                HttpStatus.BAD_REQUEST,
            );

    }
}
