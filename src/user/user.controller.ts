import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './Interfaces/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly UserService: UserService) {}
    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise <UserEntity> 
    {
        return this.UserService.createUser(createUser);
    }

    @Get()
    async getAllUser(): Promise<UserEntity[]>{
        return this.UserService.getAllUser();
    }
}
