import generateCMPTests from '../playwright/runner';

// UK/EEA visitors get the Funding Choices dialog first, handled by the generic rule
generateCMPTests('mathsisfun', ['https://www.mathsisfun.com/'], {
    onlyRegions: ['US', 'AU', 'CA', 'JP'],
});
