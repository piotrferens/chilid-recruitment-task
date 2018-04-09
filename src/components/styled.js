import glamorous from "glamorous";

export const AppContainer = glamorous.div({
    background: "#3282ff",
    height: "100vh",
});

export const FilterHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const Table = glamorous.table({
    borderCollapse: "separate",
    borderSpacing: 0,
    width: 800,
    minHeight: 200,
    padding: 5,
    fontFamily: "HelveticaNeue",
});
export const TableHeader = glamorous.thead({});

export const TableHeaderRow = glamorous.tr({});

export const TableHeaderCell = glamorous.th({
    textAlign: "center",
    background: "#e5eefb",
    color: "#22385a",

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
export const TableBody = glamorous.tbody({
    color: "#3c4c65",
});

export const TableRow = glamorous.tr({
    ":last-child td:first-child": {
        borderRadius: "0 0 0 6px",
    },
    ":last-child td:last-child": {
        borderRadius: "0 0 6px 0",
    },
    ":nth-child(2n-2)": {
        background: "#e5eefb",
    },
    ":nth-child(2n-1)": {
        background: "#ffffff",
    },
});

export const TableCell = glamorous.td({
    maxWidth: 100,
    minWidth: 100,
    textAlign: "center",
    ":nth-child(n+1):nth-child(-n+5)": {
        borderRight: "1px solid #dae0e9",
    },
    ":nth-child(2n-1)": {
        fontWeight: "bold",
    },
});

export const ArrowUp = glamorous.div({});

export const ArrowDown = glamorous.div({});

export const SortField = glamorous.div({
    color: "white",
    padding: 5,
});
export const PaginationHeader = glamorous.tfoot({
    textAlign: "center",
});

export const PaginationHeaderRow = glamorous.tr({});

export const PaginationHeaderCell = glamorous.td({});

export const CurrentPage = glamorous.span({
    padding: "0 5px 0 5px",
});

export const ChangePage = glamorous.button(props => ({
    background: "none",
    border: "none",
    outlineStyle: "none",
    fontSize: "100%",
    color: props.disabled ? "black" : "white",
}));
