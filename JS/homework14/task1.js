// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Book title: ${this.title} - author: ${this.author} - pages: ${this.pages}`);
    }
}


const book = new Book("Паттерны разработки на Python: TDD, DDD и событийно-ориентированная архитектура",
    "Боб Грегори, Автор:Гарри Персиваль",
    336);

book.displayInfo();