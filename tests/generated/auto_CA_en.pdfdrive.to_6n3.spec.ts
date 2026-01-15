import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_en.pdfdrive.to_6n3', ['https://en.pdfdrive.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
