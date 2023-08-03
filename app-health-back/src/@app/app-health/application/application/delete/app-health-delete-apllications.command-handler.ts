import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthDeleteApllicationsCommand } from './app-health-delete-apllications.command';
import { AppHealthDeleteApllicationsService } from './app-health-delete-apllications.service';

@CommandHandler(AppHealthDeleteApllicationsCommand)
export class AppHealthDeleteApllicationsCommandHandler implements ICommandHandler<AppHealthDeleteApllicationsCommand>
{
    constructor(
        private readonly deleteApllicationsService: AppHealthDeleteApllicationsService,
    ) {}

    async execute(command: AppHealthDeleteApllicationsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteApllicationsService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}