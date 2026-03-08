import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bulova.com_84f', ['https://de.bulova.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
