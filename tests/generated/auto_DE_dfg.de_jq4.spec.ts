import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dfg.de_jq4', ['https://www.dfg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
