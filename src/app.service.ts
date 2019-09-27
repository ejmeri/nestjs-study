import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  helloFriend(name: string): string {
    return `Hello ${name}, learn more about nestjs`;
  }
}
