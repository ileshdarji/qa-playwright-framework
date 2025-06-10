

# 🎭 QA Playwright Framework

A lightweight end-to-end testing framework using [Playwright](https://playwright.dev/) to validate a sample HTML registration form.

Built and maintained by [Ilesh Darji](https://www.ileshdarji.com) for hands-on UI automation practice, interview prep, and content creation.

---

## 🚀 Features

- 🔹 Page Object Model (POM)
- 🔹 Dynamic form data generation using `@faker-js/faker`
- 🔹 Configurable environment setup (`local`, `staging`, `production`)
- 🔹 HTML report generation
- 🔹 Playwright Test Runner
- 🔹 SlowMo support for visible test runs
- 🔹 Container-ready Docker setup (optional)

---

## 🏗️ Project Structure

```
qa-playwright-framework/
│
├── app/                      # Simple HTML app (register.html)
│   └── server.js             # Express server for hosting HTML
│
├── tests/                    # All test specs
│   └── form.spec.ts
│
├── pages/                    # Page Objects
│   └── RegistrationPage.ts
│
├── utils/                    # Reusable helpers (e.g., test data)
│   └── generateData.ts
│
├── playwright.config.ts      # Playwright configuration
├── Dockerfile                # (Optional) Docker setup
├── docker-compose.yml
└── README.md                 # This file
```

---

## 🛠️ Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start the test app locally

```bash
npm run start-app
```

App will run at `http://localhost:3000`.

### 3. Run tests

```bash
npx playwright test
```

### 4. Open HTML report

```bash
npx playwright show-report
```

---

## 🌍 Run Tests for Different Environments

```bash
TEST_ENV=local npx playwright test
TEST_ENV=staging npx playwright test
```

Configure base URLs in `playwright.config.ts`.

---

## 🐳 Docker Setup (Optional)

```bash
docker-compose up --build
```

This will:
- Start the app inside a container
- Run Playwright tests
- Generate reports

---

## 📌 Future Enhancements

- [ ] CI Integration (GitHub Actions)
- [ ] Cross-browser testing
- [ ] Visual regression tests
- [ ] API + UI hybrid validations

---

## 👨‍💻 Author

**Ilesh Darji**  
[Website](https://www.ileshdarji.com) | [LinkedIn](https://www.linkedin.com/in/ilesh-d-25179713/) | [YouTube](https://www.youtube.com/@QAwithIlesh)

---

## 🕊️ License

MIT License – use, fork, or improve freely.