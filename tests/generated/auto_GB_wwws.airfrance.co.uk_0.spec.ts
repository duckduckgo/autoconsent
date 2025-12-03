import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wwws.airfrance.co.uk_0', ['https://wwws.airfrance.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
