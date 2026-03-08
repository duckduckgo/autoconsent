import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ccncn.eu_a8u', ['https://ccncn.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
