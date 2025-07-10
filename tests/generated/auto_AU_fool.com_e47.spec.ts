import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fool.com_e47', ['https://www.fool.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
