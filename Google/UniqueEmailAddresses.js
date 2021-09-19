/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    
    if (!emails || emails.length === 0) {
        return 0;
    }
    
    let resultSet = new Set();
    
    for (let email of emails) {
        resultSet.add(getUniqueEmails(email));
    }
    
    return resultSet.size;
};

var getUniqueEmails = function(email) {
    
    // Check if the email is valid 
    let atSplit = email.split("@");
    
    // Invalid email
    if (atSplit.length !== 2) {
        return null;
    }
    
    let [localName, domainName] = atSplit;
    
    // Truncate everything after +
    localName = localName.split("+")[0];
    
    // Remove all dots
    localName = localName.replaceAll(".","");
    
    return localName+"@"+domainName;
}