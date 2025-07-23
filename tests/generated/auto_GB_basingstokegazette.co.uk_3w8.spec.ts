import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_basingstokegazette.co.uk_3w8', ['https://www.basingstokegazette.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
