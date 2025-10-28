import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sgp.nl_ddv', ['https://sgp.nl/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
