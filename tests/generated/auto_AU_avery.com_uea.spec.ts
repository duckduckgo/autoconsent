import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_avery.com_uea', ['https://www.avery.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
