


function createUserProfiles() {
  const names = prompt("Enter a list of original names (comma-separated):");
  const modifiedNames = prompt("Enter a list of modified names (comma-separated):");


  const originalNamesArray = names.split(",");
  const modifiedNamesArray = modifiedNames.split(",");

  const userProfiles = [];
  let id = 1; 

 
  for (let i = 0; i < originalNamesArray.length; i++) {
      const originalName = originalNamesArray[i].trim();
      const modifiedName = modifiedNamesArray[i].trim();

  
      const userProfile = {
          originalName,
          modifiedName,
          id
      };

      userProfiles.push(userProfile);
      id++; 
  }

  return userProfiles;
}


const profiles = createUserProfiles();
console.log(profiles); 
