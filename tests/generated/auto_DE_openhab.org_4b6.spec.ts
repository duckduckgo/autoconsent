import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_openhab.org_4b6', ['https://www.openhab.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
