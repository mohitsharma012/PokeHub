# PokeHub

PokeHub is a React application built with Vite that displays a list of Pokémon in a card format. Users can search for specific Pokémon and view detailed information in a popup when a card is clicked.

## Features

- **Pokémon Card Display**: Displays Pokémon in a card layout with basic information.
- **Search Functionality**: Allows users to search for Pokémon by name.
- **Detailed View**: Shows detailed information in a popup when a card is clicked.

## Demo

You can view a live demo of the application [here](#). *(Replace with actual URL if available)*

## Getting Started

To get started with PokeHub, follow these steps:

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/pokehub.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd pokehub
   ```

3. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

To start the development server and view the application in your browser:

```bash
npm run dev
# or
yarn dev
```

Open `http://localhost:5173` in your browser to see the application.

### Project Structure

- `src/`
  - `assets/` - Contains asset files (e.g., logos)
  - `components/` - Contains React components:
    - `Card.js` - Displays individual Pokémon card.
    - `Navbar.js` - Navigation bar component.
  - `App.css` - Styles for the App component.
  - `App.js` - Main React component that contains the application logic.
  - `main.jsx` - Entry point for the React application.
- `public/` - Public assets (e.g., index.html).
- `vite.config.js` - Vite configuration file.

### API

The application uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data.

- **Endpoint:** `https://pokeapi.co/api/v2/pokemon`
- **Parameters:**
  - `limit`: Number of Pokémon to fetch per page (default is 20).

### Usage

1. **Search for Pokémon**: Use the search bar to filter Pokémon by name.
2. **View Pokémon Details**: Click on a Pokémon card to view detailed information in a popup.

### Contributing

Feel free to contribute to this project by submitting issues or pull requests.

1. **Fork the repository.**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes and commit:**

   ```bash
   git add .
   git commit -m "Add your message here"
   ```

4. **Push to your forked repository:**

   ```bash
   git push origin feature/your-feature
   ```

5. **Create a pull request on GitHub.**

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

If you have any questions or suggestions, feel free to reach out to:

- Mohit Sharma - [stayer.mohit@gmail.com]

---

Thank you for checking out PokeHub!