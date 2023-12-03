import { book } from "./book";
import { user } from "./user";
export class library {
    books: book[] = [];
    users: user[] = [];

    FaddBook(bookTitle: string, bookAuthor: string): void {
        this.books.push(new book(bookTitle, bookAuthor, true));
        console.log('Book Added Successfully!!');

    }
    FaddUser(userName: string): void {
        this.users.push(new user(userName));
        console.log('User Added Successfully!!');
    }

    FlistBooks(): void {
        this.books.forEach(bookAv => {
            if (bookAv.bookAvailable) {
                console.log(`Book Title : ${bookAv.bookTitle}, Book Author: ${bookAv.bookAuthor}`);

            }
        })
    }

    FsearchBook(query: string): void {
        let flag: boolean = false;
        this.books.forEach(item => {
            if (item.bookTitle.toLowerCase().includes(query.toLowerCase()) || item.bookAuthor.toLowerCase().includes(query.toLowerCase())) {
                console.log(`Title : ${item.bookTitle}, Author : ${item.bookAuthor}`);
                console.log(`Book searched successfully!!`);
                flag = true;


            }
        })
        if (flag === false) {
            console.log(`Sorry, Book not found in Library`);
        }
    }

    FissueBook(userName: string, bookTitle: string) {
        const book = this.books.find(item => item.bookTitle.toLowerCase() === bookTitle.toLowerCase());
        const user = this.users.find(item => item.userName.toLowerCase() === userName.toLowerCase());

        if (!book || !user) {
            console.log('Book or User Not found');
            return;

        }
        if (!book.bookAvailable) {
            console.log('Sorry the book is not available');
            return;

        }
        if (user.userCheckOutBooks.length >= 3) {
            console.log('You cannot check out more books until you return some');
            return;
        }

        book.bookAvailable = false;
        user.userCheckOutBooks.push(book);
        console.log('Book issued successfully');
    }

    FretunBook(bookTitle: string, userName: string): void {
        const book = this.books.find(item => item.bookTitle.toLowerCase() === bookTitle.toLowerCase());
        const user = this.users.find(item => item.userName.toLowerCase() === userName.toLowerCase());

        if (!book || !user) {
            console.log('Book or User Not found');
            return;

        }
        const index = user.userCheckOutBooks.findIndex(book => book.bookTitle.toLowerCase() === bookTitle.toLowerCase());
        if (index === -1) {
            console.log('User did not check out this book');
            return;
        }

        book.bookAvailable = true;
        user.userCheckOutBooks.splice(index, 1);
        console.log('Book returned successfully');
    }

    FremoveBook(bookTitle: string): void {
        const index = this.books.findIndex(book => book.bookTitle.toLowerCase() === bookTitle.toLowerCase());
        if (index === -1) {
            console.log('Book Not found');
            return;

        }
        this.books.splice(index, 1);
        console.log('Book removed successfully!!');

    }

}