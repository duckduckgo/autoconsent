import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_partscentre.co.uk_hi7', ['https://www.partscentre.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
