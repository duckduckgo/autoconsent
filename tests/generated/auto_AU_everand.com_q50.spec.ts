import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_everand.com_q50', ['https://www.everand.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
