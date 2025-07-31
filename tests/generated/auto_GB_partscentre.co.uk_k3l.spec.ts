import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_partscentre.co.uk_k3l', ['https://www.partscentre.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
