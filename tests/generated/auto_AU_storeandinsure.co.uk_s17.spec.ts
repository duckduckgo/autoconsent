import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_storeandinsure.co.uk_s17', ['https://www.storeandinsure.co.uk/Self-Storage-Insurance'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
