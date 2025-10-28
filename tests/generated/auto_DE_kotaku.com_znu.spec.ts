import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kotaku.com_znu', ['https://kotaku.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
