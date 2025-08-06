import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_dibizentral.onleihe.com_q39',
    ['https://dibizentral.onleihe.com/dibizentral/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
