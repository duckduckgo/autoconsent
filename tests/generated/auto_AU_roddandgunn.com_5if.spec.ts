import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_roddandgunn.com_5if', ['https://www.roddandgunn.com/au'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
