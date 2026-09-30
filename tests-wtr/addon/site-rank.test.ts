import { expect } from '@esm-bundle/chai';
import { getDomain } from 'tldts-experimental';
import { getSiteRankBucket } from '../../addon/site-rank';
import topSites from '../../addon/top-sites.json';

describe('getSiteRankBucket', () => {
    it('puts listed sites and their subdomains in the top bucket', () => {
        expect(getSiteRankBucket('https://www.bbc.co.uk/news')).to.equal('top');
        expect(getSiteRankBucket('https://de.wikipedia.org/wiki/Cookie')).to.equal('top');
        expect(getSiteRankBucket('http://google.com/')).to.equal('top');
    });

    it('puts all other sites in the other bucket', () => {
        expect(getSiteRankBucket('https://example.com/')).to.equal('other');
        expect(getSiteRankBucket('https://notgoogle.com/')).to.equal('other');
        expect(getSiteRankBucket('http://localhost:8080/')).to.equal('other');
        expect(getSiteRankBucket('about:blank')).to.equal('other');
    });
});

describe('top-sites.json', () => {
    it('has 100 unique registrable domains', () => {
        expect(topSites).to.have.length(100);
        expect(new Set(topSites).size).to.equal(topSites.length);
        topSites.forEach((domain) => expect(getDomain(domain), domain).to.equal(domain));
    });
});
