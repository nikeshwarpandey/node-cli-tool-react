# Node CLI Tool for React + TypeScript Project Setup

This CLI tool automates the setup of a new React + TypeScript project using Vite. It simplifies the process by handling user prompts, project initialization, and configuration for testing with Jest.

## Features

- Prompts the user for the project name.
- Initializes a new React + TypeScript project using Vite.
- Installs necessary dependencies for React, TypeScript, and Jest.
- Creates a basic `App.tsx` component and a corresponding `App.test.tsx` test file with a simple test case.

## Installation

To install the CLI tool, clone the repository and run:

```
npm install
```

## Usage

To create a new React + TypeScript project, run the following command in your terminal:

```
node bin/cli.js
```

Follow the prompts to enter your desired project name and let the tool handle the rest.

## Project Structure

The generated project will have the following structure:

```
your-project-name/
├── src/
│   ├── App.tsx
│   └── App.test.tsx
├── package.json
├── tsconfig.json
└── jest.config.js
```

## Running Tests

To run the tests for your project, use the following command:

```
npm test
```

This will execute the Jest test suite and provide feedback on your tests.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.