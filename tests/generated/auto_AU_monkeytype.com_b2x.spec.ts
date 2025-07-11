import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_monkeytype.com_b2x', ['https://monkeytype.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
