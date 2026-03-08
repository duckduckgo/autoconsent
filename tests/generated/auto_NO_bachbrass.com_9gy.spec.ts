import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bachbrass.com_9gy', ['https://bachbrass.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
