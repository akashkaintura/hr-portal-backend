import { Controller, Get, Patch, Param } from '@nestjs/common';
import { PayrollService, PayrollRecord } from './payroll.service';

@Controller('payrolls')
export class PayrollController {
    constructor(private readonly payrollService: PayrollService) { }

    @Get()
    getAllPayrolls(): PayrollRecord[] {
        return this.payrollService.getAllPayrolls();
    }

    @Patch(':id/pay')
    payEmployee(@Param('id') id: number): string {
        return this.payrollService.payEmployee(+id);
    }
}
