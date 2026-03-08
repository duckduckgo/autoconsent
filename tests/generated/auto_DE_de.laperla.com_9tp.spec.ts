import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.laperla.com_9tp', ['https://de.laperla.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
