import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_britishironworkcentre.co.uk_9qy', ['https://www.britishironworkcentre.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
