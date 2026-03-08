import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_euro-sports.ca_wys', ['https://euro-sports.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
