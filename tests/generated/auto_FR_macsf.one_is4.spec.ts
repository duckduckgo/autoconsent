import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_macsf.one_is4', ['https://client.macsf.one/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
