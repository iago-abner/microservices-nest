import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/domain/repositories/NotificationsRepository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/PrismaNotificationsRepository';

@Module({
  providers: [
    PrismaService,
    {
      useClass: PrismaNotificationsRepository,
      provide: NotificationRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
