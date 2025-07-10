import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ufc.com_xnn', ['https://www.ufc.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
