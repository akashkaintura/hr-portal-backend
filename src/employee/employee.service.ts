import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    getAllEmployees() {
        return [
            { id: 1, name: 'John Doe', position: 'HR Manager' },
            { id: 2, name: 'Jane Doe', position: 'Software Engineer' },
        ];
    }
}
