import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_skylum.com_avm', ['https://skylum.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
