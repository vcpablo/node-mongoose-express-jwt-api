import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import routes from './routes/';
import config from './config/';

class App {
  
  public app: express.Application;
  public dbHost: string = config.dbHost;
  
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use('/', routes);
    mongoose.connect(this.dbHost, { useNewUrlParser: true });
  }
  
}

export default new App().app;