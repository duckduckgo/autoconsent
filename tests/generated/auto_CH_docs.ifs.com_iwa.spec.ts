import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_docs.ifs.com_iwa', ['https://docs.ifs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
