import generateCMPTests from '../playwright/runner';

generateCMPTests('dofuspourlesnoobs.com', ['https://dofuspourlesnoobs.com/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['FR'],
});
