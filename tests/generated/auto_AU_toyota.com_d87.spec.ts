import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_toyota.com_d87', ['https://www.toyota.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
