import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ostsee.de_ruk', ['https://www.ostsee.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
