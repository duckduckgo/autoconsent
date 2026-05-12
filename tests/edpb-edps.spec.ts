import generateCMPTests from '../playwright/runner';

generateCMPTests('edpb-edps', [
    'https://www.edpb.europa.eu/our-work-tools/our-documents/topic/anonymization_en',
    'https://www.edps.europa.eu/',
]);
