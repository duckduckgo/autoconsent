import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_etherpad.org_29h', ['https://etherpad.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
