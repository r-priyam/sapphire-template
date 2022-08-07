import '#lib/setup';
import { exit } from 'node:process';

import { BotClient } from '#lib/extensions/BotClient';

const client = new BotClient();

try {
	await client.login();
	client.logger.info('Successfully logged in.');
} catch (error) {
	client.logger.error(error);
	client.destroy();
	exit(1);
}
