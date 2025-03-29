import { execSync } from 'child_process';
import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';

const setupReactProject = async () => {
    const { projectName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Enter the name of your React project:',
            validate: (input) => input ? true : 'Project name cannot be empty.',
        },
    ]);

    const projectPath = path.join(process.cwd(), projectName);

    // Initialize Vite project
    execSync(`npm create vite@latest ${projectName} -- --template react-ts`, { stdio: 'inherit' });

    // Change directory to the new project
    process.chdir(projectPath);

    // Install Jest and necessary testing utilities
    execSync(`npm install --save-dev jest @types/jest ts-jest`, { stdio: 'inherit' });

    // Create App.tsx and App.test.tsx from templates
    const appTemplate = fs.readFileSync(path.join(__dirname, '../templates/App.tsx'), 'utf-8');
    const testTemplate = fs.readFileSync(path.join(__dirname, '../templates/App.test.tsx'), 'utf-8');

    fs.writeFileSync(path.join(projectPath, 'src', 'App.tsx'), appTemplate);
    fs.writeFileSync(path.join(projectPath, 'src', 'App.test.tsx'), testTemplate);

    console.log(`Successfully set up the React + TypeScript project: ${projectName}`);
};

export default setupReactProject;