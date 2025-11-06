import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nicegram.app_0ic', ['https://nicegram.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
