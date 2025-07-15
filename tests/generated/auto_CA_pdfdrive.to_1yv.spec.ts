import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pdfdrive.to_1yv', ['https://www.pdfdrive.to/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
