import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aichief.com_1sw', ['https://aichief.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
