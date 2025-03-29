#!/usr/bin/env node
// filepath: c:\development\cli-works\node-cli-tool\bin\cli.js

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer').default;

async function main() {
  console.log('Welcome to the React + TypeScript project setup CLI!');

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'Create a new project',
        'Generate a component',
        'Generate a hook',
        'Generate a page',
        'Generate a route',
        'Generate a service',
        'Generate a utility',
      ],
    },
  ]);

  if (action === 'Create a new project') {
    const { projectName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter the name of your project:',
        validate: (input) => (input ? true : 'Project name cannot be empty.'),
      },
    ]);

    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      console.error(`Error: Directory "${projectName}" already exists.`);
      process.exit(1);
    }
    fs.mkdirSync(projectPath);

    console.log(`Creating project in ${projectPath}...`);
    execSync(`npm create vite@latest ${projectName} -- --template react-ts`, { stdio: 'inherit' });

    process.chdir(projectPath);

    console.log('Installing Jest and related dependencies...');
    execSync('npm install --save-dev jest @types/jest ts-jest', { stdio: 'inherit' });

    console.log('Configuring Jest...');
    const jestConfig = `
module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\\\.(ts|tsx)$': 'ts-jest',
  },
};
    `;
    fs.writeFileSync(path.join(projectPath, 'jest.config.js'), jestConfig);

    console.log('Creating example files...');
    const appTsx = `
import React from 'react';

const App: React.FC = () => {
  return <h1>Hello, React + TypeScript!</h1>;
};

export default App;
    `;
    fs.writeFileSync(path.join(projectPath, 'src', 'App.tsx'), appTsx);

    const appTestTsx = `
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the correct content', () => {
  render(<App />);
  expect(screen.getByText('Hello, React + TypeScript!')).toBeInTheDocument();
});
    `;
    fs.writeFileSync(path.join(projectPath, 'src', 'App.test.tsx'), appTestTsx);

    console.log('Setup complete! Run the following commands to get started:');
    console.log(`cd ${projectName}`);
    console.log('npm install');
    console.log('npm run dev');
  } else {
    const { name } = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: `Enter the name of the ${action.split(' ')[1]}:`,
        validate: (input) => (input ? true : `${action.split(' ')[1]} name cannot be empty.`),
      },
    ]);

    let targetDir;
    let fileContent;

    switch (action) {
      case 'Generate a component':
        // Prompt the user for the type of component
        const { componentType } = await inquirer.prompt([
          {
            type: 'list',
            name: 'componentType',
            message: 'Select the type of component:',
            choices: ['common', 'forms', 'layout', 'modals','hoc'],
          },
        ]);

        // Set the target directory based on the selected type
        targetDir = path.join(process.cwd(), 'react-ts-app', 'src', 'components', componentType, name);

        fileContent = {
          main: `
import React from 'react';

interface ${name}Props {}

const ${name}: React.FC<${name}Props> = () => {
  return <div>${name} Component</div>;
};

export default ${name};
          `,
          test: `
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${name} from './${name}';

test('renders ${name} component', () => {
  render(<${name} />);
  expect(screen.getByText('${name} Component')).toBeInTheDocument();
});
          `,
        };
        break;

      case 'Generate a hook':
        targetDir = path.join(process.cwd(), 'react-ts-app', 'src', 'hooks');
        fileContent = {
          main: `
import { useState } from 'react';

const use${name} = () => {
  const [state, setState] = useState(null);

  return [state, setState];
};

export default use${name};
          `,
        };
        break;

      case 'Generate a page':
        targetDir = path.join(process.cwd(), 'react-ts-app', 'src', 'pages', name);
        fileContent = {
          main: `
import React from 'react';

const ${name}: React.FC = () => {
  return <div>${name} Page</div>;
};

export default ${name};
          `,
          test: `
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${name} from './${name}';

test('renders ${name} page', () => {
  render(<${name} />);
  expect(screen.getByText('${name} Page')).toBeInTheDocument();
});
          `,
        };
        break;

      case 'Generate a route':
        targetDir = path.join(process.cwd(), 'react-ts-app', 'src', 'routes');
        fileContent = {
          main: `
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ${name}Routes: React.FC = () => {
  return (
    <Routes>
      <Route path="/${name.toLowerCase()}" element={<div>${name} Route</div>} />
    </Routes>
  );
};

export default ${name}Routes;
          `,
        };
        break;

      case 'Generate a service':
        targetDir = path.join(process.cwd(), 'react-ts-app', 'src', 'services');
        fileContent = {
          main: `
import axios from 'axios';

const ${name}Service = {
  fetchData: async () => {
    const response = await axios.get('/api/${name.toLowerCase()}');
    return response.data;
  },
};

export default ${name}Service;
          `,
        };
        break;

      case 'Generate a utility':
        targetDir = path.join(process.cwd(), 'react-ts-app', 'src', 'utils');
        fileContent = {
          main: `
export const ${name} = () => {
  // Add utility logic here
};
          `,
        };
        break;

      default:
        console.error('Invalid action.');
        process.exit(1);
    }

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(path.join(targetDir, `${name}.tsx`), fileContent.main.trim());
    if (fileContent.test) {
      fs.writeFileSync(path.join(targetDir, `${name}.test.tsx`), fileContent.test.trim());
    }

    console.log(`${action.split(' ')[1]} "${name}" has been created successfully in ${targetDir}`);
  }
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});