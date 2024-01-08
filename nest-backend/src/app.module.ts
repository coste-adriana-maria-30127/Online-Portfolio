import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioEntryModule } from './portfolio/portfolio-entry.module';
import { PortfolioEntry } from './typeorm/entities/PortfolioEntry';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database-1.cl8qgai4646r.eu-north-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'Admin123456',
      database: 'online_portfolio',
      entities: [PortfolioEntry],
      synchronize: true,
    }),
    PortfolioEntryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
