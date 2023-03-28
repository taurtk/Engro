
const areAnagram = (str1,str2) => {
    
    const len1= str1.length;
    const len2 = str2.length;
    
    if(len1!=len2)
    {
        return false
    }
    
    let str1_ = str1.split('')
    let str2_ = str2.split('')
    
     str1_.sort();
        str2_.sort()
   
        // Compare sorted strings
        for (let i = 0; i < len1; i++)
            if (str1_[i] != str2_[i])
                return false;
   
        return true;
    
    
    
}
     
    let str1='listen';
    let str2='silent';
     
    
        if (areAnagram(str1, str2))
            console.log("The two strings are"
                               + " anagram of each other");
        else
            console.log("The two strings are not"
                               + " anagram of each other");
