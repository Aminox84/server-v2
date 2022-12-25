import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    @Get()
    getUsers() {
        return this.userService.findUsers();
    }
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
    @Put(':id')
    async updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto,
    ) {
        await this.userService.updateUser(id, updateUserDto);

    }

    @Delete(':id')
    async DeleteUserById(
        @Param('id', ParseIntPipe) id: number) {
        await this.userService.deleteUser(id);

    }

    @Post(':id/profiles')
    createUserProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() createUserProfileDto: CreateUserProfileDto,
    ) {
        return this.userService.createUserProfile(id, createUserProfileDto);
    }

    @Post(':id/posts')
    createUserPost(@Param('id', ParseIntPipe)id: number, @Body() createUserPostDto: CreateUserPostDto)

    {
    return this.userService.createUserPost(id, createUserPostDto);
    }

}
