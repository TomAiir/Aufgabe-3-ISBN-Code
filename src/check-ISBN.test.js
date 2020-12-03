const { it, describe, expect } = require("@jest/globals");
const { checkISBN } = require('./check-ISBN');

describe('checkISBN', () => {
    [
        { input: "355155167", output: "7" },
        { input: "821458281", output: "4" } ,
        { input: "1-888799-97", output: "8" },
        { input: "1 888799 97", output: "8" },
        { input: "0-7648-0880", output: "X" },
        { input: "0-4512-2042", output: " "},
    ]
        .forEach(({ input, output }) => {
            it(`should turn ${input} to "${output}"`, () => {
                expect(checkISBN(input)).toBe(output)
            });
        });
})