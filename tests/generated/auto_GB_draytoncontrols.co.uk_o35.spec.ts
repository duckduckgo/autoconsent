import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_draytoncontrols.co.uk_o35', ['https://www.draytoncontrols.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
