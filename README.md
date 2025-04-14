# SvelteKit-Tailwindcss-Cloudflare Starter Template

## Use this template

Click `Use this tempalte` on your Github UI to use this template. Or, in your terminal, run:

```bash
npx degit github:vnphanquang/template-sveltekit my-new-project
# or, with pnpm:
pnpm dlx degit github:vnphanquang/template-sveltekit my-new-project
```

> [!TIP]
> Search for `TODO:` and add customization for your site as needed

## Prerequisites

| Dependency | Installation                            | Description                     |
| ---------- | --------------------------------------- | ------------------------------- |
| [node]     | recommended via [volta]                 | JS runtime                      |
| [pnpm]     | [follow guide on website][pnpm.install] | alternative to `npm` and `yarn` |
| [lefthook] | [follow guide at repo][lefthook]        | git hooks manager               |

See [package.json] for engine specification. At project root, run:

```bash
pnpm boot
```

## Development

Simply run `pnpm dev` on project root. See [package.json] for available scripts.

## Recommended VSCode Extensions

If you use VSCode, search for `@recommended` in the "Extension" panel for quick installation (look for "Workspace Recommendations"). To extend the `@recommended` list, add the extension ID to the `extensions` array in [.vscode/extensions.json].

## Code Style Enforcement

The project uses [eslint] and [prettier] for code linting and formatting. Make sure to install necessary plugins or integrations in your code editor.

[lefthook] is setup to run format and lint checks as a `pre-commit` [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

To bypass hook (not recommended, for admin only), run `git commit` with the `--no-verify` flag.

<!-- LOCAL -->

[.vscode/extensions.json]: ../.vscode/extensions.json
[package.json]: ./package.json

<!-- TECHNOLOGIES -->

[lefthook]: https://github.com/evilmartians/lefthook
[eslint]: https://eslint.org
[prettier]: https://prettier.io
[node]: https://nodejs.org/en/
[nvm]: https://github.com/nvm-sh/nvm
[volta]: https://volta.sh/
[pnpm]: https://pnpm.io/
[pnpm.install]: https://pnpm.io/installation

<!-- OTHERS -->

[conventionalcommits]: https://www.conventionalcommits.org/en/v1.0.0/
