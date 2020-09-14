import { findAllSolutions } from "../Boggle/boggie_solver";

describe("findAllSolutions5x5", () => {
    test("simple 5 x 5 grid with grid common and dictionary capital", () => {
        const grid = [['a', 'b', 'a', 'v','a'],
        ['m', 'o', 'i', 'l','s'],
        ['b', 'v', 'r', 'n','a'],
        ['o', 'r', 'o', 'i','s'],
        ['s', 'a', 'c', 'a','p']];
        const dictionary = ["AIR","RIP","SAC","ARVO","SNIB","VIVO","AMBOS","CORIA","MOILS","PACAS"];
        expect(findAllSolutions(grid, dictionary)).toEqual(["ambos", "air", "vivo", "moils", "snib", "rip", "sac", "arvo", "coria", "pacas"]);
    });
});

describe("findAllSolutions5x5", () => {
    test("5 x 5 grid with word longer than 15 letters", () => {
        const grid = [['s', 'i', 'g', 'a','z'],
        ['e', 't', 'l', 'o','t'],
        ['s', 'a', 'o', 'r','e'],
        ['z', 'm', 'e', 'n','q'],
        ['o', 'n', 'e', 'h','p']];
        const dictionary = ['phenomenologists'];
        expect(findAllSolutions(grid, dictionary)).toEqual(["phenomenologists"]);
    });
});

describe("findAllSolutions4x4", () => {
    test("4 x 4 grid with qu and capital and common letters", () => {
        const grid = [['t', 'w', 'y', 'r'],
        ['e', 'n', 'p', 'h'],
        ['G', 'Z', 'QU', 'R'],
       ['O', 'N', 'T', 'A']];
        const dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
            'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
            'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];
        expect(findAllSolutions(grid, dictionary)).toEqual(["ten", "went", "wet", "ego", "net", "new", "newt", "prat", "pry", "gent", "get", "qua", "quar", "quart", "quartz", "rat", "tar", "tarp", "art"]);
    });
});

describe("findAllSolutions3x3", () => {
    test("3 x 3 grid with qu and one solution, all capital", () => {
        const grid = [['T', 'W', 'Y'],
        ['G', 'Z', 'QU'],
        ['O', 'N', 'T']];
        const dictionary = ['ART', 'EGO', 'GENT', 'GET', 'NET', 'NEW', 'NEWT', 'PRAT',
        'PRY', 'QUA', 'QUART', 'QUARTZ', 'RAT', 'TAR', 'TARP',
        'TEN', 'WENT', 'WET', 'ARTY', 'EGG', 'NOT', 'QUAR','GON'];
        expect(findAllSolutions(grid, dictionary)).toEqual(["gon"]);
    });
});

describe("findAllSolutions3x3", () => {
    test("3 x 3 grid with qu and one solution no duplicates", () => {
        const grid = [['t', 'e', 'n'],
        ['t', 'e', 'n'],
        ['n', 'e', 't']];
        const dictionary = ['ten','net'];
        expect(findAllSolutions(grid, dictionary)).toEqual(["ten", "net"]);
    });
});

describe("findAllSolutions2x2", () => {
    test("2 x 2 grid with one 3 letter qu solution and one regular 3 letter solution and a two letter dictionary word", () => {
        const grid = [['g','qu'],
        ['o', 't']];
        const dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
            'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
            'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar','gon','quo','got', 'go'];
        expect(findAllSolutions(grid, dictionary)).toEqual(["got","quo"]);
    });
});

describe("findAllSolutions2x2", () => {
    test("2 x 2 grid with qu and a two letter dictionary word", () => {
        const grid = [['g','qu'],
        ['o', 'p']];
        const dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
            'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
            'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar','gon','got', 'go'];
        expect(findAllSolutions(grid, dictionary)).toEqual([]);
    });
});

describe("findAllSolutions2x2", () => {
    test("2 x 2 grid with no solutions", () => {
        const grid = [['g','qu'],
        ['z', 't']];
        const dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
            'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
            'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar','gon','quo','got', 'go'];
        expect(findAllSolutions(grid, dictionary)).toEqual([]);
    });
});

describe("findAllSolutions1x1", () => {
    test("1 x 1 grid with no solutions", () => {
        const grid = ['qu'];
        const dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
            'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
            'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar','gon','quo','got', 'go'];
        expect(findAllSolutions(grid, dictionary)).toEqual([]);
    });
});

describe("findAllSolutionsEmpty", () => {
    test("Empty grid with no solutions and no dictionary", () => {
        const grid = [];
        const dictionary = [];
        expect(findAllSolutions(grid, dictionary)).toEqual([]);
    });
});