const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    date: {
      type: Date,
      required: [true, 'date is required'],
      unique: [
        true,
        'This email is already in use. Please use a different email address.',
      ],
    },
    access: { type: Number },
    access_alert: { type: Boolean },
    keyStone: { type: Number, default: 0.0 },
    keyStone_alert: { type: Boolean },
    total_pos: { type: Number, default: 0.0 },
    in_transfer: { type: Number, default: 0.0 },
    transfer: { type: Boolean },
    ex_ceo: { type: Number, default: 0.0 },
    ex_transport: { type: Number, default: 0.0 },
    ex_fuel: { type: Number, default: 0.0 },
    ex_others: {
      type: Number,
      default: 0.0,
    },
    goods_purchases: {
      type: Number,
      default: 0.0,
    },
    p_cash_balance: {
      type: Number,
      default: 0.0,
    },
    bank_alert: { type: Boolean },
    reversals: {
      type: Number,
      default: 0.0,
    },
    total_daily_expenses: {
      type: Number,
    },
    sales_total: {
      type: Number,
    },
    system_balance: {
      type: Number,
    },
    difference: {
      type: Number,
    },
    corrected_system_value: {
      type: Number,
    },
    corrected_difference: {
      type: Number,
    },
    notable_transactions: {
      type: Number,
    },
    true_excess: {
      type: Number,
    },
    shortage: {
      type: Number,
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
