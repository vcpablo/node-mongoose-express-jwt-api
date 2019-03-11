import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PhoneSchema = new Schema({
  name: {
      type: String,
      required: 'Enter phone name'
  },
  number: {
      type: String,
      required: 'Enter a first phone number'
  },
  person: [{ type: Schema.Types.ObjectId, ref: 'Person' }],

  created_date: {
      type: Date,
      default: Date.now
  }
});