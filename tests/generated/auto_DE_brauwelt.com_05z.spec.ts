import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brauwelt.com_05z', ['https://brauwelt.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
