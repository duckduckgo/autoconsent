import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_help.na.panasonic.com_73j', ['https://help.na.panasonic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
