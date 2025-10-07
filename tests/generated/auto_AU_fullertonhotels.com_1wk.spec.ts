import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fullertonhotels.com_1wk', ['https://www.fullertonhotels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
