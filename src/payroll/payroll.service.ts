import { Injectable } from '@nestjs/common';

export interface PayrollRecord {
    id: number;
    employeeId: number;
    month: string;
    salary: number;
    status: 'Paid' | 'Pending';
}

@Injectable()
export class PayrollService {
    private payrolls: PayrollRecord[] = [
        { id: 1, employeeId: 1, month: 'January 2024', salary: 5000, status: 'Paid' },
        { id: 2, employeeId: 2, month: 'January 2024', salary: 4500, status: 'Pending' },
    ];

    getAllPayrolls(): PayrollRecord[] {
        return this.payrolls;
    }

    payEmployee(id: number): string {
        const payroll = this.payrolls.find((record) => record.id === id);
        if (payroll) {
            payroll.status = 'Paid';
            return 'Payroll Processed';
        }
        return 'Payroll Not Found';
    }
}
