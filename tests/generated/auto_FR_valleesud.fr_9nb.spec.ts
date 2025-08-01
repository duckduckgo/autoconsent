import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_valleesud.fr_9nb', ['https://www.valleesud.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
