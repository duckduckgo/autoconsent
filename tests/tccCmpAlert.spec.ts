import generateCMPTests from '../playwright/runner';

// In the EU these sites show a Quantcast dialog first; the tccCmpAlert popup only comes after it
generateCMPTests('tccCmpAlert', ['https://www.radiobianconera.com/', 'https://www.radiofirenzeviola.it/', 'https://www.tmwradio.com/'], {
    onlyRegions: ['US'],
});
