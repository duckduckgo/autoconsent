import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_coinstrail.com_ext', ['https://coinstrail.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
