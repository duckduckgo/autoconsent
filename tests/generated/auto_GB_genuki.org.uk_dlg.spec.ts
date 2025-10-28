import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_genuki.org.uk_dlg', ['https://www.genuki.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
