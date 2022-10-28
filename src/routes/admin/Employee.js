import DataTable from "react-data-table-component";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { Button, Input } from "react-daisyui";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
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

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <div className="space-x-2">
    <Input
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />

    <Button type="button" onClick={onClear}>
      X
    </Button>
  </div>
);

export default function Employee() {
  const [selectedRows, setSelectedRows] = React.useState(false);
  const [toggledClearRows, setToggleClearRows] = React.useState(false);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered

  const filteredItems = data.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    const Export = ({ onExport }) => (
      <Button onClick={(e) => onExport(e.target.value)}>Export</Button>
    );

    return (
      <div>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </div>
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div className="flex card bg-white shadow-xl  m-8">
      <div className="card-body">
        <DataTable
          title="Manajemen Akun"
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          selectableRows
          persistTableHead
          fixedHeader
          fixedHeaderScrollHeight="300px"
        />
      </div>
    </div>
  );
}
