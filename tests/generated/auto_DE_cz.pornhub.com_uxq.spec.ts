import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cz.pornhub.com_uxq', ['https://cz.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
