import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_ebookplus.onleihe.com_fdp',
    ['https://ebookplus.onleihe.com/verbund_baden/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
