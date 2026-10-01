# CodeTou

<p align="center">
  <b>English</b> | <a href="README.ru.md">Русский</a>
</p>

React template with routing, login, registration, user roles and two languages (English and Russian).

Stack: React 19, TypeScript, Vite, React Router, CSS Modules, react-icons.

## Start

```bash
npm install
npm run dev
```

Other commands:

- `npm run build` — production build into `dist`
- `npm run preview` — run the built version
- `npm run lint` — check the code with ESLint

Demo admin account: `admin@mail.com` / `admin`

## Structure

```
public/                 static files (video, icons)
src/
  app/
    App.tsx
    router.tsx          all routes
    providers/          AuthProvider, I18nProvider, AppProviders
  components/           components used on several pages
  layouts/
    MainLayout/         layout with the header
    authLayout/         layout for login and registration
  pages/
    home/
    login/
    register/
    profile/
    admin/
  shared/
    auth/               auth context and useAuth
    i18n/               en.ts, ru.ts, useI18n
    hooks/              useReveal
    types/              shared types
    api/
    utils/
  styles/
    global.css
    variables.css       colors, radius, fonts
```

## How pages are built

A page is made of components. Each page has its own folder with the page file, the page styles and a `components` folder.
Each component also has its own folder with its own styles.

```
pages/home/
  HomePage.tsx
  HomePage.module.css
  components/
    Hero/
      Hero.tsx
      Hero.module.css
      index.ts
    About/
    ...
```

If a component is used on more than one page, put it in `src/components` with the same folder layout.

## Add a page

1. Create a folder `src/pages/my-page` with `MyPage.tsx` and `MyPage.module.css`.
2. Put the page parts in `src/pages/my-page/components`.
3. Add the route in `src/app/router.tsx`.

## Roles

There are two roles out of the box: `admin` and `user`. New users get `user`.
The admin can add new roles and change user roles on the `/admin` page.

To protect a route, wrap it in `RequireRole`:

```tsx
{
  element: <RequireRole />,
  children: [{ path: 'profile', element: <ProfilePage /> }],
}
```

Without `roles`, any logged in user can open the page.
With `roles`, only those roles can:

```tsx
{
  element: <RequireRole roles={['admin', 'manager']} />,
  children: [{ path: 'reports', element: <ReportsPage /> }],
}
```

A guest is sent to `/auth/login`. A user without the right role is sent to `/`.

Current user in a component:

```tsx
const { user, logout } = useAuth()
```

Important: there is no backend yet. Users, roles and passwords are stored in `localStorage`.
This is only for the demo. When you add an API, replace the functions in `src/app/providers/AuthProvider.tsx` with requests and check roles on the server.

## Languages

Texts are in `src/shared/i18n/en.ts` and `src/shared/i18n/ru.ts`.
Both files have the same keys. If a key is missing in `ru.ts`, TypeScript will show an error.

In a component:

```tsx
const { t, lang, setLang } = useI18n()

return <h1>{t.profile.title}</h1>
```

To add a text, add the key to `en.ts` and then to `ru.ts`.
The selected language is saved in the browser. On the first visit it is taken from the browser language.

## Scroll animations

Call `useReveal()` on the page and add `data-reveal` to an element. It will appear when it scrolls into view.

- `data-reveal` — slides up
- `data-reveal="scale"` — grows a little
- `data-reveal="left"` / `data-reveal="right"` — slides from the side

Add `data-stagger` to the parent to show the children one after another.
Animations are turned off if the user has "reduce motion" enabled in the system.
