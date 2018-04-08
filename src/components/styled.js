import glamorous from "glamorous";

export const AppContainer = glamorous.div({});

export const FilterHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const Table = glamorous.table({
    borderCollapse: "collapse",
    borderSpacing: 0,
    width: "100%",
    border: "1px solid #ddd",
});
export const TableHeader = glamorous.thead({
    backgroundColor: "red",
});
export const TableHeaderRow = glamorous.tr({
    backgroundColor: "red",
});

export const TableHeaderCell = glamorous.th({
    textAlign: "center",
    padding: 8,
});
export const TableBody = glamorous.tbody({});

export const TableRow = glamorous.tr({});

export const TableCell = glamorous.td({
    textAlign: "center",
    padding: 8,
});

export const ArrowUp = glamorous.div({});

export const ArrowDown = glamorous.div({});

export const SortField = glamorous.div({
    padding: 5,
});
export const PaginationHeader = glamorous.tfoot({
    textAlign: "center",
});

export const PaginationHeaderRow = glamorous.tr({});

export const PaginationHeaderCell = glamorous.td({});

export const NextPage = glamorous.button({
    background: "none",
    border: "none",
    outlineStyle: "none",
});

export const PreviousPage = glamorous.button({
    background: "none",
    border: "none",
    outlineStyle: "none",
});
