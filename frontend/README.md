# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Here's a sample README for your project. This README covers essential details such as project description, setup instructions, and usage guidelines. You can adjust it based on your project's specific needs.

---

# Toko Online Kami

Toko Online Kami is a modern online shopping application built with React and Chakra UI. This application allows users to browse products, view product details, add items to the cart, and proceed to checkout. Admins can manage products and view orders.

## Features

- **Home Page**: Welcome message and navigation to products.
- **Products Page**: Lists all products with sorting options.
- **Product Detail Page**: Displays detailed information about each product.
- **Cart**: View items in the cart, remove items, and proceed to checkout.
- **Admin Dashboard**: (if applicable) Manage products and view orders.
- **Responsive Design**: Optimized for both mobile and desktop views.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: Declarative routing for React.js applications.
- **Express.js**: Backend framework for Node.js (for the API server).

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm or Yarn

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/toko-online-kami.git
   cd toko-online-kami
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root of your project and add the following:

   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Run the Application**

   ```bash
   npm start
   # or
   yarn start
   ```

   This will start the development server and open the application in your default web browser.

## Usage

- **Home Page**: Navigate to the home page to see the welcome message and main navigation.
- **Products Page**: Browse the list of products and use the sort button to arrange products by price.
- **Product Detail Page**: Click on a product to view detailed information and add it to your cart.
- **Cart**: Access the cart to review items, remove them if needed, and proceed to checkout.

## Contributing

1. **Fork the Repository**
2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/your-feature
   ```

5. **Create a Pull Request**

   Submit a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to contact me:

- **Name**: Dhimas Aditya Pratama
- **Email**: your-email@example.com
- **GitHub**: [yourusername](https://github.com/yourusername)

---

Feel free to adjust the sections based on what’s most relevant to your project.
