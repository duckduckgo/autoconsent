import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_flytodoc.com_duz', ['https://flytodoc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
