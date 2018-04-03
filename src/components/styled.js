import glamorous from "glamorous";

export const AppContainer = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const FilterHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
    padding: 5,
});

export const Table = glamorous.div({
    width: 800,
    minHeight: 180,
    display: "table",
    border: "3px solid #000000",
    textAlign: "center",
    borderCollapse: "collapse",
});
export const TableHeader = glamorous.div({
    display: "table-header-group",
    borderBottom: "2px solid #444444",
});

export const TableHeaderRow = glamorous.div({
    display: "table-row",
});

export const TableHeaderItem = glamorous.div({
    display: "table-cell",
    border: "1px solid #AAAAAA",
    padding: "5px 5px",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
});

export const TableBoby = glamorous.div({
    display: "table-row-group",
    fontSize: 15,
});

export const TableRow = glamorous.div({
    display: "table-row",
});

export const TableCell = glamorous.div({
    display: "table-cell",
    border: "1px solid #AAAAAA",
    padding: "5px 5px",
});

export const SortField = glamorous.div({
    padding: 5,
});
export const PaginationHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const NextPage = glamorous.span({});

export const PreviousPage = glamorous.span({});
