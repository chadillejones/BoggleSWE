/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */


// Name: Chadille Jones
// Major: Junior Computer Science Major
// Student iD: @02856918
// Citing: geeks for geeks Java code 
// Citing: David Daniels

export function findAllSolutions(grid, dictionary) {
    let solutions = [];
    //Return early if empty grid or dictionary
    if (grid.length == 0 || dictionary.length == 0) {
        return solutions;
    }
    //Converts the grid and dictionary to lower case before operating on them. 
    if (grid.length > 1) {
        for (var s = 0; s < grid.length; s++) {
            grid[s] = grid[s].map(function (e) {
                return e.toLowerCase()
            });
        }
    }
    else {
        grid = grid.map(function (e) {
            return e.toLowerCase()
        });
    }

        for (var t = 0; t < dictionary.length; t++) {
            dictionary = dictionary.map(function (f) {
                return f.toLowerCase()
            });
        }

    var Boggle = (function () {
        function Boggle() {
        }
        Boggle.insert = function (root, Key) {
            var n = Key.length;
            var pChild = root;
            for (var i = 0; i < n; i++) {
                {
                    var index = (function (c) { return c.charCodeAt == null ? null : c.charCodeAt(0); })(Key.charAt(i)) - 'a'.charCodeAt(0);
                    // To handle 'Qu' cases before it gets passed into Trie 
                    if (index == 16) {
                        i++;
                    }
                    if (pChild.Child[index] == null) {
                        pChild.Child[index] = new Boggle.TrieNode();
                    }
                    pChild = pChild.Child[index];
                }
                ;
            }
            pChild.leaf = true;
        };

        Boggle.isSafe = function (i, j, visited) {
            return (i >= 0 && i < Boggle.M && j >= 0 && j < Boggle.N && !visited[i][j]);
        };
        Boggle.searchWord = function (root, boggle, i, j, visited, str) {
            if (root.leaf === true)
                if (str.length >= 3) {
                    solutions.push(str);
                }

            if (Boggle.isSafe(i, j, visited)) {
                visited[i][j] = true;
                for (var K = 0; K < Boggle.SIZE; K++) {
                    {
                        if (root.Child[K] != null) {
                            var ch = String.fromCharCode((K + 'a'.charCodeAt(0)));
                            if (Boggle.isSafe(i + 1, j + 1, visited) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(boggle[i + 1][j + 1]) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch))
                                Boggle.searchWord(root.Child[K], boggle, i + 1, j + 1, visited, str + ch);
                            if (Boggle.isSafe(i, j + 1, visited) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(boggle[i][j + 1]) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch))
                                Boggle.searchWord(root.Child[K], boggle, i, j + 1, visited, str + ch);
                            if (Boggle.isSafe(i - 1, j + 1, visited) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(boggle[i - 1][j + 1]) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch))
                                Boggle.searchWord(root.Child[K], boggle, i - 1, j + 1, visited, str + ch);
                            if (Boggle.isSafe(i + 1, j, visited) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(boggle[i + 1][j]) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch))
                                Boggle.searchWord(root.Child[K], boggle, i + 1, j, visited, str + ch);
                            if (Boggle.isSafe(i + 1, j - 1, visited) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(boggle[i + 1][j - 1]) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch))
                                Boggle.searchWord(root.Child[K], boggle, i + 1, j - 1, visited, str + ch);
                            if (Boggle.isSafe(i, j - 1, visited) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(boggle[i][j - 1]) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch))
                                Boggle.searchWord(root.Child[K], boggle, i, j - 1, visited, str + ch);
                            if (Boggle.isSafe(i - 1, j - 1, visited) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(boggle[i - 1][j - 1]) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch))
                                Boggle.searchWord(root.Child[K], boggle, i - 1, j - 1, visited, str + ch);
                            if (Boggle.isSafe(i - 1, j, visited) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(boggle[i - 1][j]) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(ch))
                                Boggle.searchWord(root.Child[K], boggle, i - 1, j, visited, str + ch);
                        }
                    };
                }
                visited[i][j] = false;
            }
        };

        Boggle.findWords = function (boggle, root) {
            var visited = (function (dims) {
                var allocate = function (dims) {
                    if (dims.length == 0) {
                        return false;
                    }
                    else {
                        var array = [];
                        for (var i = 0; i < dims[0]; i++) {
                            array.push(allocate(dims.slice(1)));
                        }
                        return array;
                    }
                }; return allocate(dims);
            })([Boggle.M, Boggle.N]);
            var pChild = root;
            var str = "";
            for (var i = 0; i < Boggle.M; i++) {
                {
                    for (var j = 0; j < Boggle.N; j++) {
                        {
                            if (pChild.Child[(function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })((boggle[i][j])) - 'a'.charCodeAt(0)] != null) {
                                str = str + boggle[i][j];
                                Boggle.searchWord(pChild.Child[(function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })((boggle[i][j])) - 'a'.charCodeAt(0)], boggle, i, j, visited, str);
                                str = "";
                            }
                        }
                        ;
                    }
                }
                ;
            }
        };
        Boggle.main = function (grid, dictionary) {
            var root = new Boggle.TrieNode();
            var n = dictionary.length;
            for (var i = 0; i < n; i++) {
                Boggle.insert(root, dictionary[i]);
            }

            Boggle.findWords(grid, root);
        };
        return Boggle;
    }());
    Boggle.SIZE = 26;
    Boggle.M = grid.length;
    Boggle.N = grid[0].length;
    Boggle["__class"] = "Boggle";

    (function (Boggle) {
        var TrieNode = (function () {
            function TrieNode() {
                this.Child = (function (s) {
                    var a = []; while (s-- > 0)
                        a.push(null); return a;
                })(Boggle.SIZE);
                if (this.leaf === undefined)
                    this.leaf = false;
                this.leaf = false;
                for (var i = 0; i < Boggle.SIZE; i++) {
                    this.Child[i] = null;
                }
            }
            return TrieNode;
        }());
        Boggle.TrieNode = TrieNode;
        TrieNode["__class"] = "Boggle.TrieNode";
    })(Boggle || (Boggle = {}));
    Boggle.main(grid, dictionary);
    let unique = new Set(solutions);
    return Array.from(unique);
}




