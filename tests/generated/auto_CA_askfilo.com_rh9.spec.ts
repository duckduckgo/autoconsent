import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_askfilo.com_rh9', ['https://askfilo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
