import { Controller,Get,Post, Body,Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessage(){
        return "list "
    }
    @Post()
    createMessage(@Body() body:any){
         console.log(body);
    }
    @Get("/:id")
    getMessage(@Param() id:string){
        console.log(id);
    }

}
