import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_coinmooner.com_tzr', ['https://coinmooner.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
