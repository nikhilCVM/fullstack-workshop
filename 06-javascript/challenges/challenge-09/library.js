class Book {
  constructor(isbn, title, author, copies) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.available = copies;
    this.total = copies;
  }
}

class Member {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.history = [];
  }
}

function createLibrary() {
  const books = {};
  const members = {};
  const borrowed = {};

  return {
    addBook(b) {
      books[b.isbn] = books[b.isbn]
        ? (books[b.isbn].total += b.copies, books[b.isbn].available += b.copies, books[b.isbn])
        : new Book(b.isbn, b.title, b.author, b.copies);
    },

    addMember(m) {
      members[m.id] = new Member(m.id, m.name, m.email);
    },

    borrowBook(mid, isbn) {
      if (books[isbn]?.available > 0 && members[mid]) {
        books[isbn].available--;
        const d = new Date();
        borrowed[`${mid}-${isbn}`] = d;
        members[mid].history.push({ isbn, title: books[isbn].title, borrowedAt: d, returnedAt: null });
      }
    },

    returnBook(mid, isbn) {
      const key = `${mid}-${isbn}`;
      if (borrowed[key]) {
        books[isbn].available++;
        delete borrowed[key];
        const r = members[mid].history.find(h => h.isbn === isbn && !h.returnedAt);
        if (r) r.returnedAt = new Date();
      }
    },

    getAvailableCopies(isbn) {
      return books[isbn]?.available || 0;
    },

    getMemberHistory(mid) {
      return members[mid]?.history.filter(h => h.returnedAt) || [];
    },

    getOverdueBooks() {
      return Object.entries(borrowed)
        .filter(([_, d]) => (new Date() - d) / 86400000 > 14)
        .map(([k, d]) => ({ memberId: k.split("-")[0], isbn: k.split("-")[1], overdueDays: Math.floor((new Date()-d)/86400000-14) }));
    },

    searchBooks(q) {
      q = q.toLowerCase();
      return Object.values(books).filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    },

    clear() {
      for (let k in books) delete books[k];
      for (let k in members) delete members[k];
      for (let k in borrowed) delete borrowed[k];
    }
  };
}

// ===== Test (Your example) =====
const library = createLibrary();

library.addBook({ isbn: '123', title: '1984', author: 'Orwell', copies: 3 });
library.addBook({ isbn: '456', title: 'Dune', author: 'Herbert', copies: 2 });

library.addMember({ id: 'M1', name: 'John', email: 'john@example.com' });
library.addMember({ id: 'M2', name: 'Jane', email: 'jane@example.com' });

library.borrowBook('M1', '123');
library.borrowBook('M2', '123');

console.log(library.getAvailableCopies('123')); // 1

library.returnBook('M1', '123');
console.log(library.getMemberHistory('M1'));

console.log(library.searchBooks('orwell'));
console.log(library.getOverdueBooks());

library.clear();
console.log(library.getAvailableCopies('123')); // 0
