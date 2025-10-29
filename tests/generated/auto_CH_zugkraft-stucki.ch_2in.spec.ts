import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zugkraft-stucki.ch_2in', ['https://www.zugkraft-stucki.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
