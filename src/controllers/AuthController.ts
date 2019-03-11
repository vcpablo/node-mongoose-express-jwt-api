import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import * as jwt from "jsonwebtoken";
import config from '../config';

export default class {
  static login = async (req: Request, res: Response) => {
    //Check if username and password are set
    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send();
    }

    if(username !== 'admin' || password !== 'admin') {
      res.status(401).send();
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { username },
      config.jwtSecret,
      { expiresIn: '4h' }
    );

    //Send the jwt in the response
    res.send({
      token,
      username
    });
  };
  
}