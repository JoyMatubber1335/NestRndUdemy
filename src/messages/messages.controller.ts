import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { CreateMessagesDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessage() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessagesDto) {
    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  async getMessage(@Param() id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
  }
}
