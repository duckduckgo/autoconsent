import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_armstreet.com_vjb', ['https://armstreet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
