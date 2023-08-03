/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthCreateApplitacionLanguagesCommand } from './app-health-create-applitacion-languages.command';
import { AppHealthCreateApplitacionLanguagesService } from './app-health-create-applitacion-languages.service';
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

@CommandHandler(AppHealthCreateApplitacionLanguagesCommand)
export class AppHealthCreateApplitacionLanguagesCommandHandler implements ICommandHandler<AppHealthCreateApplitacionLanguagesCommand>
{
    constructor(
        private readonly createApplitacionLanguagesService: AppHealthCreateApplitacionLanguagesService,
    ) {}

    async execute(command: AppHealthCreateApplitacionLanguagesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createApplitacionLanguagesService.main(
            command.payload
                .map(applicationLanguage =>
                {
                    return {
                        id: new AppHealthApplicationLanguageId(applicationLanguage.id),
                        applicationId: new AppHealthApplicationLanguageApplicationId(applicationLanguage.applicationId),
                        languageId: new AppHealthApplicationLanguageLanguageId(applicationLanguage.languageId),
                        version: new AppHealthApplicationLanguageVersion(applicationLanguage.version),
                        score: new AppHealthApplicationLanguageScore(applicationLanguage.score),
                        codeQualityScore: new AppHealthApplicationLanguageCodeQualityScore(applicationLanguage.codeQualityScore),
                    };
                }),
            command.cQMetadata,
        );
    }
}