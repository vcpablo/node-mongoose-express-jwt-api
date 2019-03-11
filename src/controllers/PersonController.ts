import * as mongoose from 'mongoose';
import { PersonSchema } from '../models/person.model';
import { Request, Response } from 'express';

const Person = mongoose.model('Person', PersonSchema);

export default class {
  // Creates a person
  static create (req: Request, res: Response) {
    let person = new Person(req.body);
    
    person.save((err, person) => {
      if(err){
        res.send(err);
      }
      res.json(person);
    });
  }

  // Loads all persons or find persons by name (if querystring param firstName is set)
  static listAll (req: Request, res: Response) {
    const filter = (req.query.firstName) ? { firstName: new RegExp(req.query.firstName, 'i') } : {};
    Person.find(filter, (err, persons) => {
      if(err){
        res.send(err);
      }
      res.json(persons);
    });
  }

  // Loads a person by id
  static findById (req: Request, res: Response) {           
    Person.findById(req.params.param, (err, person) => {
      if(err){
        res.send(err);
      }
      res.json(person);
    });
  }

  static findByName (req: Request, res: Response) {           
    Person.find({ name: req.params.param }, (err, person) => {
      if(err){
        res.send(err);
      }
      res.json(person);
    });
  }
  
  // Updates a person
  static update (req: Request, res: Response) {           
    Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, person) => {
      if(err){
        res.send(err);
      }
      res.json(person);
    });
  }
  
  // Removes a person
  static delete (req: Request, res: Response) {           
    console.log()
    Person.deleteOne({ _id: req.params.id }, err => {
      if(err){
        res.send(err);
      }
      res.json({ message: 'Person successfully removed'});
    });
  }
  
}