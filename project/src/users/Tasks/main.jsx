import { useEffect, useState } from "react";
import { columns } from "./column";
import { DataTable } from "./data-table";

async function getData() {
  return [
    { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  ];
}

export default function DemoPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div className="container p-20 mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
