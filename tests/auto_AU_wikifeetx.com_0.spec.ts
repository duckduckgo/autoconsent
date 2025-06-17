import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_wikifeetx.com_0', ['https://wikifeetx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
