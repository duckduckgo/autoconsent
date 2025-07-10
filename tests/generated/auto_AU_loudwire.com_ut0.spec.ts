import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_loudwire.com_ut0', ['https://loudwire.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
