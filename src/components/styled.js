import glamorous from "glamorous";

export const AppContainer = glamorous.div({});

export const FilterHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const Table = glamorous.table({
    borderCollapse: "separate",
    borderSpacing: 0,
    width: "100%",
    padding: 5,
});
export const TableHeader = glamorous.thead({});

export const TableHeaderRow = glamorous.tr({});

export const TableHeaderCell = glamorous.th({
    textAlign: "center",
    background: "#eee",
    ":nth-child(n+1):nth-child(-n+5)": {
        borderRight: "1px solid #ddd",
    },
    ":first-child": {
        borderRadius: "6px 0 0 0",
    },
    ":last-child": {
        borderRadius: "0 6px 0 0",
    },
});
export const TableBody = glamorous.tbody({});

export const TableRow = glamorous.tr({
    ":last-child td:first-child": {
        borderRadius: "0 0 0 6px",
    },
    ":last-child td:last-child": {
        borderRadius: "0 0 6px 0",
    },
    ":nth-child(2n-2)": {
        background: "#eee",
    },
});

export const TableCell = glamorous.td({
    ":nth-child(n+1):nth-child(-n+5)": {
        borderRight: "1px solid #ddd",
    },
    textAlign: "center",
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
