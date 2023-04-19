# Anonymous Chat App Server

This is the backend server for the Anonymous Chat App, a simple chat application that allows users to chat anonymously with each other. This server is built using Node.js and Express.js, and is responsible for handling incoming requests, processing them, and returning responses.

## Technologies Used

- Node.js: A JavaScript runtime that allows developers to build server-side applications using JavaScript.
- Express.js: A popular Node.js framework used for building web applications and APIs.
- API: A set of protocols and tools for building software applications that interact with each other.

## Setup Instructions

To set up and run this project, follow these steps:

1. Clone the repository: `git clone https://github.com/yogesh19k/Anonymous-chat-app-server.git`
2. Install Node.js if you haven't already.
3. Navigate to the project directory: `cd anonymous-chat-app-server`
4. Install the dependencies: `npm install`
5. Start the server: `npm start`
6. The server should now be running on `http://localhost:3000`.

Alternatively, you can access a live demo of this project at [https://anonymous-chatapp.glitch.me/](https://anonymous-chatapp.glitch.me/).

## Frontend

The frontend of this project is available at [https://github.com/yogesh19k/Anonymous-chat-app-React](https://github.com/yogesh19k/Anonymous-chat-app-React).

## API Endpoints

This server provides the following API endpoints:

- `POST /api`: This endpoint adds a new item to the `allData` array. The request body should contain an object with three properties:  `id` (a string or number), `name` (a string), and `content` (a string). The endpoint generates a unique identicon image using the `name` property and adds it to the `img` property of the new item, along with a `timestamp` in the timeStamp property. The response will be a string "ok" if the operation was successful.

- `GET /api`: This endpoint returns a JSON array of all the items in the `allData` array, which includes the `id`, `img`, `content`, and `timeStamp` properties for each item.

## Contributing

Contributions are always welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on this repository. If you'd like to contribute code, please create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
