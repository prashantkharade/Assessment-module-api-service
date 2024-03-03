import joi from 'joi';
import express from 'express';
import {
    ErrorHandler
} from '../../common/error.handler';
import BaseValidator from '../base.validator';
import { UserLoginSessionCreateModel, UserLoginSessionUpdateModel } from '../../domain.types/forms/user.login.session.domain.types';

///////////////////////////////////////////////////////////////////////////////////////////////

export class UserLoginSessionValidator extends BaseValidator {

    public validateCreateRequest = async (request: express.Request): Promise<UserLoginSessionCreateModel> => {
        try {
            const schema = joi.object({
                UserId: joi.string().uuid().required()
            });
            await schema.validateAsync(request.body);
            return {
                UserId: request.body.userId
            };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };

    public validateUpdateRequest = async (request: express.Request): Promise<UserLoginSessionUpdateModel | undefined> => {
        try {
            const schema = joi.object({
                UserId: joi.string().uuid().optional()
            });
            await schema.validateAsync(request.body);
            return {
                UserId: request.body.userId ?? null,
            };
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    };
}
