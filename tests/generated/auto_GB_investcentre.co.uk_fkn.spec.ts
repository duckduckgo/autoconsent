import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_investcentre.co.uk_fkn', ['https://www.investcentre.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
