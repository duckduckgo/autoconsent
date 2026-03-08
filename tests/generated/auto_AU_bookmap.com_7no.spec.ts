import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bookmap.com_7no', ['https://bookmap.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
