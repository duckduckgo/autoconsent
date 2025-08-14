import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_castrol.com_xe1', ['https://www.castrol.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
