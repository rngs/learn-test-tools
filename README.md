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
$ docker-compose exec express npm install 
```

- インストール確認

```
$ docker-compose exec express $(npm bin)/cypress verify
```

## テスト実行

```
$ docker-compose exec express $(npm bin)/cypress run
```
