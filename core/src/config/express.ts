import express from 'express';
import morgan from 'morgan';
import { json, urlencoded } from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import helmet from 'helmet';

import env from '../utils/validators/env';
import routes from '../api';

const app = express();

const logs = env.isProduction ? 'combined' : 'dev';
app.use(morgan(logs));

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(compress());

app.use(methodOverride());

app.use(helmet());

app.use(
    cors({
        origin: env.isDev ? 'http://localhost:3000' : '',
        credentials: true,
    })
);

app.use('/api', routes);

const _app = app;
export { _app as app };
