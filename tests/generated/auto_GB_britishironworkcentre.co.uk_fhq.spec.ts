import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_britishironworkcentre.co.uk_fhq', ['https://www.britishironworkcentre.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
