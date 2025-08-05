import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_partscentre.co.uk_84a', ['https://www.partscentre.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
