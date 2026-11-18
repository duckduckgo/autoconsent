import generateCMPTests from '../playwright/runner';

generateCMPTests('niceshops', ['https://www.3djake.de/', 'https://www.vitalabo.ch/']);

generateCMPTests('niceshops', ['https://www.3djake.ch/', 'https://www.ecco-verde.ch/'], { onlyRegions: ['CH'] });

generateCMPTests('niceshops', ['https://www.3djake.uk/'], { onlyRegions: ['GB'] });
