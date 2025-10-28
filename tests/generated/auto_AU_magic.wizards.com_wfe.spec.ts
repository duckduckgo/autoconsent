import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_magic.wizards.com_wfe', ['https://magic.wizards.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
