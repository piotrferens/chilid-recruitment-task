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

export const TableHeaderCell = glamorous.div({
    display: "table-cell",
    border: "1px solid #AAAAAA",
    padding: "5px 5px",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    background: "#6a93e8",
    position: "relative",
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

export const ArrowUp = glamorous.div({
    position: "absolute",
    right: 5,
    top: 5,
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "5px solid black",
});

export const ArrowDown = glamorous.div({
    position: "absolute",
    right: 5,
    bottom: 5,
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "5px solid black",
    transform: "rotate(180deg)",
});

export const SortField = glamorous.div({
    padding: 5,
});
export const PaginationHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const NextPage = glamorous.button({
    background: "none",
    border: "none",
});

export const PreviousPage = glamorous.button({
    background: "none",
    border: "none",
});
