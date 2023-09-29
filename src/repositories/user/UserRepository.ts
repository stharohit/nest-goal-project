import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<UserDocument>,
  ) {}

  async save(user: User): Promise<User> {
    return await this.userModel.create(user);
  }

  async getUser(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }
}
