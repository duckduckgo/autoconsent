import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_historicenvironment.scot_0', ['https://www.historicenvironment.scot/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
