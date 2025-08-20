import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dibibe.onleihe.com_ywr', ['https://dibibe.onleihe.com/dibibe/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
