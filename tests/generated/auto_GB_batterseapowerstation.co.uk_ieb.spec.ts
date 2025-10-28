import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_batterseapowerstation.co.uk_ieb', ['https://batterseapowerstation.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
