import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_allwayshealthy.nl_ypb', ['https://www.allwayshealthy.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
