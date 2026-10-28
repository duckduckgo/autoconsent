import generateCMPTests from '../playwright/runner';

generateCMPTests('tri-table', ['https://ckm.pl/', 'https://tri-table.com/', 'https://wiadomosci.dziennik.pl/', 'https://forsal.pl/'], {
    skipRegions: ['US'],
});
