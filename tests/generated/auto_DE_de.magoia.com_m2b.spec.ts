import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.magoia.com_m2b', ['https://de.magoia.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
