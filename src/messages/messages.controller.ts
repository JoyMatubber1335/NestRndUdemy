import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessagesDto } from './dtos/create-messages.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessage() {
    return 'list ';
  }
  @Post()
  createMessage(@Body() body: CreateMessagesDto) {
    console.log(body);
  }
  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
  }
}
