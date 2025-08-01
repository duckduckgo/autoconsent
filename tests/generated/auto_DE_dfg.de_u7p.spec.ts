import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dfg.de_u7p', ['https://www.dfg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
