/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
    
    if (!cpdomains || cpdomains.length === 0) {
        return [];
    }
    
    let domainMap = new Map();
    
    for (let domain of cpdomains) {
        
        // Get the count separately and the domain separately first
        let countAndDomain = domain.split(' ');
        
        let domainSplit = countAndDomain[1].split('.');
        let allDomains = [];
        
        // Get possibilities of all domains
        if (domainSplit.length === 3) {
            allDomains.push(`${domainSplit[0]}.${domainSplit[1]}.${domainSplit[2]}`);
            allDomains.push(`${domainSplit[1]}.${domainSplit[2]}`);
            allDomains.push(`${domainSplit[2]}`);
        } else {
            allDomains.push(`${domainSplit[0]}.${domainSplit[1]}`);
            allDomains.push(`${domainSplit[1]}`);
        }
        
        for (let domain of allDomains) {
            if (domainMap.has(domain)) {
                domainMap.set(domain, domainMap.get(domain)+parseInt(countAndDomain[0]));
            } else {
                domainMap.set(domain, parseInt(countAndDomain[0]));
            }
        }
    }
    
    let result = [];
    
    // Format the result
    
    domainMap.forEach((value, key) => {
       let resultString = `${value} ${key}`;
        result.push(resultString);
    });
    
    return result;
};


console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))