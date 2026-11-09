import generateCMPTests from '../playwright/runner';

generateCMPTests('jtl-consent-manager', ['https://www.velofactory.ch/', 'https://der-rasenmaeher.de/']);

generateCMPTests('jtl-consent-manager', ['https://ersatzteil-shop24.de/'], { onlyRegions: ['CH'] });

generateCMPTests('jtl-consent-manager', ['https://edelstahl-tuerklingel.de/'], { onlyRegions: ['DE'] });
