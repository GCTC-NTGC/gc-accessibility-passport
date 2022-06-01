This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/user](http://localhost:3000/api/user). This endpoint can be edited in `pages/api/user.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Translation Utility script

This project contains a script (`./tools/checkIntl.js`) to help manage your react-intl translations files. It has been written to run without any dependencies or compilation. It is expected to be used along with the [formatjs cli](https://formatjs.io/docs/tooling/cli).

### Directions

The checkIntl script can be run with different flags and options. For more details on how individual options work, see the checkIntl file itself. In practice, it is easiest to save the commands, with options included, as **package.json** scripts.

For example, to ensure translations in the project are up to date:

1. Run `npm run intl-extract`. This script parses the `/pages` and `/components` folders for all the react-intl messages. The messages are injected into **en.json**.
2. Run `npm run check-intl`. This generates a **untranslated.json** file in the project's `/lang` folder.
3. Send **untranslated.json** for translation, asking them to only translate the "defaultMessage" fields.
4. Save the translated version which comes back as **newTranslations.json** in the same lang folder.
5. Run `npm run check-intl-merge`. This merges the **newTranslations.json** file with the **fr.json** adding the new translated messages, and updating any old ones too.
6. If you see any warnings about untranslated entries which simply match in English and French, add the key to the array in **whitelist.json** and repeat step 4.

### On source control

Only **fr.json** and **whitelist.json** need to be checked into source control. The other files created during this process are generated as needed or only used to communicate with translators, should be added to .gitignore, and may be deleted after use.
