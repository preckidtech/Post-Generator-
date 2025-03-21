# Post-Generator-
A simple React app that fetches and displays a random post from an API with the click of a button. Built with React and useState for dynamic updates. 🚀



### **📌 Features**
- Fetches posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).
- Displays a randomly selected post.
- Shows the **post ID**, **title**, and **body**.
- Simple and minimal UI with Tailwind CSS.

---

### **🚀 Installation & Setup**  

#### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/post-generator.git
cd post-generator
```

#### **2. Install Dependencies**
```sh
npm install
```

#### **3. Start the Development Server**
```sh
npm run dev
```

---

### **💡 How It Works**
1. When you click the **Generate** button, the app fetches all posts from the API.  
2. It picks a **random post** from the data.  
3. The post **ID, title, and body** are displayed on the screen.  

---

### **🖥️ Usage**
- Open the app in your browser.
- Click the **"Generate"** button to fetch a new post.
- A random post will appear each time you click.

---

### **📜 Code Explanation**
#### **`getPost` Function**
- Uses **`fetch`** to get post data from the API.
- Picks a **random post** using `Math.random()`.
- Updates the state (`setPost`) to display the post.

#### **Rendering**
- If `post` exists, it shows the **post card**.
- The **button** triggers `getPost` when clicked.

---



---

### **📄 Technologies Used**
- **React.js** – For building UI components.
- **Tailwind CSS** – For styling.
- **JavaScript (ES6)** – For logic & state management.
- **JSONPlaceholder API** – For fetching posts.

---

### **📌 Future Improvements**
- Add a **loading indicator** while fetching.
- Improve the UI with **animations**.
- Fetch posts **one at a time** instead of all at once.

---

### **📜 License**
This project is **open-source** and available under the **MIT License**.

---

### **👨‍💻 Author**
- **[Precious Oyebode](www.linkedin.com/in/oyebode-precious)**  
