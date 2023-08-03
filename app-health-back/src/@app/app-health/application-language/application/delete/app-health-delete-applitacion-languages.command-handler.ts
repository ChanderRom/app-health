import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthDeleteApplitacionLanguagesCommand } from './app-health-delete-applitacion-languages.command';
import { AppHealthDeleteApplitacionLanguagesService } from './app-health-delete-applitacion-languages.service';

@CommandHandler(AppHealthDeleteApplitacionLanguagesCommand)
export class AppHealthDeleteApplitacionLanguagesCommandHandler implements ICommandHandler<AppHealthDeleteApplitacionLanguagesCommand>
{
    constructor(
        private readonly deleteApplitacionLanguagesService: AppHealthDeleteApplitacionLanguagesService,
    ) {}

    async execute(command: AppHealthDeleteApplitacionLanguagesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteApplitacionLanguagesService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}