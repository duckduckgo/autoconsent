import { test } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

test.use({ ignoreHTTPSErrors: true });

generateCMPTests('vtb.ru', ['https://www.vtb.ru/']);
