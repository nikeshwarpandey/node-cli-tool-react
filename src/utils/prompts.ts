import inquirer from 'inquirer';

export const promptProjectName = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: (input) => input ? true : 'Project name cannot be empty.',
        },
    ]);
    return answers.projectName;
};

// Additional prompt functions can be added here as needed.