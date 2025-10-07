import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_beducated.com_i3w', ['https://beducated.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
