function upperFirst(contacts) {
    const formattedContacts = [];
    
    // Insert your code here
    for (let i = 0; i < contacts.length; i++){
      // console.log(i)
      const formatted = contacts[i].charAt(0).toUpperCase() + contacts[i].slice(1).toLowerCase();        
      
      // Ajoute le contact formaté au tableau
      formattedContacts.push(formatted);
    }
    
    return formattedContacts;
}

console.log(upperFirst(['pierre', 'PAUL', 'jAcqUes']));
// Expected: ['Pierre', 'Paul', 'Jacques']
