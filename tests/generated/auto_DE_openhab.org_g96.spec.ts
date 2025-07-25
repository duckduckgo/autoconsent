import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_openhab.org_g96', ['https://www.openhab.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
