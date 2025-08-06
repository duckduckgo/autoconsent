import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_revolut.com_208', ['https://www.revolut.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
