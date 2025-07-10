import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pdfdrive.to_3n1', ['https://www.pdfdrive.to/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
