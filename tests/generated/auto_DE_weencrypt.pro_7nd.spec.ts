import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_weencrypt.pro_7nd', ['https://weencrypt.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
