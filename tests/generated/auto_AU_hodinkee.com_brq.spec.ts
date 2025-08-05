import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hodinkee.com_brq', ['https://www.hodinkee.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
