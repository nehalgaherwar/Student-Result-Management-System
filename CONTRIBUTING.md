# Contributing to Student Result Management System

First off, thank you for taking the time to contribute! 🎉 Contributions from the community make projects like this amazing. 

This guide will help you set up the project locally, understand our coding standards, and navigate the contribution workflow smoothly. Please take a moment to review these guidelines before getting started.

---

## 📌 Code of Conduct
By participating in this project, you agree to maintain a respectful, welcoming, and collaborative environment for everyone. Please be kind, constructive, and helpful to fellow contributors.

---

## 🛠️ Prerequisites & Local Setup

### Prerequisites
To work on this project, you only need a modern web browser and a code editor (like VS Code). 

### Step-by-Step Installation
1. Fork the Repository: Click the "Fork" button at the top right of the repository page to create your own copy of the project.
2. Clone Your Fork: Open your terminal and run the following command (replace YOUR_USERNAME with your GitHub username):
   git clone https://github.com/YOUR_USERNAME/Student-Result-Management-System.git
3. Navigate to the Directory:
   cd Student-Result-Management-System
4. Create a New Branch: Always create a descriptive branch for your changes instead of working directly on the main branch.
   git checkout -b feature/your-feature-name
5. Run the Project: Simply open the index.html file in your preferred web browser to test the system locally.

---

## 🌿 Git Branch Naming Conventions
To keep the repository organized, please use the following prefix formats for your branches:
* feature/ for adding new features or components (e.g., feature/add-search-bar)
* fix/ for fixing bugs or unexpected behavior (e.g., fix/broken-validation)
* docs/ for documentation updates, typos, or comments (e.g., docs/add-contributing-guide)
* refactor/ for restructuring code without changing its functionality (e.g., refactor/clean-js-functions)

---

## 📝 Commit Message Guidelines
Clear commit messages help everyone understand the history of the codebase. Please use the imperative mood and follow this format:

Format: <type>: <short summary of changes in present tense>

Examples:
* feat: add dynamic rows for student score calculations
* fix: correct percentage calculation bug in script.js
* docs: create comprehensive contributing guidelines

---

## 🎨 Coding Standards & Best Practices

To maintain high code quality and consistency across index.html, `style.css, and script.js, please follow these guidelines:

### HTML & CSS
* Use clean, semantic HTML5 tags (e.g., <header>, <main>, <section>, <footer>) to ensure the system remains accessible.
* Use meaningful, lowercase class names separated by hyphens (e.g., .result-container, .submit-btn).
* Ensure the layout is responsive and looks good on both mobile screens and desktop monitors.

### JavaScript
* Use const for variables that won't be reassigned and let for variables that will change. Avoid using var.
* Write descriptive function and variable names using camelCase (e.g., calculateTotalMarks, studentName).
* Keep functions small, modular, and focused on doing a single task well.
* Remove all temporary console.log() statements before submitting your code.

---

## 🔄 Contribution Workflow

### 1. Reporting Issues & Claiming Tasks
* Look through the open issues to find tasks you'd like to work on. 
* If you find a bug or want to suggest an optimization that isn't listed, open a new issue describing the problem or feature request clearly.
* Wait to be assigned to an issue by a maintainer before you begin writing code to prevent overlapping work.

### 2. Opening a Pull Request (PR)
Once your changes are ready and tested locally:
1. Commit and push your branch to your forked repository:
   git push origin feature/your-feature-name
2. Navigate to the original repository on GitHub. You should see a prompt to open a Pull Request.
3. Fill out the PR template with a clear title and a description explaining what your code changes accomplish.
4. Link the PR to the issue it resolves by writing "Closes #IssueNumber" in the description.

---

## ✅ Pre-PR Checklist
Before clicking "Create pull request", make sure you can check off all of the following:
- [ ] My code runs locally without throwing errors or warnings in the browser console.
- [ ] My changes are consistent with the existing project styling and coding standards.
- [ ] I have tested the system thoroughly to ensure my fixes don't break existing functionality.
- [ ] My branch is up to date with the main branch of the upstream repository.
- [ ] My commit messages follow the project guidelines.

---

Thank you again for your contribution! Your efforts help make this Student Result Management System better for everyone. Happy coding! 🚀