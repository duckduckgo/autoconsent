import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.hisense.com_58v', ['https://de.hisense.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
