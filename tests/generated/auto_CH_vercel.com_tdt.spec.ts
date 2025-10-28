import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vercel.com_tdt', ['https://vercel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
