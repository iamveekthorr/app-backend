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
    keyStone: { type: Number, default: 0 },
    keyStone_alert: { type: Boolean },
    in_transfer: { type: Number, default: 0 },
    transfer: { type: Boolean },
    ex_ceo: { type: Number, default: 0 },
    ex_transport: { type: Number, default: 0 },
    ex_fuel: { type: Number, default: 0 },
    ex_others: { type: Number, default: 0 },
    goods_purchases: { type: Number, default: 0 },
    p_cash_balance: { type: Number, default: 0 },
    bank_alert: { type: Boolean },
    reversals: {
      type: Number,
      default: 0,
    },
    system_balance: {
      type: Number,
      default: 0,
    },
    corrected_system_value: {
      type: Number,
      default: 0,
    },
    corrected_difference: {
      type: Number,
      default: 0,
    },
    notable_transactions: {
      type: Number,
      default: 0,
    },
    true_excess: {
      type: Number,
      default: 0,
    },
    shortage: {
      type: Number,
      default: 0,
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

productSchema.virtual('sales_total').get(function () {
  sales_total =
    this.in_transfer +
    this.ex_fuel +
    this.ex_others +
    this.goods_purchases +
    this.p_cash_balance +
    this.reversals +
    this.total_pos;
  return sales_total;
});

productSchema.virtual('total_pos').get(function () {
  total_pos = this.access + this.keyStone;
  return total_pos;
});

productSchema.virtual('differences').get(function () {
  return this.sales_total - this.system_balance;
});

productSchema.virtual('total_daily_expenses').get(function () {
  return this.ex_ceo + this.ex_others + this.goods_purchases;
});

const Product = model('Product', productSchema);

module.exports = Product;
