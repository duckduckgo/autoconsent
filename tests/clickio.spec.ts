import generateCMPTests from '../playwright/runner';

generateCMPTests('click.io', ['https://www.golfshake.com/', 'https://www.angolotesti.it/'], {
    skipRegions: ['US', 'AU', 'CA', 'JP'],
});

generateCMPTests('click.io', ['https://www.ilfoglio.it/'], {
    skipRegions: ['US'],
});
