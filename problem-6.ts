{
    
interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  // Define the updateProfile function
  const updateProfile = (profile: Profile, updates: Partial<Profile>): Profile => {
    // Use object spread and updates
    const updatedProfile = { ...profile, ...updates }
    return updatedProfile
  };
  
  const myProfile = { name: "Mehedi", age: 25, email: "mehedi@gmail.com" }
  console.log(updateProfile(myProfile, { age: 22 }))
  
  
}