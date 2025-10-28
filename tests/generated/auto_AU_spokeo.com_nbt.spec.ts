import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_spokeo.com_nbt', ['https://www.spokeo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
