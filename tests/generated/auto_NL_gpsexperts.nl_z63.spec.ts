import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gpsexperts.nl_z63', ['https://gpsexperts.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
