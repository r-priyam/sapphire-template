import type { ArrayString, BooleanString } from '@skyra/env-utilities';

declare module '@skyra/env-utilities' {
	interface Env {
		NODE_ENV: 'test' | 'development' | 'production';
		DEBUG: BooleanString;

		OWNERS: ArrayString;

		DISCORD_TOKEN: string;

		ACTIVITY_MESSAGE: string;
		ACTIVITY_TYPE: string;
	}
}
