import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hodinkee.com_rdm', ['https://www.hodinkee.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
