import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dogwooff.com_wvx', ['https://dogwooff.com/us/homepage/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
