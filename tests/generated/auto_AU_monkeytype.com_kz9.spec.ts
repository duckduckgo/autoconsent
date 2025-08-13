import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_monkeytype.com_kz9', ['https://monkeytype.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
