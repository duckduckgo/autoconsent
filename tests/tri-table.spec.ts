import generateCMPTests from '../playwright/runner';

generateCMPTests('tri-table', ['https://ckm.pl/', 'https://tri-table.com/'], {
    skipRegions: ['US'],
});
