import glamorous from "glamorous";

export const AppContainer = glamorous.div({});

export const FilterHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    "@media only screen and (max-width: 767px)": {
        flexDirection: "column",
        marginBottom: 0,
    },
});

export const Table = glamorous.div({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "0 auto",
    minHeight: 250,
    overflow: "auto",
});

export const TableContainer = glamorous.div({
    overflow: "auto",
    width: 800,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});
export const TableHeader = glamorous.div({
    display: "flex",
    background: "#e5eefb",
    borderRadius: "5px 5px 0 0",
});

export const TableHeaderCell = glamorous.div({
    position: "relative",
    flex: 3,
    display: "flex",
    justifyContent: "center",
    padding: 10,
    cursor: "pointer",
    fontWeight: "bold",
    ":nth-child(n+1):nth-child(-n+5)": {
        borderRight: "1px solid #d6d6d6",
    },
    ":first-child": {
        flex: 1,
    },
    ":last-child": {
        flex: 1,
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
    flex: 3,
    padding: 10,
    ":nth-child(n+1):nth-child(-n+5)": {
        borderRight: "1px solid #d6d6d6",
    },
    ":nth-child(2n+1)": {
        fontWeight: "bold",
    },
    ":first-child": {
        flex: 1,
    },
    ":last-child": {
        flex: 1,
    },
});

export const SortField = glamorous.div({
    color: "white",
    padding: 5,
});
export const PaginationFooter = glamorous.div({
    textAlign: "center",
    marginTop: 10,
});

export const Page = glamorous.span(props => ({
    padding: "0 5px 0 5px",
    color: props.isActive ? "white" : "black",
    cursor: "pointer",
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
    "@media only screen and (max-width: 767px)": {
        textAlignLast: "center",
    },
});

export const InputFilter = glamorous.input({
    "@media only screen and (max-width: 767px)": {
        padding: 5,
        textAlign: "center",
    },
});

export const ImgLogo = glamorous.div({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "50px 0 25px 0",
    "@media only screen and (max-width: 576px)": {
        margin: 0,
    },
    "@media only screen and (max-width: 767px) and (min-width: 576px)": {
        margin: "20px 0 0 0 0",
    },
});

export const ImgEmployee = glamorous.div({
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
    "@media only screen and (max-width: 576px)": {
        marginTop: 5,
    },
    "@media only screen and (max-width: 767px) and (min-width: 576px)": {
        marginTop: 10,
    },
});

export const WorkersList = glamorous.span({
    textAlign: "center",
    fontSize: 48,
    color: "ghostwhite",
    fontFamily: "Helvetica Neue",
});

export const Arrows = glamorous.div({
    margin: "4px 3px 3px 10px",
});

export const ArrowUp = glamorous.a({
    position: "absolute",
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
    borderBottom: "4px solid black",
    marginBottom: 1,
});

export const ArrowDown = glamorous.a({
    position: "absolute",
    bottom: -10,
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
    borderBottom: "4px solid black",
    transform: "rotate(180deg)",
    marginTop: 1,
});

export const ArrowContainer = glamorous.div({
    display: "flex",
    position: "relative",
});
