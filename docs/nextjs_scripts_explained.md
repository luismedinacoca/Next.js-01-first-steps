# 📌 Next.js Scripts Explained (Simple English)

## 🔧 `dev` – Development mode
```json
"dev": "next dev --turbo"
```
### **What it does**
- Starts the Next.js development server.
- Automatically refreshes the browser when you edit files.
- Shows real-time errors and warnings.
- `--turbo` enables the Turbo Engine, making development faster.

### **What it’s used for**
- Used while coding locally.
- Helps you test your changes quickly.

---

## 🏗️ `build` – Build for production
```json
"build": "next build"
```
### **What it does**
- Compiles and optimizes the app for production.
- Prepares static assets, pages, routing, and code splitting.
- Creates the final version that will run on a server.

### **What it’s used for**
- Must be executed before deployment.
- If `build` fails, you cannot deploy the app.

---

## 🚀 `start` – Run in production
```json
"start": "next start"
```
### **What it does**
- Launches the built app using the production server.
- Only works after a successful `next build`.

### **What it’s used for**
- Used on servers, Docker containers, or cloud deployments.
- Not used for development.

---

## 🧹 `lint` – Code quality check
```json
"lint": "eslint"
```
### **What it does**
- Scans your source code for possible issues or bad practices.
- Helps maintain clean and consistent code style.

### **What it’s used for**
- Run before committing or during CI (Continuous Integration).
- Does not build or run the app; it only analyzes code.

---

## 📊 Example Table: When to Use Each Script

| Script | When to Use It | Typical Scenario |
|--------|----------------|-----------------|
| **dev** | During local development | Making changes to a page and testing in the browser |
| **build** | Before deploying or packaging the app | Preparing a build for Vercel, Docker, or a server |
| **start** | After the app is built, in production environments | Running the app on a cloud server or Docker container |
| **lint** | Before committing code or during CI checks | Ensuring code quality before merging to main branch |

---

If you want, I can also provide:
- 📌 CI scripts for GitHub Actions
- 📌 Docker + Next.js multi-stage build
- 📌 Vercel strategy explanation
