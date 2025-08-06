import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_webastro.net_oev', ['https://www.webastro.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
