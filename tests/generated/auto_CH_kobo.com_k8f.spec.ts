import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kobo.com_k8f', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
