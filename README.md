# SDK Generation Tests

This repo is for testing SDK generators Speakeasy and Stainless.

This is a companion repo to the [In Depth: Speakeasy vs Stainless](https://speakeasyapi.dev/post/speakeasy-vs-stainless) blog post by Speakeasy.

1. Clone this repository and navigate to the root directory.

2. Install the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy?tab=readme-ov-file#installation) from GitHub, or using Homebrew (macOS):

```bash
brew install speakeasy
```

3. Authenticate with Speakeasy:

```bash
speakeasy auth login
```

4. Install [Bun](https://bun.sh/)

5. Generate the Speakeasy SDK:

```bash
speakeasy generate sdk
```

6. Install the [Stainless CLI](https://www.stainless.com/docs/getting-started/quickstart-cli#install-the-cli):

```bash
brew install stainless-api/tap/stl
```

7. Authenticate with Stainless:

```bash
stl auth login
```

8. Create the project:

```bash
stl init
```

You will be prompted to enter:
- Organization name
- Project name (`techbooks-stainless-typescript`)
- Language (TypeScript)
- The path to the OpenAPI spec file (`./openapi.yaml`)

9. Link the Speakeasy SDK using Bun:

```bash
bun link
```

 10. Build the Stainless SDK:

```bash
cd ../techbooks-stainless-typescript
yarn install
yarn run build
```

11. Link the Stainless SDK using Bun:

```bash
cd dist
bun link
```

11. Install [Prism](https://github.com/stoplightio/prism):

```bash
npm install -g @stoplight/prism-cli
```

12. Start the Prism mock server:

```bash
cd ../../..
prism mock openapi.yaml
```

13. In a new terminal, run the tests:

```bash
cd sdk-tests
bun test
```

14. Compare the results of the tests.