import 'reflect-metadata';
import '@sapphire/plugin-logger/register';

import { inspect } from 'node:util';

import { ApplicationCommandRegistries, RegisterBehavior } from '@sapphire/framework';
import { setup } from '@skyra/env-utilities';
import { createColors } from 'colorette';

import { srcFolder } from '#utils/constants';

process.env.NODE_ENV ??= 'development';

setup(new URL('.env', srcFolder));
inspect.defaultOptions.depth = 1;
createColors({ useColor: true });
ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.Overwrite);
