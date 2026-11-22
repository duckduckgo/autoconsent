import generateCMPTests from '../playwright/runner';

generateCMPTests('sharps.co.uk', ['https://www.sharps.co.uk/'], {
    onlyRegions: ['GB'],
});
