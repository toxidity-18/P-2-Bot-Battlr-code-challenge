# BOT-LIST

Welcome to **BOT-LIST**, a React web application where you can build and manage your own bot army. As the galactic overlord, you can browse available bots, enlist them into your army, and discharge them as needed.

## Description

**BOT-LIST** is designed to allow users to:
- View a collection of available bots.
- Add bots to their personal army.
- Release bots from their army.
- Discharge bots from the system permanently.

## Project Setup

### Prerequisites

- [Vite](https://vitejs.dev)
- [JSON Server](https://github.com/typicode/json-server)

### Installation

1. **Clone the Repository**

    ```bash
    git clone <git@github.com:toxidity-18/P-2-Bot-Battlr-code-challenge.git>
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd bot-battlr
    ```

3. **Install Dependencies**

    Install the required npm packages:

    ```bash
    npm install
    ```

4. **Set Up the JSON Server**

    Create a `db.json` file in the project root directory with the following content:

    ```json
    {
      "bots": [
        // Add more bots as needed
      ]
    }
    ```

    Install JSON Server globally if you haven’t already:

    ```bash
    npm install -g json-server
    ```

    Start the JSON Server:

    ```bash
    json-server --watch db.json
    ```

    The server will run on `http://localhost:3000/bots`.

5. **Run the React Application**

    In a separate terminal window, start the React application:

    ```bash
    npm start
    ```

    The application will open in your default web browser, typically at `http://localhost:51713`.

## Usage

- **BotCollection**: View all available bots and add them to your army by clicking the "Add to Army" button.
- **YourBotArmy**: See the bots currently enlisted in your army. You can release them by clicking the "Release" button or discharge them permanently using the red "x" button.

## Development

Feel free to contribute or modify the project as needed. Here are some key components:

- **BotCard**: Displays individual bot details and action buttons.
- **BotCollection**: Fetches and lists all bots from the JSON Server.
- **YourBotArmy**: Manages and displays the user's army of bots.
- **App**: Main component handling state and interactions between BotCollection and YourBotArmy.

## Testing

Ensure all functionalities (viewing bots, adding to army, releasing, and discharging) work as expected. Make sure to test different scenarios to ensure robustness.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- **React** - A JavaScript library for building user interfaces.
- **JSON Server** - A simple tool for setting up a REST API with a JSON file.
- **Vite** - A build tool that provides a robust configuration for React applications.

For any issues or questions, please reach out to me via GitHub.




