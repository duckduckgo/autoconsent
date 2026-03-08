import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fioriappslibrary.hana.ondemand.com_v2t', ['https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
