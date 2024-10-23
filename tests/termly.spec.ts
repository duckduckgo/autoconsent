import generateCMPTests from '../playwright/runner'

generateCMPTests('Termly', [
    'https://itsalovelylife.com/',
    'https://www.iccsafe.org/'
], {})

generateCMPTests('Termly', [
    'https://visualsbyimpulse.com/'
], {
    skipRegions: ['DE']
})
