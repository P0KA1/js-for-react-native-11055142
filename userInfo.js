function createUserProfiles(originalNames, modifiedNames) {
  const userProfiles = [];

  // Iterate through the arrays and create user profiles
  for (let i = 0; i < originalNames.length; i++) {
    const userProfile = {
      originalName: originalNames[i],
      modifiedName: modifiedNames[i],
      id: i + 1, // Auto-incremented ID starting from 1
    };
    userProfiles.push(userProfile);
  }

  return userProfiles;
}

// Example usage:
const originalNames = ["Alice", "Bob", "Charlie"];
const modifiedNames = ["ALICE", "bob", "CHARLIE"];
const userProfilesResult = createUserProfiles(originalNames, modifiedNames);
console.log(userProfilesResult);