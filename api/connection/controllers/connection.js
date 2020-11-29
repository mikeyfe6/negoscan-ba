"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const { user } = ctx.state;
    const entities = strapi.query("connection").find({ links: user.id });
    return entities;
  },
}; // BIND LINK TO USER
