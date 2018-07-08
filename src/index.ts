import {Origami, Route} from 'origami-core-lib';
import md5 from 'md5';
import {resolve} from 'path';
import request from 'request';

const sendDefault = (res: Origami.Server.Response) => {
    return res.sendFile(resolve(__dirname, '../content/default-profile.svg'));
};

module.exports = (app: any) => {
    const r = new Route('/content/profiles/:userId');

    r.get(async (req, res, next) => {
        if (res.headersSent) return next();

        if (req.params.userId === 'default') return sendDefault(res);

        const m = res.app.get('store').model('user') as Origami.Store.Model;
        const u = await m.find({id: req.params.userId}) as Origami.Store.Resource;

        if (!u) return sendDefault(res);

        request(`https://www.gravatar.com/avatar/${md5(u.email)}.jpg?s=100`)
            .on('error', err => sendDefault(res))
            .pipe(res);
    });

    app.useRouter(r);
};
