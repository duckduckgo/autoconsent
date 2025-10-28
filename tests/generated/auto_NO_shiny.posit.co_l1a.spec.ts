import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_shiny.posit.co_l1a', ['https://shiny.posit.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
