# 🖱️ Click Counter App

## 📌 Overview

The **Click Counter App** is a simple web application built using **HTML, CSS, and JavaScript**. It counts the number of times a button is clicked and stores the value in **localStorage**, ensuring the counter persists even after page refresh.

This project is ideal for beginners to practice **DOM manipulation**, **event handling**, and **localStorage usage** in JavaScript.

---

## 🧩 Features

* Increment counter on button click
* Display current count dynamically
* Save counter value in localStorage
* Persist counter value across page reloads
* Color change effect on counter number

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation, localStorage)

---

## ⚙️ How It Works

* User clicks the **Increment** button
* JavaScript function `clickBtn()`:

  * Increases the counter value
  * Updates the displayed value in the DOM
  * Saves the updated value in localStorage
* On page reload, the value is retrieved from localStorage and displayed

---

## 📂 Project Structure

```
click-counter-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function clickBtn() {
    let numberEl = document.getElementById("counterValue");
    let updateNumber = parseInt(numberEl.textContent) + 1;
    numberEl.textContent = updateNumber;
    numberEl.style.color = "#c20a72";
    localStorage.setItem("clickCount", JSON.stringify(updateNumber));
}
```

---

## 📚 Concepts Covered

* DOM element selection and update
* Event handling for button clicks
* localStorage setItem and getItem
* JSON stringify and parse

---

## 🚀 Future Improvements

* Add a reset button to clear the counter
* Change color dynamically based on number range
* Display total clicks across sessions

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript fundamentals** and **localStorage usage**.

---

⭐ If you find this project useful, feel free to star the repository!
