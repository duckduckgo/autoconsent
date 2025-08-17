import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_getteal.com_y3e', ['https://www.getteal.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
