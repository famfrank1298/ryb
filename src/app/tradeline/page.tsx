import React from "react";
import Nav from "@/sections/nav/nav";
import Footer from "@/sections/footer/footer";
import { Button } from "@/components/ui/button";
import ContactForm from "@/sections/contact/contact";
import { DataTable } from "./data-table";
import { columns, Line } from "./columns";

async function getData(): Promise<Line[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      bank: "Chase",
      limit: 15000,
      balance: 4500,
      utilization: 30,
      age: "2 years",
      closingDate: "2025-03-15",
      price: 300,
      slots: 5,
    },
    {
      id: "2",
      bank: "Bank of America",
      limit: 12000,
      balance: 2400,
      utilization: 20,
      age: "3 years",
      closingDate: "2026-01-20",
      price: 250,
      slots: 3,
    },
    {
      id: "3",
      bank: "Wells Fargo",
      limit: 18000,
      balance: 5400,
      utilization: 30,
      age: "1 year",
      closingDate: "2024-12-10",
      price: 350,
      slots: 4,
    },
    {
      id: "4",
      bank: "Citi",
      limit: 10000,
      balance: 1500,
      utilization: 15,
      age: "4 years",
      closingDate: "2027-07-05",
      price: 200,
      slots: 2,
    },
    {
      id: "5",
      bank: "Capital One",
      limit: 8000,
      balance: 3200,
      utilization: 40,
      age: "5 years",
      closingDate: "2026-09-15",
      price: 275,
      slots: 6,
    },
  ];
}

export default async function Tradeline() {
  const data = await getData();

  return (
    <>
      <Nav />
      <h2 className="tradeline-title">Available Tradelines</h2>
      <div className="container mx-auto py-10 px-10">
        <DataTable columns={columns} data={data} />
      </div>
      <a href="https://www.jotform.com/form/243313675055051" target="_blank">
        <div className="center">
          <Button className="tradeline-button">Join a TradeLine</Button>
        </div>
      </a>
      <ContactForm />
      <Footer />
    </>
  );
}
