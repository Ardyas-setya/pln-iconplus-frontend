import DataTable from "react-data-table-component";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },

  {
    cell: (row) => (
      <button id={row.ID}>
        <BsPencil color="green"></BsPencil>
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    cell: (row) => (
      <button id={row.ID}>
        <BsTrash color="red"></BsTrash>
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 3,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 4,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 5,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 6,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 7,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 8,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 9,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 10,
    title: "Ghostbusters",
    year: "1984",
  },
];

export default function Employee() {
  // const actionsMemo = React.useMemo(
  //   () => <Export onExport={() => downloadCSV(data)} />,
  //   []
  // );
  const buttonAlert = () => {
    alert("Test");
  };

  return (
    <div className="m-5 p-5 rounded-md">
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        pagination
        title="User List"
        fixedHeader
        fixedHeaderScrollHeight="500px"
        actions={buttonAlert}
      />
    </div>
  );
}
