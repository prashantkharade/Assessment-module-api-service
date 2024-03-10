import express from 'express';
import { FormTemplateController } from './form.template.controller';

///////////////////////////////////////////////////////////////////////////////////

export const register = (app: express.Application): void => {

    const router = express.Router();
    const controller = new FormTemplateController();

    router.get('/all', controller.getAll);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.get('/:id', controller.getById);
    router.delete('/:id', controller.delete);
    router.get('/:id/submissions', controller.submissions)

    app.use('/api/v1/form-templates', router);
};
