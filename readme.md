# 📚 Vanilla JS Book Library - Semester 1 Milestone Project

This is a multi-page **Book Library application** built during my **first semester of web development**. It demonstrates core web development skills using **HTML, CSS, and Vanilla JavaScript**.

## 🚀 Project Roadmap
*   **Current State (This Repo):** Static, multi-page UI using HTML, CSS, and pure JS for interactivity and dynamic DOM updates.
*   **Future Phase (React Upgrade):** I plan to refactor this entire UI into ReactJS to implement components, hooks, and integrate with a real API (Google Books). *Watch my [BookHub Repository](https://github.com/Safal005/bookhub) for progress.*

## ✨ Technical Highlights
- **Dynamic Content Loading:** Uses URL parameters to inject specific book data into a single details template.
- **User Interface for Authentication:** Includes Login, Sign-Up, and OTP-based Forgot Password pages (client-side UI flow).  
- **Interactive Dashboard:** Profile dropdown menu with logout confirmation and high-performance book hover effects.  
- **Smart Logic:** Automatically disables the currently viewed book in the "Related Books" section to improve user flow.  
- **Responsive Layout:** Optimized for seamless viewing on both mobile and desktop devices.  
- **Sticky Navigation:** Header remains fixed for easy access to navigation while scrolling.

## 🛠 Tech Stack
- **Languages:** HTML5, CSS3, JavaScript (ES6+)  
- **Icons:** FontAwesome  
- **Layout:** Flexbox & CSS Grid

## 📂 File Structure
- `index.html` – Login Page  
- `signup.html` – Sign-Up Page  
- `forgotpass.html` – OTP-based Password Reset Page  
- `dashboard.html` – Main Library Interface  
- `bookdetails.html` – Individual, dynamic Book Details Page  
- `script.js` – Handles all DOM interactivity, profile toggles, and dynamic data injection.  
- `style.css` – Custom, cohesive styles for the entire project.  
- `/images` – Book covers and UI icons.

## 📝 Learning Outcomes
- Mastered **DOM manipulation** and event handling in Vanilla JS.  
- Gained confidence managing complex layouts using a combination of **Flexbox and CSS Grid**.
- Managed simple **client-side UI state** such as dropdown visibility and related book selection.  
- Gained experience building **multi-page applications** with structured navigation and responsive layouts.

## 🧩 Challenges & Future Improvements
> **The State Management Hurdle:** Since this is a Vanilla JS project, passing data between pages (like which book was clicked) required manual URL parameter handling. 

*   **Why React?** Refactoring to **React** will allow for centralized state management (via Context API/Redux). This will fix current limitations, such as maintaining a real "User Session" after login and handling a global "Search" state.
*   **Data Integration:** My next goal is to move from hard-coded local data to the **Google Books API** to handle a truly dynamic and infinite library database.

---
👤 **Author:** [Safal Khanal](https://github.com/Safal005)
🗓 **Project Year:** 2026