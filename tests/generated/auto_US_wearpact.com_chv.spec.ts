import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wearpact.com_chv', ['https://wearpact.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
