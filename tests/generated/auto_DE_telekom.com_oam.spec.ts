import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_telekom.com_oam', ['https://www.telekom.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
