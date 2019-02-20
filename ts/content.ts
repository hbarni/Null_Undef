import * as http from "http";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        // Compiled with --strictNullChecks
            let x: number;
            let y: number | undefined;
            let z: number | null | undefined;
            x = 1;  // Ok
            y = 1;  // Ok
            z = 1;  // Ok
            x = undefined;  // Error
            y = undefined;  // Ok
            z = undefined;  // Ok
            x = null;  // Error
            y = null;  // Error
            z = null;  // Ok
            x = y;  // Error
            x = z;  // Error
            y = x;  // Ok
            y = z;  // Error
            z = x;  // Ok
            z = y;  // Ok

            // Function returning never must have unreachable end point
            function error(message: string): never {
                throw new Error(message);
            }

            // Inferred return type is never
            function fail() {
                return error("Something failed");
            }

            // Function returning never must have unreachable end point
            function infiniteLoop(): never {
                while (true) {
                }
            }
        res.write("<b>Fejlesztői környezet telepítésének leírása, forráskód GitHub repository:</b><br>");
        res.write("<a href='https://github.com/hbarni/Bemutato' target='_blank'>" +
            "https://github.com/hbarni/Bemutato</a><br>");
        res.end();
    }
}
