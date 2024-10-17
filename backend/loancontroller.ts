import { Request, Response } from 'express';
import Loan from '../models/loan';

export const createLoan = async (req: Request, res: Response) => {
    try {
        const loan = new Loan(req.body);
        await loan.save();
        res.status(201).json(loan);
    } catch (error) {
        res.status(500).json({ message: 'Error creating loan', error });
    }
};

export const getLoans = async (req: Request, res: Response) => {
    try {
        const loans = await Loan.find();
        res.status(200).json(loans);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching loans', error });
    }
};

