import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_revolut.com_ldw', ['https://www.revolut.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
