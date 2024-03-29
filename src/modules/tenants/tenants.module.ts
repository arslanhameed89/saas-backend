import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from './entities/tenant.entity';
import { TenantsController } from './controllers/tenants.controller';
import { TenantsService } from './services/tenants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tenant])],
  providers: [TenantsService],
  controllers: [TenantsController],
})
export class TenantsModule {}
