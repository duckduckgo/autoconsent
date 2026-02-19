import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.accio.com_97o', ['https://de.accio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
