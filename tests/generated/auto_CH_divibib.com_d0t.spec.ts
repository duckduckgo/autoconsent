import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_divibib.com_d0t', ['https://www.divibib.com/informationen-fuer-nutzerinnen/c-1819'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
