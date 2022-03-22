const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    date: { type: Date, required: [true, 'date is required'] },
    access: {
      type: Number,
      required: [true, 'this field is required'],
    },
    accessAlert: {
      type: Boolean,
      required: [true, 'this field is required'],
    },
    keyStone: {
      type: Number,
      required: [true, 'this field is required'],
    },
    keyStoneAlert: {
      type: Boolean,
      required: [true, 'this field is required'],
    },
    total_pos: {
      type: Number,
      required: [true, 'this field is required'],
    },
    in_transfer: {
      type: Number,
      required: [true, 'this field is required'],
    },
    transfer: {
      type: String,
      required: [true, 'this field is required'],
    },
    ex_ceo: {
      type: Number,
      required: [true, 'this field is required'],
    },
    ex_transport: {
      type: String,
      required: [true, 'this field is required'],
    },
    ex_fuel: {
      type: Number,
      required: [true, 'this field is required'],
    },
    ex_others: {
      type: Number,
      required: [true, 'this field is required'],
    },
    good_purchased: {
      type: Number,
      required: [true, 'this field is required'],
    },
    p_cash_balance: {
      type: Number,
      required: [true, 'this field is required'],
    },
    bank_alert: {
      type: String,
      required: [true, 'this field is required'],
    },
    reversals: {
      type: String,
      required: [true, 'this field is required'],
    },
    total_daily_expenses: {
      type: Number,
      required: [true, 'this field is required'],
    },
    sales_total: {
      type: Number,
      required: [true, 'this field is required'],
    },
    systembalance: {
      type: Number,
      required: [true, 'this field is required'],
    },
    difference: {
      type: Number,
      required: [true, 'this field is required'],
    },
    corrected_system_value: {
      type: String,
      required: [true, 'this field is required'],
    },
    corrected_difference: {
      type: String,
      required: [true, 'this field is required'],
    },
    noteable_transactions: {
      type: String,
      required: [true, 'this field is required'],
    },
    true_excess: {
      type: String,
      required: [true, 'this field is required'],
    },
    shortage: {
      type: String,
      required: [true, 'this field is required'],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Product = model('Product', productSchema);

module.exports = Product;
