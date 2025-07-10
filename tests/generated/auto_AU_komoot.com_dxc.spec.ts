import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_komoot.com_dxc', ['https://www.komoot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
