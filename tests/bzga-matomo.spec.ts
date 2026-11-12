import generateCMPTests from '../playwright/runner';

generateCMPTests('bzga-matomo', ['https://www.infektionsschutz.de/', 'https://www.bioeg.de/']);

generateCMPTests('bzga-matomo', ['https://www.organspende-info.de/', 'https://www.kindergesundheit-info.de/'], { onlyRegions: ['DE'] });
