import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mailer.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BatchModule } from './batch/batch.module';
import { TddModule } from './tdd/tdd.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BatchModule,
    TddModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}
