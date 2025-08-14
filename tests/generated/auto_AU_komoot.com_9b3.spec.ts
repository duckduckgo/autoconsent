import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_komoot.com_9b3', ['https://www.komoot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
