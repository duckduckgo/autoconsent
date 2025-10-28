import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dummies.com_9x1', ['https://www.dummies.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
