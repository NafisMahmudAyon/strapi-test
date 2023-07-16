'use strict';

/**
 * daily-expense controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::daily-expense.daily-expense');
