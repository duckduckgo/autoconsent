import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_result.uit.no_8nf', ['https://result.uit.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
