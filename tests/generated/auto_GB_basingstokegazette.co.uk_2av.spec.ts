import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_basingstokegazette.co.uk_2av', ['https://www.basingstokegazette.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
