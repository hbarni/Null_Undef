"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        //undefined
        //var tomb = [2,3];
        //res.write(tomb[3]);
        //var a; // szintén undefined típusa lesz
        //res.write(a);

        //null
        //var i = null;
        //res.write(i);

        res.write("<h1 style='color: blue;'>Teszt OK!</h1>");
        res.write("<b>Fejlesztői környezet telepítésének leírása, forráskód GitHub repository:</b><br>");
        res.write("<a href='https://github.com/hbarni/Null_Undef' target='_blank'>" +
            "https://github.com/hbarni/Null_Undef</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map