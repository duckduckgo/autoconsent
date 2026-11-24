import { test } from '@playwright/test';
import generateCMPTests from '../playwright/runner';

// the site shows its cookie bar late in the page load
test.describe.configure({ timeout: 90000 });

generateCMPTests('banamex', ['https://www.banamex.com/']);
