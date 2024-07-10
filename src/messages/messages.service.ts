import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MessagesService {
  constructor(public messagesRepository: MessagesRepository) {}

  findOne(id: string) {
    console.log('🚀 ~ MessagesService ~ findOne ~ id:', id);

    return this.messagesRepository.findOne(id);
  }
  findAll() {
    return this.messagesRepository.findAll();
  }
  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
