import generateCMPTests from '../playwright/runner';

generateCMPTests('acceptrics', ['https://www.vpnunlimited.com/']);

// acceptrics.com shows its banner only in the EEA
generateCMPTests('acceptrics', ['https://acceptrics.com/'], {
    onlyRegions: ['DE', 'FR'],
});
