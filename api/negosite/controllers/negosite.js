"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const { user } = ctx.state;
    const entities = strapi.query("negosite").find({ website: user.id });
    return entities;
  },
}; // BIND LINK TO USER
