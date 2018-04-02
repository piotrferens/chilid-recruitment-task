import { stateMock } from "./stateMock";
import { numberOfPagesSelector } from "../selectors/numberOfPages";

describe("numberOfPagesSelector", () => {
    let state;

    beforeEach(() => {
        state = { ...stateMock, employees: stateMock.employees };
    });

    it("correctly calculates number of pages", () => {
        const numberOfPages = numberOfPagesSelector(state);

        expect(numberOfPages).toEqual(2);
    });

    it("returns 1 if there is no employees found", () => {
        state.employees = [];
        const numberOfPages = numberOfPagesSelector(state);

        expect(numberOfPages).toEqual(1);
    });
});
