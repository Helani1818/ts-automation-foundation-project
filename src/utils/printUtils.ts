// src/utils/printUtils.ts
import { TestUser } from '../types/user.types';
export function printUserScenario(user: TestUser): void {
    console.log(`Testing login for ${user.username} as ${user.role}`);
}