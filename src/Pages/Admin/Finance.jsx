import React from "react";
import { FinancialOverviewCards } from "@/components/Admin/FinancialOverviewCards";
import { RevenueChart } from "@/components/Admin/RevenueChart";
import { TransactionsTable } from "@/components/Admin/TransactionsTable";

// Mock financial data
const financialOverview = {
  totalRevenue: 150000,
  monthlyRecurringRevenue: 12000,
  averageRevenuePerUser: 50,
  churnRate: 2.5,
};

const revenueData = [
  { month: "Jan", revenue: 10000 },
  { month: "Feb", revenue: 12000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 18000 },
  { month: "May", revenue: 20000 },
  { month: "Jun", revenue: 22000 },
];

const transactions = [
  {
    id: 1,
    date: "2023-11-15",
    description: "Course Subscription - Advanced React",
    amount: 99.99,
    status: "Completed",
  },
  {
    id: 2,
    date: "2023-11-14",
    description: "Course Purchase - Python for Beginners",
    amount: 49.99,
    status: "Completed",
  },
  {
    id: 3,
    date: "2023-11-13",
    description: "Monthly Membership Fee",
    amount: 19.99,
    status: "Completed",
  },
  {
    id: 4,
    date: "2023-11-12",
    description: "Course Subscription - Data Science Bootcamp",
    amount: 199.99,
    status: "Pending",
  },
  {
    id: 5,
    date: "2023-11-11",
    description: "Course Purchase - JavaScript Fundamentals",
    amount: 29.99,
    status: "Completed",
  },
  {
    id: 6,
    date: "2023-11-10",
    description: "Webinar Ticket - AI in Education",
    amount: 15.0,
    status: "Completed",
  },
  {
    id: 7,
    date: "2023-11-09",
    description: "Course Subscription - UX Design Essentials",
    amount: 79.99,
    status: "Failed",
  },
  {
    id: 8,
    date: "2023-11-08",
    description: "E-book Purchase - Mastering CSS",
    amount: 24.99,
    status: "Completed",
  },
  {
    id: 9,
    date: "2023-11-07",
    description: "Course Purchase - Blockchain Basics",
    amount: 59.99,
    status: "Pending",
  },
  {
    id: 10,
    date: "2023-11-06",
    description: "Monthly Membership Fee",
    amount: 19.99,
    status: "Completed",
  },
];

const Finance = () => {
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-6">Financial Overview</h1>

        <FinancialOverviewCards financialOverview={financialOverview} />
        <RevenueChart revenueData={revenueData} />
        <TransactionsTable transactions={transactions} />
      </div>
    </div>
  );
};

export default Finance;
