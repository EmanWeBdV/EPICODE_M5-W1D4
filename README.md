# EpiBooks

<p align="center">
  <a href="https://github.com/EmanWeBdV/EPICODE_M5-W1D4">
    <img src="https://img.shields.io/badge/React-EpiBooks-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="EpiBooks">
  </a>
</p>

<p align="center">
  A simple <strong>book showcase app</strong> built with React, Vite and React-Bootstrap.<br/>
  Focus on reusable components, props, JSON data rendering and modern frontend project structure.<br/>
  <strong>This project was created during Module M5 of the Epicode course.</strong>
</p>

<p align="center">
  <a href="https://github.com/EmanWeBdV/EPICODE_M5-W1D4">
    <img src="https://img.shields.io/badge/status-learning--project-blue?style=for-the-badge" alt="Status">
  </a>
  <a href="https://github.com/EmanWeBdV/EPICODE_M5-W1D4/issues">
    <img src="https://img.shields.io/github/issues/EmanWeBdV/EPICODE_M5-W1D4?style=for-the-badge" alt="Issues">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/license-educational-lightgrey?style=for-the-badge" alt="License">
  </a>
</p>

<p align="center">
  <a href="#-features">Features</a>
  ·
  <a href="#-installation">Installation</a>
  ·
  <a href="https://github.com/EmanWeBdV/EPICODE_M5-W1D4/issues">Report a bug</a>
  ·
  <a href="https://github.com/EmanWeBdV/EPICODE_M5-W1D4/issues">Request a feature</a>
</p>

---

## 🧭 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [What I Practiced](#-what-i-practiced)
- [Roadmap](#-roadmap)
- [Author](#-author)
- [License](#-license)
- [Disclaimer](#-disclaimer)

---

## 🚀 Features

- **React project structure**
  - Built with **Vite**
  - Organized into reusable components
  - Modern frontend setup with ESLint support

- **Navigation component**
  - Custom navbar component called **MyNav**
  - Built with **React-Bootstrap**

- **Welcome section**
  - Introductory component called **Welcome**
  - Styled using **React-Bootstrap Alert** and **Container**

- **Books rendering**
  - Dedicated component called **AllTheBooks**
  - Dynamic rendering of books from a local JSON file
  - Book cards display:
    - cover image
    - title
    - price

- **Local data source**
  - Books are loaded from `fantasy.json`
  - Each item includes:
    - `asin`
    - `title`
    - `img`
    - `price`
    - `category`

- **Educational Context**
  - Built as a React exercise to practice components, props, JSX, local JSON imports and Bootstrap integration

---

## 🧱 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/React-19.2.5-61DAFB?logo=react&logoColor=black&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vite-8.0.10-646CFF?logo=vite&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/React_Bootstrap-2.10.10-41E0FD?style=for-the-badge" />
  <img src="https://img.shields.io/badge/ESLint-10.2.1-4B32C3?logo=eslint&logoColor=white&style=for-the-badge" />
</p>

---

## 📂 Project Structure

```bash
.
├── public/
├── src/
│   ├── books/
│   │   └── fantasy.json
│   ├── components/
│   │   ├── AllTheBooks.jsx
│   │   ├── MyNav.jsx
│   │   ├── Welcome.jsx
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
