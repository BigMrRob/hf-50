import { Injectable } from '@nestjs/common';
import { clerkClient } from '@clerk/clerk-sdk-node';
@Injectable()
export class AppService {
  async getUsers(): Promise<ReturnType<typeof clerkClient.users.getUserList>> {
    const users = await clerkClient.users.getUserList();
    return users;
  }
}
