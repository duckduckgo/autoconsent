import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_flobikes.com_pry', ['https://www.flobikes.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
