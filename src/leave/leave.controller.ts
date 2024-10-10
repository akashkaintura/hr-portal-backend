import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { LeaveService, LeaveRequest } from './leave.service';

@Controller('leaves')
export class LeaveController {
    constructor(private readonly leaveService: LeaveService) { }

    @Get()
    getAllLeaves(): LeaveRequest[] {
        return this.leaveService.getAllLeaves();
    }

    @Post()
    applyLeave(
        @Body() leaveRequest: { employeeId: number; reason: string; startDate: string; endDate: string }
    ): LeaveRequest {
        const newLeave: LeaveRequest = {
            id: Date.now(),
            status: 'Pending',
            ...leaveRequest
        };
        return this.leaveService.applyLeave(newLeave);
    }

    @Patch(':id/approve')
    approveLeave(@Param('id') id: number): string {
        return this.leaveService.approveLeave(+id);
    }
}
