import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { CoreModule } from './@aurora/core.module';
import { AppHealthModule } from './@api/app-health/app-health.module';
import { CommonModule } from '@api/common/common.module';

@Module({
    imports: [
        CoreModule,
        AppHealthModule,
        CommonModule
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}
