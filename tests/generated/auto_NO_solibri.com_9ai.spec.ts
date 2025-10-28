import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_solibri.com_9ai', ['https://www.solibri.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
