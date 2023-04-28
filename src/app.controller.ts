import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

@Get()
async getOrganizer()
{
  const Organizer =[
    {
      name : 'NGO1', 
      address : 'Dhanmondi1',
      email :'abc1@gmail.com',

  },
  {
    name : 'NGO2', 
    address : 'Dhanmondi2',
    email :'abc2@gmail.com',

},{
  name : 'NGO3', 
  address : 'Dhanmondi3',
  email :'abc3@gmail.com',

},
  ];
  return Organizer;
}
}



