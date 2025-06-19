import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_wikifeetx.com_08c', ['https://wikifeetx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
