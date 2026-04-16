# 🎓 University Finder (API Project)

A simple and interactive web application that allows users to **search for universities by country** using a public API. Built using **HTML, CSS, and JavaScript**, this project demonstrates how to fetch and display real-time data from an external API.

---

## 🚀 Features

* 🌍 Search universities by country name
* ⚡ Fetch real-time data using API
* 📋 Dynamically display results
* 🧠 Uses asynchronous JavaScript (async/await)
* 🔁 Handles API errors gracefully
* 🎯 Clean and minimal UI

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Basic styling
* **JavaScript (Vanilla JS)** – Logic & DOM manipulation
* **Axios** – For making API requests
* **Hipolabs Universities API** – Data source

---

## 📂 Project Structure

```id="p1x92k"
University-Finder/
│── index.html       # Main webpage
│── style.css        # Styling
│── script.js        # API logic
│── README.md        # Documentation
```

---

## 🌐 API Used

* **Hipolabs Universities API**

  ```
  http://universities.hipolabs.com/search?country=
  ```

This API returns a list of universities based on the country entered.

---

## ⚙️ How It Works

1. User enters a **country name** (e.g., India, USA).
2. Clicks the **Search** button.
3. JavaScript sends a request to the API using Axios.
4. API returns a list of universities.
5. The results are dynamically displayed as a list on the page.

---

## ▶️ How to Run

1. Clone the repository:

```bash id="m3a9zd"
git clone https://github.com/Pruthviraj115/API-project.git
```

2. Open the project folder
3. Run `index.html` in your browser

---

## 💡 Example

**Input:**

```
India
```

**Output:**

```
Indian Institute of Technology
University of Delhi
Anna University
...
```

---

## ⚠️ Error Handling

* If the API fails → logs error in console
* If no results found → displays empty list
* Prevents app crash using `try...catch`

---

## 📈 Future Improvements

* 🔍 Add search on "Enter key press"
* ⏳ Add loading spinner
* ❗ Show "No results found" message
* 🎨 Improve UI design (cards, layout)
* 🌐 Make it mobile responsive
* 🔗 Show university website links

---

## 🐞 Known Issues / Improvements Needed

* API URL uses `http` (can be upgraded to `https`)
* Duplicate API call in code (can be optimized)

---

## 👨‍💻 Author

**Pruthviraj S R**

---

## 📜 License

This project is open-source and free to use.

---

⭐ If you like this project, consider giving it a star on GitHub!
