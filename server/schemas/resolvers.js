const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  // Resolvers for any Queries

  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async () => {},

    product: async () => {},
  },
};

module.exports = resolvers;
