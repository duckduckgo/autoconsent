import { test } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

test.skip(({ browserName }) => browserName !== 'chromium', 'uwv.nl certificate chain fails in local WebKit/Firefox.');

generateCMPTests('uwv-nl', ['https://uwv.nl/']);
