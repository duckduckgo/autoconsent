import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_arporn.com_lg8', ['https://arporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
