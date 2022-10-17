function longerName (
    name1 , name2
)
{
    if( name1.length > name2.length)
    return 1;
    else if (name1.length < name2.length)
    return 2;
    else 
    return 0;
}
function longestName (
    name1, name2, name3
)
{
    const longer = longerName(
        name1 , name2
    )
    if (longer === 1){//This one name 1 is longer//
        const longest = longerName(
            name1, name3
        )
        if (longest === 1)
        console.log(name1+" Has the longest name.");
        else if(longest === 2)
        console.log(name3+" Has the longest name. ")
        else
        console.log(name1 + " and " + name3 + " Tie for the longest name. ")
    }
    else if(longer === 2){//name 2 is longer//
        const longest = longerName(
            name2, name3
        )
        if (longest === 1)
        console.log(name2+" Has the longest name.");
        else if(longest === 2)
        console.log(name3+" Has the longest name. ")
        else
        console.log(name2 + " and " + name3 + " Tie for the longest name. ")
    }
    else{//name1=name2//
        const longest = longerName(
            name2, name3
        )
        if (longest === 1)
        console.log(name1 + " and " + name2 + " Tie for the longest name. ");
        else if(longest === 2)
        console.log(name3+" Has the longest name. ")
        else
        console.log("all 3 names, name1 name 2 and name3 are the same length ")
    }
    
}
longestName ("Brian", "Angela", "Dominic" )
longestName ("Brian", "Angelar", "Dominic" )