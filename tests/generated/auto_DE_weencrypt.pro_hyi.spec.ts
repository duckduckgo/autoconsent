import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_weencrypt.pro_hyi', ['https://weencrypt.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
