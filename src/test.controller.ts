import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('learning')
export class TestController {
  constructor(private readonly appService: AppService) {}


  @Get(':name')
  helloFriend(@Param() params): string {
    return this.appService.helloFriend(params.name);
  }
}
