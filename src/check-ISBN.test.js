const { it, describe, expect } = require("@jest/globals");
const { checkISBN } = require('./check-ISBN');

describe('checkISBN', () => {
    [
        { input: "100000000", output:"1"},
        { input: "010000000", output:"2"},
        { input: "001000000", output:"3"},
        { input: "100000000", output:"1"},
        { input: "100000000", output:"1"},
        { input: "100000000", output:"1"},
        { input: "100000000", output:"1"},
        { input: "100000000", output:"1"},
        { input: "010000010", output:"X"},
        { input: "355155167", output: "7" },
        { input: "821458281", output: "4" } ,
        { input: "1-888799-97", output: "8" },
        { input: "1 888799 97", output: "8" },
        { input: "0-7648-0880", output: "X" },
        { input: "0-4512-2042", output: " "},
        { input: "3-551-55167-7", output: "7"},
    ]
        .forEach(({ input, output }) => {
            it(`should turn ${input} to "${output}"`, () => {
                expect(checkISBN(input)).toBe(output)
            });
        });
})