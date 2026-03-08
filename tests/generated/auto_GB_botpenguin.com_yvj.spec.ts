import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_botpenguin.com_yvj', ['https://botpenguin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
