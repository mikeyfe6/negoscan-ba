module.exports = async (ctx, next) => {
  ctx.request.body.links = ctx.state.user.id;
  return await next();
}; // AUTOMATIC USER BINDING
