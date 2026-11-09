import generateCMPTests from '../playwright/runner';

generateCMPTests('trustcommander', ['https://www.axa.de/', 'https://aide.laposte.fr/']);

generateCMPTests('trustcommander', ['https://www.labanquepostale.fr/', 'https://www.laposte.fr/', 'https://localiser.laposte.fr/'], {
    onlyRegions: ['CH'],
});

generateCMPTests(
    'trustcommander',
    [
        'https://www.labanquepostale.com/',
        'https://www.3ds.com/',
        'https://www.maty.com/',
        'https://www.pfg.fr/',
        'https://www.pointdevente.parionssport.fdj.fr/',
    ],
    { onlyRegions: ['FR'] },
);

generateCMPTests('trustcommander', ['https://www.ernstings-family.de/'], { onlyRegions: ['DE'] });
