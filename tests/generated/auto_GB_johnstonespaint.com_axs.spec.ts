import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_johnstonespaint.com_axs', ['https://www.johnstonespaint.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
