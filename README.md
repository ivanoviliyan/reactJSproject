# React + Tailwind CSS Bar Management Project - Brief Documentation

## Installation

1. **Clone or Download the Project**  
   Download the project files or clone the repository to your local machine.

2. **Set up the Server**

    - Open a new terminal window.
    - Navigate to the `Backend` folder:
        ```bash
        cd Backend
        ```
    - Start the server using Node.js:
        ```bash
        npm start dev
        ```

3. **Set up the Client**
    - Open another terminal window.
    - Navigate to the `Frontend` folder:
        ```bash
        cd Frontend
        ```
    - Install the dependencies:
        ```bash
        npm install
        ```
    - Run the client with Vite:
        ```bash
        npm run dev
        ```
    - Open your browser and go to [http://localhost:5173/](http://localhost:5173/) to view the app.

## Overview

This project is a bar management application developed with ReactJS and Tailwind CSS. The application allows the user to view different categories of drinks (cocktails, beers, non-alcoholic drinks, coffee, and tea) and manage products in the bar's inventory. The user can interact with the product list, add new products, and manage product details.

**Key Features:**

-   Users can view the list of drinks categorized by type.
-   Users can manage the products by adding new items, editing, or deleting them.
-   Users have access to a responsive UI built with Tailwind CSS, providing a modern design.
-   Modals are used for managing product details and adding new products to the inventory.

## Project Structure

The project is organized into several directories to separate concerns and ensure scalability:

-   **`components`**: Contains reusable components such as `Navbar`, `Footer`, `ManageItem`, and more. These components are responsible for rendering the UI of the application and providing functionalities like managing products and displaying the bar's offerings.

-   **`contexts`**: Contains context files for managing the global state of the application, such as user authentication and the visibility of modals.

-   **`tailwind.config.js`**: Configuration file for customizing the default Tailwind CSS setup. It includes adding custom colors for different drink categories, such as cocktail and beer.

-   **`React Router`**: Used for client-side routing to enable smooth navigation between different views, like the home page, product management, and other sections of the app.

-   **`Tailwind CSS`**: The utility-first CSS framework used for styling the app, ensuring responsiveness and flexibility.

-   **`Fontawesome`**: Provides scalable, customizable icons for use in the UI, adding visual appeal and enhancing user experience.

## How the Application Works

-   The **Home Page** displays the bar's offerings and allows users to explore the different drink categories.
-   The **Product Management Page** enables admin users to add, edit, and delete products from the bar’s inventory. When a user clicks on "Add Product", a modal form (`ManageProduct`) is displayed for the user to enter details about the new product.
-   The **ManageProduct Modal** is conditionally rendered based on the `showManageProductModal` state, and it handles the form for adding new products to the inventory.
-   Data is dynamically rendered and updated on the page based on user interactions and the state of the application.
-   The application relies on React's state management to control visibility and interactions, such as showing or hiding modals and managing form inputs.
-   **Tailwind CSS** ensures a mobile-first, responsive layout with utility classes for styling.

---

## Additional Information

For more details, please refer to the official documentation of [React](https://reactjs.org/docs/getting-started.html) and [Tailwind CSS](https://tailwindcss.com/docs).
