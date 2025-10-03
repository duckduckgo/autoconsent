import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_investcentre.co.uk_aq7', ['https://www.investcentre.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
