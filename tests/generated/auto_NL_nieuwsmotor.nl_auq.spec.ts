import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nieuwsmotor.nl_auq', ['https://nieuwsmotor.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
