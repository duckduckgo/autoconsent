import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nicegram.app_hoh', ['https://nicegram.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
