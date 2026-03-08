import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_camper.nl_4vy', ['https://camper.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
