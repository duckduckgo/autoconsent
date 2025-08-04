import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hodinkee.com_okw', ['https://www.hodinkee.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
