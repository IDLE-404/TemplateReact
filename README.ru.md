# CodeTou

<p align="center">
  <a href="README.md">English</a> | <b>Русский</b>
</p>

Шаблон на React: роутинг, вход, регистрация, роли пользователей и два языка (русский и английский).

Стек: React 19, TypeScript, Vite, React Router, CSS Modules, react-icons.

## Запуск

```bash
npm install
npm run dev
```

Другие команды:

- `npm run build` — сборка в папку `dist`
- `npm run preview` — запустить собранную версию
- `npm run lint` — проверить код через ESLint

Демо-админ: `admin@mail.com` / `admin`

## Структура

```
public/                 статика (видео, иконки)
src/
  app/
    App.tsx
    router.tsx          все маршруты
    providers/          AuthProvider, I18nProvider
  components/           компоненты, которые нужны на нескольких страницах
  layouts/
    MainLayout/         лейаут с шапкой
    AuthLayout/         лейаут для входа и регистрации
  pages/
    home/
    login/
    register/
    profile/
    admin/
  shared/
    auth/               контекст авторизации, useAuth и тип User
    i18n/               en.ts, ru.ts, useI18n
    hooks/              useReveal
  styles/
    global.css
    variables.css       цвета, скругления, шрифты
```

## Как устроены страницы

Страница собирается из компонентов. У каждой страницы своя папка: файл страницы, её стили и папка `components`.
У каждого компонента тоже своя папка и свои стили.

```
pages/home/
  HomePage.tsx
  HomePage.module.css
  components/
    Hero/
      Hero.tsx
      Hero.module.css
    About/
    ...
```

Если компонент нужен больше чем на одной странице, он лежит в `src/components`, устроен так же.

## Как добавить страницу

1. Создай папку `src/pages/my-page` с файлами `MyPage.tsx` и `MyPage.module.css`.
2. Части страницы положи в `src/pages/my-page/components`.
3. Добавь маршрут в `src/app/router.tsx`.

## Роли

Из коробки есть две роли: `admin` и `user`. Новый пользователь получает `user`.
Админ на странице `/admin` может добавлять роли и менять роль любому пользователю.

Чтобы закрыть маршрут, оберни его в `RequireRole`:

```tsx
{
  element: <RequireRole />,
  children: [{ path: 'profile', element: <ProfilePage /> }],
}
```

Без `roles` страницу видит любой вошедший пользователь.
С `roles` — только эти роли:

```tsx
{
  element: <RequireRole roles={['admin', 'manager']} />,
  children: [{ path: 'reports', element: <ReportsPage /> }],
}
```

Гостя отправит на `/auth/login`. Пользователя без нужной роли — на `/`.

Текущий пользователь в компоненте:

```tsx
const { user, logout } = useAuth()
```

Важно: бэкенда пока нет. Пользователи, роли и пароли хранятся в `localStorage`.
Это только для демо. Когда появится API, замени функции в `src/app/providers/AuthProvider.tsx` на запросы, а роли проверяй на сервере.

## Языки

Тексты лежат в `src/shared/i18n/en.ts` и `src/shared/i18n/ru.ts`.
Ключи в обоих файлах одинаковые. Если в `ru.ts` не хватает ключа, TypeScript покажет ошибку.

В компоненте:

```tsx
const { t, lang, setLang } = useI18n()

return <h1>{t.profile.title}</h1>
```

Чтобы добавить текст, допиши ключ в `en.ts`, потом в `ru.ts`.
Выбранный язык сохраняется в браузере. При первом заходе он берётся из языка браузера.

## Анимации при скролле

Вызови `useReveal()` на странице и добавь элементу `data-reveal`. Элемент появится, когда до него доскроллят.

- `data-reveal` — выезжает снизу
- `data-reveal="scale"` — немного увеличивается
- `data-reveal="left"` / `data-reveal="right"` — выезжает сбоку

Добавь родителю `data-stagger`, и дети будут появляться по очереди.
Если в системе включено «уменьшение движения», анимации отключаются.
