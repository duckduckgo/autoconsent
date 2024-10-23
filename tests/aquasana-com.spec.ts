import generateCMPTests from '../playwright/runner'

generateCMPTests('aquasana.com', [
    'https://www.travelonbags.com/',
    'https://www.theworks.co.uk/',
    'https://www.martinguitar.com/',
    'https://www.hpb.com/'
], {})
