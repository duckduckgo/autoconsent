import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_foxit.com_o6e', ['https://www.foxit.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
