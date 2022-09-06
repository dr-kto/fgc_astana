/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var org;
(function (org) {
    var jsweet;
    (function (jsweet) {
        var Main = /** @class */ (function () {
            function Main() {
            }
            Main.matches_$LI$ = function () { if (Main.matches == null) {
                Main.matches = ([]);
            } return Main.matches; };
            Main.main = function (args) {
                var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"];
                var oddeven = true;
                console.info("1 ");
                var count = 2;
                var result = ([]);
                result = Main.fill(result, letters.length, letters);
                /* add */ (Main.matches_$LI$().push(result) > 0);
                oddeven = !oddeven;
                count = Main.print(result, oddeven, count);
                do {
                    {
                        var last = Main.matches_$LI$()[ /* size */Main.matches_$LI$().length - 1][6];
                        var nresult = ([]);
                        nresult = Main.fill(nresult, letters.length, letters);
                        var f1 = nresult[0][0];
                        var f2 = nresult[0][1];
                        var f3 = nresult[0][2];
                        if ( /* contains */(last.indexOf((f1)) >= 0) || /* contains */ (last.indexOf((f2)) >= 0) || /* contains */ (last.indexOf((f3)) >= 0)) {
                            continue;
                        }
                        else {
                            oddeven = !oddeven;
                            count = Main.print(result, oddeven, count);
                            /* add */ (Main.matches_$LI$().push(nresult) > 0);
                        }
                        if (count > 40)
                            break;
                    }
                } while ((true));
            };
            Main.fill = function (result, size, letters) {
                var n = (function (s) { var a = []; while (s-- > 0)
                    a.push(false); return a; })(size);
                for (var i = 0; i < 7; i++) {
                    {
                        var alliance = ([]);
                        var x = void 0;
                        var y = void 0;
                        var z = void 0;
                        do {
                            {
                                x = Main.random();
                            }
                        } while ((n[x]));
                        n[x] = true;
                        do {
                            {
                                y = Main.random();
                            }
                        } while ((n[y]));
                        n[y] = true;
                        do {
                            {
                                z = Main.random();
                            }
                        } while ((n[z]));
                        n[z] = true;
                        /* add */ (alliance.push(letters[x]) > 0);
                        /* add */ (alliance.push(letters[y]) > 0);
                        /* add */ (alliance.push(letters[z]) > 0);
                        /* add */ (result.push(alliance) > 0);
                    }
                    ;
                }
                return result;
            };
            Main.print = function (result, oddeven, count) {
                var n = result.length;
                var m = result[0].length;
                var c = 1;
                if (oddeven)
                    c++;
                for (var index4446 = 0; index4446 < result.length; index4446++) {
                    var i = result[index4446];
                    {
                        for (var index4447 = 0; index4447 < i.length; index4447++) {
                            var x = i[index4447];
                            {
                                console.info(x + " ");
                            }
                        }
                        if (c % 2 === 0) {
                            console.info();
                            console.info((count++) + " ");
                        }
                        if (count > 41)
                            break;
                        c++;
                    }
                }
                return count;
            };
            Main.random = function () {
                return ((Math.floor(Math.random() * 21)) | 0);
            };
            return Main;
        }());
        jsweet.Main = Main;
        Main["__class"] = "org.jsweet.Main";
    })(jsweet = org.jsweet || (org.jsweet = {}));
})(org || (org = {}));
org.jsweet.Main.main(null);
