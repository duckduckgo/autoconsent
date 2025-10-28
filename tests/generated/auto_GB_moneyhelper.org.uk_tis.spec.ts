import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_moneyhelper.org.uk_tis', ['https://www.moneyhelper.org.uk/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
