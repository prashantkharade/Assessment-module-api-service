// import { FormStatus } from "../miscellaneous/system.types";

import { FormStatus } from "@prisma/client";

export interface FormCreateModel {
    FormTemplateId: string;
    FormUrl: string;
    AnsweredByUserId: string;
    Status: FormStatus;
    // SubmissionTimestamp: Date;
    // CreatedAt: Date;
}

export interface FormUpdateModel {
    FormTemplateId?: string;
    FormUrl?: string;
    AnsweredByUserId?: string;
    Status?: FormStatus;
    // SubmissionTimestamp?: Date;
    // CreatedAt?: Date;
}

export interface FormResponseDto {
    id: String;
    FormTemplate: {
        id: String;
        Title: String;
        Description: String;
        CurrentVersion: number;
        Type: String;
        DisplayCode: String;
        OwnerUserId: String;
        RootSectionId: String;
        DefaultSectionNumbering: Boolean
        CreatedAt: Date;
        UpdatedAt: Date;
    }
    FormUrl: string;
    User: {
        id: String;
        FirstName: String;
        LastName: String;
        CountryCode: number;
        Phone: String;
        Email: String;
        Username: String;
    }
    Status: FormStatus;
    SubmissionTimestamp: Date;
    CreatedAt: Date;
}

