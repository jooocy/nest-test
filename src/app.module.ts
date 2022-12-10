import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mailer.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BatchModule } from './batch/batch.module';
import { TddModule } from './tdd/tdd.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
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
