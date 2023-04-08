import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const MonthlyDataSchema = new Schema({
        month: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v / 100).toFixed(2),
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v / 100).toFixed(2),
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v / 100).toFixed(2),
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v / 100).toFixed(2),
        },
    },
    {toJSON: {getters: true}}
);

const DailyDataSchema = new Schema({
        date: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v / 100).toFixed(2),
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v / 100).toFixed(2),
        },
    },
    {toJSON: {getters: true}}
);

const KPISchema = new Schema({
    totalProfit: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v / 100).toFixed(2),
    },
    totalRevenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v / 100).toFixed(2),
    },
    totalExpenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => (v / 100).toFixed(2),
    },
    expensesByCategory: {
        type: Map,
        of: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => (v / 100).toFixed(2),
        }
    },
    monthlyData: [MonthlyDataSchema],
    dailyData: [DailyDataSchema],
});

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
