import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_adameve.com_oxq', ['https://www.adameve.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
