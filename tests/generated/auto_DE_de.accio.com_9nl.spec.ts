import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.accio.com_9nl', ['https://de.accio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
