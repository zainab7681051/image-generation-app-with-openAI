# image-generation-app-with-openAI

This is a simple image generator built with Node.js and Express that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

###
live link: https://openai-images.onrender.com/

## Usage

create a `.env` and include port number and api key.

Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file.

Install the dependencies

```bash
yarn
```

Run server

```bash
yarn start
```

Visit `http://localhost:1000` in your browser.

The endpoint is at `POST http://localhost:1000/openai/create`.
