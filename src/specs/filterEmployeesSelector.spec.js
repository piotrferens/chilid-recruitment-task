import { stateMock } from "./stateMock";
import { filterEmployeesSelector } from "../selectors/filterEmployees";

describe("filterEmployeesSelector", () => {
    let state;

    const filterResponse = [
        {
            id: 2,
            firstName: "Krzysztof",
            lastName: "Krawczyk",
            dateOfBirth: "28.10.1950 2:15",
            company: "Chilid",
            note: 27,
        },
        {
            id: 5,
            firstName: "Krzysztof",
            lastName: "Kononowicz",
            dateOfBirth: "10.10.1910 18:00",
            company: "Chilid",
            note: 77,
        },
    ];

    beforeEach(() => {
        state = { ...stateMock, filter: { ...stateMock.filter } };
    });

    it("correctly filters employees", () => {
        state.filter.searchPhrase = "krz";
        state.filter.selected = "firstName";

        const employees = filterEmployeesSelector(state);

        expect(employees).toEqual(filterResponse);
    });

    it("correctly filters employees case insensitive", () => {
        state.filter.searchPhrase = "KrZ";
        state.filter.selected = "firstName";

        const employees = filterEmployeesSelector(state);

        expect(employees).toEqual(filterResponse);
    });

    it("returns all employees if search is empty", () => {
        state.filter.searchPhrase = "";

        const employees = filterEmployeesSelector(state);

        expect(employees).toEqual(employees);
    });

    it("returns all employees if nothing is selected", () => {
        state.filter.selected = "";

        const employees = filterEmployeesSelector(state);

        expect(employees).toEqual(employees);
    });
});
