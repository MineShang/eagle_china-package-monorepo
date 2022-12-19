### ec_china-package-monorepo

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web`applications

### Install

1. Add a .npmrc file

```config
@mineshang:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<PERSONAL_ACCESS_TOKEN>
```

2. Install dependencies

```bash
pnpm i @mineshang/eagle_china-package-monorepo@<version>
```

### Build

To build all apps and packages, run the following command:

```
cd ec_china-package-monorepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd ec_china-package-monorepo
pnpm run dev
```

### Deployment

1. Install dependencies

```sh
pnpm i
```

2. Add & Commit

```sh
git add .
git commit -m "[PSEP-XXXX] [commit message/description]"
```

3. Run changeset

```sh
pnpm run changeset
```

4. Run changeset version

```sh
pnpm run version
```

5. Add & Commit

```sh
git add .
git commit -m "[PSEP-XXXX] [commit message/description]"
```

6. Pull Request

```bash
npm run build
```

## 发布进度

<https://github.com/kering-technologies/eagle_china-package-monorepo/actions>
