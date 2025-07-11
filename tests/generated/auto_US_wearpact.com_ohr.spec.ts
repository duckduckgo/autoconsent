import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wearpact.com_ohr', ['https://wearpact.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
