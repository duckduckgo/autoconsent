import generateCMPTests from '../playwright/runner';

generateCMPTests('trustcommander', ['https://www.betclic.pl/', 'https://www.activia.pl/', 'https://www.oferteo.pl/'], {
    onlyRegions: ['PL'],
});

generateCMPTests('trustcommander', ['https://www.kartell.com/', 'https://www.consorsbank.de/', 'https://www.erstebank.hu/'], {
    onlyRegions: ['DE'],
});

generateCMPTests(
    'trustcommander',
    ['https://www.lcl.fr/', 'https://www.edf.fr/', 'https://www.coriolis.com/', 'https://www.habitatpresto.com/'],
    {
        onlyRegions: ['FR'],
    },
);

generateCMPTests('trustcommander', ['https://www.danonenorthamerica.com/', 'https://www.kartell.com/'], {
    onlyRegions: ['US'],
});
