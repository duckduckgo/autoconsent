import generateCMPTests from '../playwright/runner';

generateCMPTests('vortex-consent', ['https://www.hiof.no/', 'https://www.uio.no/', 'https://www.inn.no/', 'https://www.nih.no/']);
