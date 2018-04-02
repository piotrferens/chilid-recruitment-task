import glamorous from "glamorous";

export const Row = glamorous.div({
    display: "flex",
});

export const Field = glamorous.div({
    padding: "5px 10px",
    flex: 1,
});

export const Table = glamorous.div({
    width: 800,
});

export const AppContainer = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const PaginationHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
});

export const FilterHeader = glamorous.div({
    display: "flex",
    justifyContent: "center",
    padding: 5,
});

export const NextPage = glamorous.span({});

export const PreviousPage = glamorous.span({});
