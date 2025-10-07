import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_weencrypt.pro_lzg', ['https://weencrypt.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
