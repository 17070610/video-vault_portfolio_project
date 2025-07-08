const Joi = require("joi");
const mongoose = require("mongoose");

const Customer = mongoose.model("Genre", new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  isGold: {
    type: Boolean,
    default: false,
  },
  contact: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
}));

function validateCustomer(customer) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    phone: Joi.string().min(3).max(50).required(),
    isGold: Joi.boolean()
  });
  return { error } = schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = validateCustomer;