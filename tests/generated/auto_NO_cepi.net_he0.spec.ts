import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cepi.net_he0', ['https://cepi.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
