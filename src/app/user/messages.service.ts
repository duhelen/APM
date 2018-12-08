import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
    private messages: string[] = [];

    addMessage(message: string): void {
        this.messages.push(message)
    }
}