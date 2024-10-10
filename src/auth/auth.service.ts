import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login(username: string, password: string): any {
        if (username === 'admin' && password === 'password') {
            return { token: 'dummy-jwt-token' };
        }
        return { error: 'Invalid credentials' };
    }
}
