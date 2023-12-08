class Publication {
    constructor(public title: string, public author: string, public publishedYear: number) {}

    displayInfo(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}`);
    }
}

class Book extends Publication {
    constructor(title: string, author: string, publishedYear: number, public genre: string) {
        super(title, author, publishedYear);
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Genre: ${this.genre}`);
    }
}

class Library {
    private publications: Publication[] = [];

    addPublication(publication: Publication): void {
        this.publications.push(publication);
    }

    displayAllPublications(): void {
        this.publications.forEach((publication, index) => {
            console.log(`Publication ${index + 1}:`);
            publication.displayInfo();
        });
    }
}

// Sử dụng các lớp đã tạo
const book1 = new Book("Book Title 1", "Author 1", 2000, "Fiction");
const book2 = new Book("Book Title 2", "Author 2", 2010, "Science");
const publication1 = new Publication("Publication 1", "Author X", 1999);

const library = new Library();
library.addPublication(book1);
library.addPublication(book2);
library.addPublication(publication1);

console.log("Tất cả các Publication trong thư viện:");
library.displayAllPublications();
