import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omropfryslan.nl_2so', ['https://www.omropfryslan.nl/fy'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
