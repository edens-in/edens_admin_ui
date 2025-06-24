export const readableDateTimeFormating = (isoString) => { 
    const date = new Date(isoString); 

    const redable = date.toLocaleString("en-IN", { 
        dateStyle: "long", 
        timeStyle:"short"
    }); 

    return redable; 
}