import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fullertonhotels.com_aho', ['https://www.fullertonhotels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
