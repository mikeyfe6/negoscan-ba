module.exports = async (ctx, next) => {
  ctx.request.body.website = ctx.state.user.id;
  return await next();
}; // AUTOMATIC USER BINDING
