/**
 * Required-literal prefilter for heuristic detect patterns: each pattern gets literals that any match must contain, and
 * a text is checked for all of them in one pass. A pattern whose literals are all absent can't match, so it is skipped
 * without changing any result.
 */

/** The index of the `)` closing the group that opens at `open`, skipping escapes and classes. */
function groupEnd(src: string, open: number): number {
    let depth = 0;
    for (let i = open; i < src.length; i++) {
        const c = src[i];
        if (c === '\\') {
            i++;
        } else if (c === '[') {
            while (i < src.length && src[i] !== ']') {
                i += src[i] === '\\' ? 2 : 1;
            }
        } else if (c === '(') {
            depth++;
        } else if (c === ')' && --depth === 0) {
            return i;
        }
    }
    return src.length;
}

/** Splits a regex source at its top-level `|`. */
function alternatives(src: string): string[] {
    const parts = [];
    let from = 0;
    for (let i = 0; i < src.length; i++) {
        const c = src[i];
        if (c === '\\') {
            i++;
        } else if (c === '[') {
            while (i < src.length && src[i] !== ']') {
                i += src[i] === '\\' ? 2 : 1;
            }
        } else if (c === '(') {
            i = groupEnd(src, i);
        } else if (c === '|') {
            parts.push(src.slice(from, i));
            from = i + 1;
        }
    }
    parts.push(src.slice(from));
    return parts;
}

/** A group's alternatives as lowercased plain literals (word boundaries dropped), or null if any has other syntax. */
function plainAlternatives(inner: string): string[] | null {
    if (/^\?(?:!|<!)/.test(inner)) {
        return null;
    }
    const plain = alternatives(inner.replace(/^\?(?::|=|<=)/, '')).map((p) => p.replace(/\\b/g, '').replace(/\\([^A-Za-z0-9])/g, '$1'));
    return plain.every((p) => p && !/[\\.^$*+?()[\]{}|]/.test(p)) ? plain.map((p) => p.toLowerCase()) : null;
}

function literalsOf(src: string): string[] {
    const alts = alternatives(src);
    if (alts.length > 1) {
        const each = alts.map(literalsOf);
        return each.every((l) => l.length) ? each.flat() : [];
    }
    // candidate requirements: a run of literal characters, or a required group of plain alternatives
    const candidates: string[][] = [];
    let run = '';
    const end = () => {
        candidates.push([run.toLowerCase()]);
        run = '';
    };
    const quantifier = (i: number) => {
        const q = src[i];
        if (q !== '?' && q !== '*' && q !== '+' && q !== '{') {
            return { zero: false, quantified: false, next: i };
        }
        const zero = q === '?' || q === '*' || (q === '{' && /^\{0[,}]/.test(src.slice(i)));
        let j = q === '{' ? src.indexOf('}', i) + 1 : i + 1;
        if (src[j] === '?') {
            j++;
        }
        return { zero, quantified: true, next: j };
    };
    const literalChar = (ch: string, i: number) => {
        const q = quantifier(i);
        if (!q.zero) {
            run += ch;
        }
        if (q.quantified) {
            end();
        }
        return q.next;
    };
    for (let i = 0; i < src.length;) {
        const c = src[i];
        if (c === '\\') {
            const n = src[i + 1];
            if (/[^A-Za-z0-9]/.test(n)) {
                i = literalChar(n, i + 2);
            } else {
                end();
                i = quantifier(i + 2).next;
            }
        } else if (c === '[') {
            let j = i + 1;
            while (j < src.length && src[j] !== ']') {
                j += src[j] === '\\' ? 2 : 1;
            }
            end();
            i = quantifier(j + 1).next;
        } else if (c === '(') {
            end();
            const close = groupEnd(src, i);
            const q = quantifier(close + 1);
            const plain = q.zero ? null : plainAlternatives(src.slice(i + 1, close));
            if (plain && plain.every((p) => p.length >= 3)) {
                candidates.push(plain);
            }
            i = q.next;
        } else if (c === '.' || c === '^' || c === '$') {
            end();
            i = quantifier(i + 1).next;
        } else {
            i = literalChar(c, i + 1);
        }
    }
    end();
    // the most selective cheap check: the requirement whose shortest literal is longest
    const shortest = (l: string[]) => Math.min(...l.map((x) => x.length));
    const usable = candidates.filter((l) => l.every((x) => x.trim().length >= 3));
    const best = usable.reduce((a, b) => (shortest(b) > shortest(a) ? b : a), ['']);
    return best[0] && shortest(best) >= 4 ? [...new Set(best)] : [];
}

/**
 * Lowercased literals any match of a regex must contain (at least one of them), or none if they can't be worked out.
 */
export function requiredLiterals(re: RegExp): string[] {
    return literalsOf(re.source);
}

/**
 * Finds which literals a text contains in one pass: a zero-width lookahead over the literals, longest first, reports
 * the longest one starting at each position, and any other literal starting there is a prefix of it.
 */
export function literalIndex(all: string[]): { present: (lower: string) => Set<string> } {
    const distinct = [...new Set(all)].sort((a, b) => b.length - a.length);
    if (distinct.length === 0) {
        return { present: () => new Set() };
    }
    const escape = (l: string) => l.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
    const any = new RegExp(`(?=(${distinct.map(escape).join('|')}))`, 'g');
    const implies = new Map(distinct.map((m) => [m, distinct.filter((l) => m.startsWith(l))]));
    return {
        present(lower: string) {
            const found = new Set<string>();
            for (const m of lower.matchAll(any)) {
                if (!found.has(m[1])) {
                    implies.get(m[1])?.forEach((l) => found.add(l));
                }
            }
            return found;
        },
    };
}
