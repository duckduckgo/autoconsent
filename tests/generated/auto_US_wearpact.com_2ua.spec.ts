import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wearpact.com_2ua', ['https://wearpact.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
