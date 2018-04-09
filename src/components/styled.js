import glamorous from "glamorous";

export const AppContainer = glamorous.div({
    height: "100vh",
});

export const FilterHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const Table = glamorous.div({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "0 auto",
    minHeight: 250,
    overflow: "auto",
});
export const TableHeader = glamorous.div({
    display: "flex",
    background: "#e5eefb",
    borderRadius: "5px 5px 0 0",
});

export const TableHeaderCell = glamorous.div({
    flex: 1,
    padding: 10,
    ":nth-child(n+1):nth-child(-n+5)": {
        borderRight: "1px solid #d6d6d6",
    },
});
export const TableBody = glamorous.div({
    color: "#3c4c65",
});

export const TableRow = glamorous.div({
    display: "flex",
    ":nth-child(odd)": {
        background: "white",
    },
    ":nth-child(even)": {
        background: "#e5eefb",
    },
    ":last-child": {
        borderRadius: "0 0 5px 5px",
    },
});

export const TableCell = glamorous.div({
    flex: 1,
    padding: 10,
    ":nth-child(n+1):nth-child(-n+5)": {
        borderRight: "1px solid #d6d6d6",
    },
});

export const ArrowUp = glamorous.div({});

export const ArrowDown = glamorous.div({});

export const SortField = glamorous.div({
    color: "white",
    padding: 5,
});
export const PaginationFooter = glamorous.div({
    textAlign: "center",
});

export const Page = glamorous.span(props => ({
    padding: "0 5px 0 5px",
    color: props.isActive ? "white" : "black",
}));

export const ChangePage = glamorous.button({
    background: "none",
    border: "none",
    outlineStyle: "none",
    fontSize: "100%",
    color: "white",
    cursor: "pointer",
});

export const SelectFilter = glamorous.select({
    fontSize: 16,
    border: "1px solid #ccc",
    padding: 5,
    background: "ghostwhite",
});
