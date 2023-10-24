import { Injectable } from '@nestjs/common';
import { GetUserRequestDTO } from './get-user-request.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private users = [
    {
      userId: '123',
      stripeUserId: '43324',
    },
    {
      userId: '456',
      stripeUserId: '27279',
    },
  ]

  getUser(data: GetUserRequestDTO){
    this.users.find(user => user.userId === data.userId);
  }
}
