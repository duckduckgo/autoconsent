import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bandlab.com_iov', ['https://www.bandlab.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
