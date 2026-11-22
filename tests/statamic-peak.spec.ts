import generateCMPTests from '../playwright/runner';

generateCMPTests('statamic-peak', ['https://beducated.com/', 'https://gehaltsreporter.de/']);
generateCMPTests('statamic-peak', ['https://10design.co/'], {
    onlyRegions: ['GB'],
});
// no reject button: the optional categories are unticked and saved
generateCMPTests('statamic-peak', ['https://cath.ch/'], {
    onlyRegions: ['DE', 'CH'],
});
