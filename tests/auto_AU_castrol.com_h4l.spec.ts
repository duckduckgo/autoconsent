import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_castrol.com_h4l', ['https://www.castrol.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
