import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bitget.com_id7', ['https://www.bitget.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
