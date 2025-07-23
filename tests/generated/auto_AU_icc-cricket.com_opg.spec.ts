import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_icc-cricket.com_opg', ['https://www.icc-cricket.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
