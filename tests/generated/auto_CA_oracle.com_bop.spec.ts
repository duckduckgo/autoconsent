import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_oracle.com_bop', ['https://www.oracle.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
