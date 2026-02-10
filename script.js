document.addEventListener("DOMContentLoaded", function () {

    const profileButton = document.getElementById("profile-btn");
    const profileMenu = document.getElementById("profile-menu");
    const logoutButton = document.getElementById("logout-button");

    if (profileButton && profileMenu) {
        profileButton.addEventListener("click", function (e) {
            e.stopPropagation();
            profileMenu.style.display =
                profileMenu.style.display === "block" ? "none" : "block";
        });

        profileMenu.addEventListener("click", function (e) {
            e.stopPropagation();
        });

        document.addEventListener("click", function () {
            profileMenu.style.display = "none";
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            const sure = confirm("Are you sure you want to log out?");
            if (sure) window.location.href = "index.html";
        });
    }

    const booksContainer = document.querySelector(".books-container");
    if (booksContainer) {
        booksContainer.addEventListener("click", function (e) {
            const card = e.target.closest(".books");
            if (!card) return;

            const bookId = card.dataset.id;
            if (!bookId) return;

            window.location.href = `bookdetails.html?id=${bookId}`;
        });
    }

    const bookTitleEl = document.getElementById("book-title");
    if (!bookTitleEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const bookId = Number(urlParams.get("id"));
    if (!bookId) return;

    const books = [
        { id: 1, title: "The Age Of Adaline", author: "Lee Toland Krieger", image: "./images/adaline.jpg", description: "A beautiful story about love and time.", price: "$399" },
        { id: 2, title: "Atomic Habits", author: "James Clear", image: "./images/atomic.jpeg", description: "A guide to building good habits and breaking bad ones.", price: "$999" },
        { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki and Sharon L. Lechter", image: "./images/rdpd.jpg", description: "Financial literacy and mindset for wealth.", price: "$699" },
        { id: 4, title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", image: "./images/harry.jpg", description: "The first book of the Harry Potter series.", price: "$499" },
        { id: 5, title: "Letting Go", author: "Philip Roth", image: "./images/lettinggo.jpeg", description: "A novel about family, love, and self-discovery.", price: "$399" },
        { id: 6, title: "365 Days", author: "Blanka Lipinska", image: "./images/365.jpg", description: "A romance novel full of suspense.", price: "$599" },
        { id: 7, title: "Masters of Death", author: "Olivie Blake", image: "./images/mod.jpg", description: "A dark fantasy novel.", price: "$499" },
        { id: 8, title: "The Lion King", author: "Irene Mecchi, Jonathan Roberts, and Linda Woolverton", image: "./images/lk.jpg", description: "A retelling of the classic story.", price: "$399" },
        { id: 9, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", image: "./images/harry2.jpeg", description: "Alternate title for Harry Potter first book.", price: "$499" },
        { id: 10, title: "The Diary of a Young Girl", author: "Anne Frank", image: "./images/diary.jpg", description: "The famous diary of Anne Frank.", price: "$299" },
    ];

    let currentBook = books.find(b => b.id === bookId);
    if (!currentBook) return;

    document.getElementById("book-title-text").textContent = currentBook.title;
    document.getElementById("book-author").textContent = currentBook.author;
    document.getElementById("book-description").textContent = currentBook.description;
    document.getElementById("book-price").textContent = currentBook.price;
    document.getElementById("book-image").src = currentBook.image;

    const relatedCards = document.querySelectorAll(".related-books .books");
    relatedCards.forEach(card => {
        if (Number(card.dataset.id) === bookId) {
            card.style.pointerEvents = "none";
            card.style.opacity = "0.5";
        }
    });

    const buyBtn = document.getElementById("buy-btn");
    if (buyBtn) {
        buyBtn.addEventListener("click", function () {
            const confirmed = confirm(
                `Buy "${currentBook.title}" for ${currentBook.price}?`
            );
            if (confirmed) {
                alert("Order placed!");
            }
        });
    }

});