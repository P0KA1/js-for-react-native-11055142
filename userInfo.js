// Create a file userInfo.js

// Function to create user profiles
function createUserProfiles() {
  const names = prompt("Enter a list of original names (comma-separated):");
  const modifiedNames = prompt("Enter a list of modified names (comma-separated):");

  // Split the input strings into arrays
  const originalNamesArray = names.split(",");
  const modifiedNamesArray = modifiedNames.split(",");

  const userProfiles = [];
  let id = 1; // Initialize an auto-incremented ID

  // Assuming both arrays have the same length
  for (let i = 0; i < originalNamesArray.length; i++) {
      const originalName = originalNamesArray[i].trim();
      const modifiedName = modifiedNamesArray[i].trim();

      // Create an object with originalName, modifiedName, and ID
      const userProfile = {
          originalName,
          modifiedName,
          id
      };

      userProfiles.push(userProfile);
      id++; // Increment the ID
  }

  return userProfiles;
}

// Example usage
const profiles = createUserProfiles();
console.log(profiles); // Output the array of user profiles
