(() => {
    var t = {
            734: t => {
                t.exports = {
                    checkISBN: function(t) {
                        var e = 0;
                        null !== t && (t = t.replace(/-/g, "").replace(/ /g, ""));
                        for (var r = 0, o = t.length + 1; r < t.length; r++, o--) e += t[r] * o;
                        var c = (11 - e % 11) % 11;
                        return 0 === c ? " " : 10 === c ? "X" : c.toString()
                    }
                }
            }
        },
        e = {};

    function r(o) {
        if (e[o]) return e[o].exports;
        var c = e[o] = {
            exports: {}
        };
        return t[o](c, c.exports, r), c.exports
    }(() => {
        const {
            checkISBN: t
        } = r(734);
        document.querySelector("#check").addEventListener("click", (function() {
            var e = document.querySelector("#input").value;
            t(e) == last ? (output.classList.remove("color-red"), output.classList.add("color-green"), output.textContent = "ISBN OK") : (t(e), output.classList.remove("color-green"), output.classList.add("color-red"), output.textContent = "ISBN corrupt")
        }))
    })()
})();
