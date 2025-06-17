import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_au.ponant.com_0', ['https://au.ponant.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
