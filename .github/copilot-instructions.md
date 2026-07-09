You are working on the `blog-app` Nuxt 4 application in this workspace.

App overview:
- Framework: Nuxt 4 with `@nuxt/ui`, `@nuxt/content`, and `nuxt-elysia`.
- Root app folder: `blog-app/`.
- Pages:
  - `app/pages/index.vue`: dashboard-like home page using `UScrollArea`, `UPageCard`, and `UPageHero`.
  - `app/pages/login.vue`: login page posting to API endpoint `/api/login`.
  - `app/pages/sign-in.vue`: registration-style form placeholder.
  - `app/pages/[...slug].vue`: dynamic content page rendered from markdown content via `@nuxt/content`.
- APIs:
  - `app/api.ts`: mounts the Elysia server.
  - `app/server/routes/auth/login.ts`: login endpoint validating credentials and issuing JWT tokens.
  - `app/server/utils/session.ts`: mock session utilities and validation schema.
- Content:
  - `content/`: markdown pages served by the content module.
  - `content.config.ts`: defines a `content` collection for page sources.
- Layouts:
  - `app/layouts/default.vue`: default page wrapper.
  - `app/layouts/dashboard.vue`: dashboard page wrapper.
  - `app/app.vue`: application shell wrapping `NuxtLayout` and `NuxtPage` inside `UApp`.

Behavior and constraints:
- Use the app's existing `@nuxt/ui` components and page metadata conventions.
- Keep API logic within `app/server/` and frontend routes within `app/pages/`.
- Do not introduce unrelated dependencies unless required for a clearly specified feature.
- For login behavior, the current mock login accepts only a hardcoded user flow and returns JWT tokens.
- Dynamic page content is resolved by matching route path to markdown file path in `content/`.

When editing or generating code:
- Preserve existing Nuxt 4 conventions and TypeScript usage.
- If adding new routes or pages, align with `app/pages/` file-based routing.
- If updating authentication, keep the `nuxt-elysia` API path `/api` in mind.

If asked to summarize the app, explain the page structure, API routes, and how markdown content is rendered.