import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_komoot.com_9fm', ['https://www.komoot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
