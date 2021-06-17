# learn-test-tools

# URL
- [Dockerイメージ](https://github.com/cypress-io/cypress-docker-images)

# Cypress

## 初回起動

- コンテナ起動

```
$ docker-compose up -d
```

- パッケージインストール

```
$ docker-compose exec cypress npm run install 
```

- インストール確認

```
$ docker-compose exec cypress npm run cypress:verify
```

## テスト実行

```
$ docker-compose exec cypress npm run cypress:run
```

# TestCafe

## 初回起動

- コンテナ起動

```
$ docker-compose up -d
```

- パッケージインストール

```
$ docker-compose exec testcafe npm run install 
```
