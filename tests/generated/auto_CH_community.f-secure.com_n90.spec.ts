import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_community.f-secure.com_n90', ['https://community.f-secure.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
