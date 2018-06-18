"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const origami_core_server_1 = require("origami-core-server");
const md5_1 = __importDefault(require("md5"));
const path_1 = require("path");
const request_1 = __importDefault(require("request"));
const sendDefault = (res) => {
    return res.sendFile(path_1.resolve(__dirname, '../content/default-profile.svg'));
};
module.exports = (app) => {
    const r = new origami_core_server_1.Route('/content/profiles/:userId');
    r.get((req, res, next) => __awaiter(this, void 0, void 0, function* () {
        if (res.headersSent)
            return next();
        if (req.params.userId === 'default')
            return sendDefault(res);
        const m = res.app.get('store').model('user');
        const u = yield m.find({ id: req.params.userId });
        if (!u)
            return sendDefault(res);
        request_1.default(`https://www.gravatar.com/avatar/${md5_1.default(u.email)}.jpg?s=100`)
            .on('error', err => sendDefault(res))
            .pipe(res);
    }));
    app.useRouter(r);
};
