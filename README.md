# Twitch Translator Bot

bot for Twitch that translates chat messages in real-time. It allows viewers from different languages to communicate more efficiently during live streams.

## Features

- Automatic translation of chat messages to the configured language.
- Support for multiple languages.
- Easy integration with Twitch channels.

## Prerequisites

- Node.js installed (version 16 or higher).
- A Twitch account with developer credentials.
- A translation API key (DeepL).

## How to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/daltonfontes/twt-bot-translate.git
    cd twt-bot-translate
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Configure the environment variables:
    Create a `.env` file in the root of the project and add the following information:
    ```
    TWITCH_CLIENT_ID=your_client_id
    TWITCH_CLIENT_SECRET=your_client_secret
    TWITCH_BOT_USERNAME=bot_username
    TWITCH_BOT_OAUTH_TOKEN=oauth:your_token
    TRANSLATION_API_KEY=your_api_key
    TARGET_LANGUAGE=target_language (e.g., en, es, pt)
    ```

4. Start the bot:
    ```bash
    npm start
    ```

5. Add the bot as a moderator in your Twitch channel so it can read and send messages in the chat.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
