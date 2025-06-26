import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tsx.com_g0i', ['https://www.tsx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
