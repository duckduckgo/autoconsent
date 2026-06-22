import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieconsent-classic', ['https://muenchen.adfc.de/sternfahrt', 'https://stuttgart.adfc.de/', 'https://berlin.adfc.de/']);
