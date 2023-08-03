/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthUpdateApplitacionLanguagesCommand } from './app-health-update-applitacion-languages.command';
import { AppHealthUpdateApplitacionLanguagesService } from './app-health-update-applitacion-languages.service';
import {
    AppHealthApplicationLanguageId,
    AppHealthApplicationLanguageApplicationId,
    AppHealthApplicationLanguageLanguageId,
    AppHealthApplicationLanguageVersion,
    AppHealthApplicationLanguageScore,
    AppHealthApplicationLanguageCodeQualityScore,
    AppHealthApplicationLanguageCreatedAt,
    AppHealthApplicationLanguageUpdatedAt,
    AppHealthApplicationLanguageDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(AppHealthUpdateApplitacionLanguagesCommand)
export class AppHealthUpdateApplitacionLanguagesCommandHandler implements ICommandHandler<AppHealthUpdateApplitacionLanguagesCommand>
{
    constructor(
        private readonly updateApplitacionLanguagesService: AppHealthUpdateApplitacionLanguagesService,
    ) {}

    async execute(command: AppHealthUpdateApplitacionLanguagesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateApplitacionLanguagesService.main(
            {
                id: new AppHealthApplicationLanguageId(command.payload.id, { undefinable: true }),
                applicationId: new AppHealthApplicationLanguageApplicationId(command.payload.applicationId, { undefinable: true }),
                languageId: new AppHealthApplicationLanguageLanguageId(command.payload.languageId, { undefinable: true }),
                version: new AppHealthApplicationLanguageVersion(command.payload.version, { undefinable: true }),
                score: new AppHealthApplicationLanguageScore(command.payload.score, { undefinable: true }),
                codeQualityScore: new AppHealthApplicationLanguageCodeQualityScore(command.payload.codeQualityScore, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}