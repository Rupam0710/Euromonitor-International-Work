import { book } from "./book";

export class user {
    constructor(public userName: string, public userCheckOutBooks: book[] = []) { }
}