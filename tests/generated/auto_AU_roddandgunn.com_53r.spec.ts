import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_roddandgunn.com_53r', ['https://www.roddandgunn.com/au'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
