
// response time middleware
module.exports =  async (ctx, next) => {
    const start = Date.now()
    await next();
    const rt = Date.now() - start;
    ctx.state.result = rt;
}