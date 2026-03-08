import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_centralcoastkyokushinkarate.com_8l4', ['https://centralcoastkyokushinkarate.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
