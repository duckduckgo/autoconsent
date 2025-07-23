import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_trekbikes.com_42d', ['https://www.trekbikes.com/au/en_AU/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
