import { Injectable } from '@nestjs/common';

export interface LeaveRequest {
    id: number;
    employeeId: number;
    reason: string;
    startDate: string;
    endDate: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}

@Injectable()
export class LeaveService {
    private leaves: LeaveRequest[] = [
        { id: 1, employeeId: 1, reason: 'Vacation', startDate: '2024-01-01', endDate: '2024-01-07', status: 'Pending' },
        { id: 2, employeeId: 2, reason: 'Sick Leave', startDate: '2024-02-15', endDate: '2024-02-16', status: 'Approved' },
    ];

    getAllLeaves(): LeaveRequest[] {
        return this.leaves;
    }

    applyLeave(leaveRequest: LeaveRequest): LeaveRequest {
        this.leaves.push(leaveRequest);
        return leaveRequest;
    }

    approveLeave(id: number): string {
        const leave = this.leaves.find((leave) => leave.id === id);
        if (leave) {
            leave.status = 'Approved';
            return 'Leave Approved';
        }
        return 'Leave Not Found';
    }
}
