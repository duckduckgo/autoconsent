import { test } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

test.describe.configure({ timeout: 120000 });

generateCMPTests('alaskaair', ['https://www.alaskaair.com/']);
