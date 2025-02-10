# Dwarflight

Simpler [component overrides](https://starlight.astro.build/guides/overriding-components/) for [Astro](https://astro.build/) [Starlight](https://starlight.astro.build/).

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

### Commands

> [!WARNING]
> This repo uses the [Deno](https://deno.com/) runtime.

All commands are run from the root of the project, from a terminal:

| command                              | action                                                                                        |
| :----------------------------------- | :-------------------------------------------------------------------------------------------- |
| `deno install --allow-scripts`       | Installs dependencies                                                                         |
| `deno task dev`                      | Starts local dev server at `localhost:4321`                                                   |
| `deno task build`                    | Build your production site to `./dist/`                                                       |
| `deno task preview`                  | Preview your build locally, before deploying                                                  |
| `deno task astro ...`                | Run CLI commands like `astro add`, `astro check`                                              |
| `deno task astro -- --help`          | Get help using the Astro CLI                                                                  |
| `deno run -A npm:@astrojs/upgrade`   | _"Update"_ **Astro** dependencies, use the command below to bump or install the dependencies. |
| `deno add npm:<package>[@<version>]` | Add/Upgrade package                                                                           |

## To Do

- [ ] Create stable overrides
