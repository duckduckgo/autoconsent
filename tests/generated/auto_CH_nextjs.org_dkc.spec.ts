import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nextjs.org_dkc', ['https://nextjs.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
