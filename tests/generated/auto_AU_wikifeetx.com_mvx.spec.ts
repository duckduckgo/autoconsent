import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wikifeetx.com_mvx', ['https://wikifeetx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
