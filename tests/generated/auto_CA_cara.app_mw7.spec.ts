import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cara.app_mw7', ['https://cara.app/explore'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
