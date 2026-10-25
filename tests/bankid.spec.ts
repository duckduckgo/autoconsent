import generateCMPTests from '../playwright/runner';

generateCMPTests('bankid', ['https://www.bankid.com/'], {
    onlyRegions: ['SE'],
});
