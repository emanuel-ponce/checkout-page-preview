# Stripe Checkout Page Preview Challenge

This project is a challenge to simulate the checkout page preview of Stripe. It is implemented with Next.js and integrated with Module Federation for implementing micro frontends.

## Repositories

The project is divided into two repositories:
- **Main Repository (Checkout Page Preview)**: This repository contains the main checkout page preview implemented with Next.js and Module Federation.
- **Secondary Repository (Checkout Page)**: This repository contains the checkout page.

## Prerequisites

Before running the project, make sure you have the following installed:
- Node.js
- npm or yarn

## Running the Project

To run the project, follow these steps:

1. Navigate to the main repository (Checkout Page Preview) and install the dependencies:

    ```bash
    npm install
    ```

2. Navigate to the secondary repository (Checkout Page) and install the dependencies:

    ```bash
    npm install
    ```

3. Run both projects concurrently with:

    ```bash
    npm run dev
    ```

    - The Checkout Page Preview will run on port 3000.
    - The Checkout Page will run on port 3001.

4. Optionally, you can run the JSON server to mock the API server:

    ```bash
    npm run json-server
    ```

    - JSON server will run on port 3000.

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Running Tests

To run the unit tests, execute the following command in the main repository:

```bash
npm run test
