import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_icons8.com_qps', ['https://icons8.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
