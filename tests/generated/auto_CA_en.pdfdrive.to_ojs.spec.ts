import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_en.pdfdrive.to_ojs', ['https://en.pdfdrive.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
