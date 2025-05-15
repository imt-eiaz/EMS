import React from "react";
import SummaryCard from "./SummaryCard";
import { FaBuilding, FaMoneyBill, FaUsers } from "react-icons/fa";

const AdminSummary = () => {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold">Dashboard Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard
          icon={<FaUsers />}
          text="Total Employees"
          number={13}
          color="bg-teal-600"
        />
        <SummaryCard
          icon={<FaBuilding />}
          text="Total Department"
          number={5}
          color="bg-yellow-600"
        />
        {/* <SummaryCard
          icon={<FaMoneyBill />}
          text="Monthly Salary"
          number={$654}
          color="bg-red-600"
        /> */}
      </div>
    </div>
  );
};

export default AdminSummary;
