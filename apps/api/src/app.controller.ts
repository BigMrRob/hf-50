import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { ClerkAuthGuard } from './guards/clerk-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ClerkAuthGuard)
  getUsers(): Promise<ReturnType<typeof clerkClient.users.getUserList>> {
    return this.appService.getUsers();
  }
}
