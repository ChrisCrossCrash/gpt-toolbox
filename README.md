# GPT Toolbox

An `npx`-executable toolbox for working with the OpenAI API.

## Usage

To start a new chat session, simply run:

```sh
npx gpt-toolbox
```

> [!NOTE]
> The `OPENAI_API_KEY` environment must be available in the environment where the script is ran. See the [OpenAI API documentation for more information](https://platform.openai.com/docs/quickstart?context=node) for more information.

## Development

This project uses GitHub actions to automatically publish new versions to npm. To publish a new version, use `npm version <major|minor|patch>`. This will automatically create a new commit and tag. After pushing the changes to GitHub, create a new release for the new tag. This will trigger the GitHub action to publish the new version to npm.
