


# Expense Tracker React App

This is a simple yet powerful expense tracker application built with React. It helps you manage your income and expenses, providing a clear overview of your financial situation.

## Features

*   **Add, Edit, and Delete Transactions:** Easily add new transactions, update existing ones, or remove them as needed.
*   **Financial Summary:** Get a quick summary of your total income, expenses, and current balance.
*   **Transaction History:** View a list of all your past transactions with details like description, amount, category, and date.
*   **Statistical Insights:** Visualize your spending habits with charts and graphs on the stats page.
*   **User-Friendly Interface:** A clean and intuitive interface that makes tracking your finances a breeze.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **React Router:** For handling routing and navigation within the application.
*   **TypeScript:** For adding static typing to JavaScript.
*   **Bootstrap:** For styling and creating a responsive layout.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your system.

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/lalitkumar-ai/expense-react-app.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd expense-react-app
    ```

3.  **Install the dependencies:**

    Using npm:
    ```sh
    npm install
    ```

    Using Yarn:
    ```sh
    yarn install
    ```

### Running the Application

Once the dependencies are installed, you can start the development server.

Using npm:
  ```sh
  npm start
 ```

Using Yarn:
``` sh
yarn start
```




*   **`src/components/`**: Contains reusable components like the navigation bar.
*   **`src/pages/`**: Contains the main pages of the application, such as the dashboard and stats page.
*   **`src/types/`**: Contains TypeScript type definitions, like the `ITransaction` interface.
*   **`App.tsx`**: The main application component that handles routing and state management.
*   **`index.tsx`**: The entry point of the application.

### Functionality

#### Dashboard
The main dashboard displays a summary of your finances, including your total income, expenses, and current balance. You can also add new transactions and view a list of all your existing transactions.

#### Adding a Transaction
To add a new transaction, simply fill out the form on the dashboard with the description, amount, and category, and then click the "Add Transaction" button.

#### Editing and Deleting Transactions
You can edit or delete any transaction directly from the transaction list on the dashboard. Click the "Edit" button to modify a transaction's details or the "Delete" button to remove it permanently.

#### Stats Page
The stats page provides a visual representation of your financial data, helping you understand where your money is going. It includes charts and graphs that break down your expenses by category.\
