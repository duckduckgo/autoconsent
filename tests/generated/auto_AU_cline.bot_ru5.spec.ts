import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cline.bot_ru5', ['https://cline.bot/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
