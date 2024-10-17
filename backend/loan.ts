import mongoose, { Schema, Document } from 'mongoose';

interface ILoan extends Document {
    userId: string;
    amount: number;
    status: string;
    date: Date;
}

const LoanSchema: Schema = new Schema({
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'pending' },
    date: { type: Date, default: Date.now }
});

export default mongoose.model<ILoan>('Loan', LoanSchema);

