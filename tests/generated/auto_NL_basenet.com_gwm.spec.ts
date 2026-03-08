import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_basenet.com_gwm', ['https://basenet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
