export interface UserLoginSessionCreateModel {
    UserId: string;
}

export interface UserLoginSessionUpdateModel {
    UserId: string;
}

export interface UserLoginSessionResponseDto {
    id: string;
    User: {
        FirstName: string;
        LastName: string;
        CountryCode: number;
        Phone: String;
        Email: String;
        Username: String;
        Password: String;
        CreatedAt: Date
    }
    IsActiveSession: boolean;
    StartedAt: Date;
    ValidTill: Date;
}
