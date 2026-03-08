import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airnergy.com_sh4', ['https://airnergy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
