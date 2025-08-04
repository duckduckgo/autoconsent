import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nicegram.app_yga', ['https://nicegram.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
