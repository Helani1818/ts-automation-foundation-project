// src/test-data/users.ts
import { TestUser } from '../types/user.types';
import { environment } from '../config/environment';
export const standardUser: TestUser = {
    username: 'standard_user',
    password: environment.defaultPassword,
    role: 'customer'
};
export const lockedUser: TestUser = {
    username: 'locked_out_user',
    password: environment.defaultPassword,
    role: 'blocked'
};