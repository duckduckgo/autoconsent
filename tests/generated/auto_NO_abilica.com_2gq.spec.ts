import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_abilica.com_2gq', ['https://abilica.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
