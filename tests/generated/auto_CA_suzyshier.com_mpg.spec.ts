import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_suzyshier.com_mpg', ['https://suzyshier.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
