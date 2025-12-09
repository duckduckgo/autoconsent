import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_surfspot.nl_za3', ['https://www.surfspot.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
