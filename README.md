# monorepo

## 安装

1. 主项目增加 .npmrc

```config
@mineshang:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<PERSONAL_ACCESS_TOKEN>
```

2. 安装依赖

```bash
pnpm i @mineshang/eagle_china-package-monorepo@<version>
```

## 开发

```bash
pnpm run dev
```

## 发布

1. 安装依赖

```sh
pnpm i
```

2. 修改代码并提交

```sh
git add .
git commit -m "票号 描述"
```

3. 执行`changeset`并选择相应的修改范围

```sh
pnpm run changeset
```

4. 执行`changeset version`

```sh
pnpm run version
```

5. 提交

```sh
git add .
git commit -m "票号 描述"
```

6. 提交 Pull Request

## 本地打包

```bash
npm run build
```

## 发布进度

<https://github.com/kering-technologies/eagle_china-package-monorepo/actions>
