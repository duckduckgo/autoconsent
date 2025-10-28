import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_system76.com_0pg', ['https://system76.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
