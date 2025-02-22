# React TypeScript Testing Framework

A modern React application with comprehensive end-to-end testing using Playwright, TypeScript, and GitHub Actions integration.

## 🚀 Features

- **React 18** with TypeScript
- **Vite** for lightning-fast development
- **Tailwind CSS** for styling
- **Lucide React** for beautiful icons
- **Playwright** for end-to-end testing
- **GitHub Actions** for CI/CD
- **Cross-browser testing** support

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

## 🛠️ Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🧪 Testing

This project uses Playwright for end-to-end testing across multiple browsers and devices.

### Available Test Commands

- `npm run test` - Run all tests
- `npm run test:ui` - Open Playwright UI mode for interactive testing
- `npm run test:debug` - Run tests in debug mode
- `npm run test:report` - View the HTML test report

### Test Configuration

The testing framework is configured to:
- Run tests in parallel
- Test across multiple browsers (Chrome, Firefox, Safari)
- Test mobile viewports (iPhone, Pixel)
- Capture screenshots on test failures
- Generate detailed HTML reports

## 🔄 CI/CD

GitHub Actions automatically run tests on:
- Push to main/master branch
- Pull request creation
- Pull request updates

The workflow:
1. Sets up Node.js environment
2. Installs dependencies
3. Installs Playwright browsers
4. Runs the test suite
5. Uploads test reports as artifacts

## 📁 Project Structure

```
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── tests/
│   └── example.spec.ts  # Example Playwright tests
├── .github/
│   └── workflows/       # GitHub Actions configuration
├── playwright.config.ts # Playwright configuration
└── package.json        # Project dependencies and scripts
```

## 🛠️ Development

1. Make your changes
2. Write tests in the `tests` directory
3. Run tests locally to verify
4. Create a pull request

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run test` - Run tests
- `npm run test:ui` - Open test UI
- `npm run test:debug` - Debug tests
- `npm run test:report` - View test report

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.