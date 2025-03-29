# Node CLI Tool for React + TypeScript Project Setup

This CLI tool automates the setup of a new React + TypeScript project using Vite. It also provides commands to generate components, pages, hooks, routes, services, and utilities, making it a powerful tool for streamlining development workflows.

---

## Features

- **Project Setup**: Quickly initialize a new React + TypeScript project using Vite.
- **Code Generation**: Generate components, pages, hooks, routes, services, and utilities with boilerplate code.
- **Testing**: Automatically configures Jest for unit testing.
- **Customizable Structure**: Organizes generated files into a consistent folder structure.

---

## Installation

To install the CLI tool, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/node-cli-tool.git
   ```

2. Navigate to the project directory:
   ```bash
   cd node-cli-tool
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. (Optional) Link the CLI globally for easier usage:
   ```bash
   npm link
   ```

---

## Usage

### **1. Create a New Project**
To create a new React + TypeScript project, run:
```bash
node bin/cli.js
```
or, if linked globally:
```bash
cli-tool
```

Follow the prompts to enter your desired project name. The CLI will handle the rest, including setting up Vite, installing dependencies, and creating boilerplate files.

---

### **2. Generate a Component**
To generate a new component, run:
```bash
node bin/cli.js
```
Select **"Generate a component"** and follow the prompts to:
- Enter the component name (e.g., `Button`).
- Select the type of component (`common`, `forms`, `layout`, or `modals`).

The CLI will create the component in the appropriate folder:
```
react-ts-app/src/components/<type>/<ComponentName>/
├── <ComponentName>.tsx
└── <ComponentName>.test.tsx
```

Example:
```
react-ts-app/src/components/common/Button/
├── Button.tsx
└── Button.test.tsx
```

---

### **3. Generate a Page**
To generate a new page, run:
```bash
node bin/cli.js
```
Select **"Generate a page"** and follow the prompts to enter the page name (e.g., `Home`).

The CLI will create the page in:
```
react-ts-app/src/pages/<PageName>/
├── <PageName>.tsx
└── <PageName>.test.tsx
```

Example:
```
react-ts-app/src/pages/Home/
├── Home.tsx
└── Home.test.tsx
```

---

### **4. Generate a Hook**
To generate a new custom hook, run:
```bash
node bin/cli.js
```
Select **"Generate a hook"** and follow the prompts to enter the hook name (e.g., `useFetch`).

The CLI will create the hook in:
```
react-ts-app/src/hooks/
└── useFetch.ts
```

---

### **5. Generate a Route**
To generate a new route, run:
```bash
node bin/cli.js
```
Select **"Generate a route"** and follow the prompts to enter the route name (e.g., `DashboardRoutes`).

The CLI will create the route in:
```
react-ts-app/src/routes/
└── DashboardRoutes.tsx
```

---

### **6. Generate a Service**
To generate a new service, run:
```bash
node bin/cli.js
```
Select **"Generate a service"** and follow the prompts to enter the service name (e.g., `userService`).

The CLI will create the service in:
```
react-ts-app/src/services/
└── userService.ts
```

---

### **7. Generate a Utility**
To generate a new utility function, run:
```bash
node bin/cli.js
```
Select **"Generate a utility"** and follow the prompts to enter the utility name (e.g., `formatDate`).

The CLI will create the utility in:
```
react-ts-app/src/utils/
└── formatDate.ts
```

---

## Folder Structure

The generated project will have the following structure:
```
your-project-name/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── common/       # Common components (e.g., Button, Input)
│   │   ├── forms/        # Form-related components
│   │   ├── layout/       # Layout components (e.g., Header, Footer)
│   │   └── modals/       # Modal components
│   ├── pages/            # Page-level components
│   ├── hooks/            # Custom React hooks
│   ├── routes/           # Route definitions
│   ├── services/         # API calls and business logic
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main app component
│   └── App.test.tsx      # Test for the main app component
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

---

## Running Tests

To run the tests for your project, use the following command:
```bash
npm test
```
This will execute the Jest test suite and provide feedback on your tests.

---

## Examples

### **Example: Generating a Button Component**
1. Run the CLI:
   ```bash
   node bin/cli.js
   ```
2. Select **"Generate a component"**.
3. Enter the component name: `Button`.
4. Select the type: `common`.

The CLI will generate:
```
react-ts-app/src/components/common/Button/
├── Button.tsx
└── Button.test.tsx
```

---

## Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to:
- Submit a pull request.
- Open an issue on the GitHub repository.

---

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.