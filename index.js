const Koa = require('koa');
const Router = require('koa-router');
const log = require('koa-logger');
const responseTime = require('./responseTime');

const app = new Koa();
const port = 3000;

// simple logger
app.use(async (ctx, next) => {
    await next();
    console.log(ctx.state);
});

app.use(responseTime);

// response
app.use(async ctx => {
    ctx.body = 'I love middleware';
});

app.listen(port, () => {
    console.log(`Server is running on ${port} for ${app.env} `);
});


