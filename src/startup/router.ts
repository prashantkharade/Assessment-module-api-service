import { register as formRegisterRoutes } from '../api/form/form.router';
import { register as formTemplateRegisterRoutes } from '../api/form.template/form.template.router';

import express from 'express'


export class Router {
    private _app: express.Application;

    constructor(app: express.Application) {
        this._app = app;
    }
    public init = async (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            try {
                this._app.get("/api/v1", (req, res) => {
                    res.send({ message: "Demo api service" })
                })

                formRegisterRoutes(this._app);
                formTemplateRegisterRoutes(this._app);
            } catch (error) {
                console.log("Error initilizing the routes")
            }
        });
    }
}
