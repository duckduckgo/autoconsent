import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dfg.de_qky', ['https://www.dfg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
