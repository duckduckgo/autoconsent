import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_appian.com_kq1', ['https://appian.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
