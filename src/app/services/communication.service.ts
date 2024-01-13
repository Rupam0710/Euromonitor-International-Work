import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CommunicationService {
    private messageSource = new BehaviorSubject('');
    currentmessage = this.messageSource.asObservable();

    constructor() { }

    sendMessage(message: string) {
        this.messageSource.next(message);
    }
}