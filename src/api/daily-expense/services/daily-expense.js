'use strict';

/**
 * daily-expense service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-expense.daily-expense');
