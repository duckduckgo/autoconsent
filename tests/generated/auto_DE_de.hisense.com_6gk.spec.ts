import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.hisense.com_6gk', ['https://de.hisense.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
