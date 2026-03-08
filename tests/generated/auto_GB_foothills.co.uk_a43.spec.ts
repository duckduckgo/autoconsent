import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_foothills.co.uk_a43', ['https://foothills.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
