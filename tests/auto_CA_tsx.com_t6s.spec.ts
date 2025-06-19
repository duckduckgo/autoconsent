import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_tsx.com_t6s', ['https://www.tsx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
