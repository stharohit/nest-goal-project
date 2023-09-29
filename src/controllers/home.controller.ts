import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get('/')
  async getHome() {
    return 'Welcome to my Nest.js Project demo';
  }
}
