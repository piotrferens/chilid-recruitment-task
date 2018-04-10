import { stateMock } from "./stateMock";
import { pagesSelector } from "../selectors/pagesSelector";

describe("pagesSelector", () => {
    let state;

    beforeEach(() => {
        state = { ...stateMock, employees: stateMock.employees };
    });

    it("correctly calculates number of pages", () => {
        const numberOfPages = pagesSelector(state);

        expect(numberOfPages.length).toEqual(2);
    });

    it("returns empty array if there is no employees found", () => {
        state.employees = [];
        const numberOfPages = pagesSelector(state);

        expect(numberOfPages).toEqual([]);
    });
});
