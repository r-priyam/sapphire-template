import { LogLevel, SapphireClient } from '@sapphire/framework';
import { envParseBoolean, envParseString } from '@skyra/env-utilities';
import { GatewayIntentBits } from 'discord-api-types/v10';
import type { ExcludeEnum } from 'discord.js';
import type { ActivityTypes } from 'discord.js/typings/enums';

export class BotClient extends SapphireClient {
	public constructor() {
		super({
			intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages],
			logger: { level: envParseBoolean('DEBUG') ? LogLevel.Debug : LogLevel.Info },
			loadDefaultErrorListeners: envParseBoolean('DEBUG'),
			presence: {
				activities: [
					{
						name: envParseString('ACTIVITY_MESSAGE', 'My Organs!'),
						type: envParseString('ACTIVITY_TYPE', 'WATCHING') as ExcludeEnum<typeof ActivityTypes, 'CUSTOM'>
					}
				]
			}
		});
	}
}
