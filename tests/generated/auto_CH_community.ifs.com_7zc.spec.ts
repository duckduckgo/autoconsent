import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_community.ifs.com_7zc', ['https://community.ifs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
