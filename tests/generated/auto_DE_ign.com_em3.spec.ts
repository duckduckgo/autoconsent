import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ign.com_em3', ['https://de.ign.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
