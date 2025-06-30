import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tsx.com_jow', ['https://www.tsx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
