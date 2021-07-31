# apollo_prisma_postgres_try1

## install npm package

```bash
npm install
```

## deploy data source DB

**premise: existed k8s**

**execute command for postgres**

```bash
cat db.sh
```

## migrate DB, create schema for apollo client

```bash
$(npm bin)/prisma migrate dev
```

## start app

```bash
npm run dev
```
