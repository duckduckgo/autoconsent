import { test } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

// opt-out waits up to 20s for a late third-party CMP after closing the notice
test.describe.configure({ timeout: 60000 });

generateCMPTests('haberler.com', ['https://www.haberler.com/']);
