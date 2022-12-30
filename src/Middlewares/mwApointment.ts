import { Request, Response, NextFunction } from "express";

import userModel from "../Models/userModel";

export default class mwAppointment {
  static checkStatus = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let response;
    try {
      let userData: any = await userModel.findByPk(req.body.userId);
      if (userData) {
        res.locals = userData.dataValues.Status;
        next();
      } else {
        response = {
          Message: "User not found, please check Id",
        };
        return res.status(200).json(response);
      }
    } catch (error: any) {
      response = {
        Message: error.message,
        Status: 400,
        Data: null,
      };
      return res.status(400).json(response);
    }
  };
}
