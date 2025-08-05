import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pt.pornhub.com_cyb', ['https://pt.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
