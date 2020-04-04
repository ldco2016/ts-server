"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// interface RequestWithBody extends Request {
//   body: { [key: string]: string | undefined };
// }
// function requireAuth(req: Request, res: Response, next: NextFunction): void {
//   if (req.session && req.session.loggedIn) {
//     next();
//     return;
//   }
//   res.status(403);
//   res.send("Not Permitted");
// }
var router = express_1.Router();
exports.router = router;
router.get("/login", function (req, res) {
    res.send("<form method=\"POST\">\n        <div><label>Email</label>\n          <input name=\"email\" />\n        </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\" />\n        </div>\n        <button>Submit</button>\n      </form>");
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send(email + password);
    //   if (
    //     email &&
    //     password &&
    //     email === "hi@there.com" &&
    //     password === "password"
    //   ) {
    //     // mark this person as logged in
    //     req.session = { loggedIn: true };
    //     // redirect them to the root route
    //     res.redirect("/");
    //   } else {
    //     res.send("Invalid email or password");
    //   }
});
