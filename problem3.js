// Create an array called ```peopleList``` objects using *Object Literal* notation.
//
// * Each 'person' object in the 'people' collection should have the following information:
//
//     First Name
// Last Name
// Age
// Zip Code
//
// Add the following 4 People to your list:
//     ```
// Jimmy Page, 62, 00821
//
// Rick Nielsen, 57, 61016
//
// Jimi Hendrix, 58, 90001
//
// Lemmy Kilmister, 57, 21120
// ```

var Artist =
    [{
        firstName: "Jimmy",
        lastName: "Page",
        age: 62,
        zipcode: 87382,
    },
        {
            firstName: "Rick",
            lastName: "Nielson",
            age: 57,
            zipcode: 61016,
        },
        {
            firstName: "Jimi",
            lastName: "Hendrix",
            age: 58,
            zipcode: 90001,
        },
        {
            firstName: "Lemmy",
            lastName: "Kilmister",
            age: 57,
            zipcode: 21120,
        }];


// * Dynamically add the property ```famousSong``` to the
// object instance for ```Jimi Hendrix``` and assign it the value ```Purple Haze```
//
// * Dynamically add a function called ```getBandandZip()``` to
// the object instance for ```Jimmy Page``` that returns a concatenated string of
// ```Led Zeppelin HISZIPCODE``` (get zip code from the object instance). Call the function from your code and log the response.
//
// * Write a function that accepts a zip code
// parameter and prints out all the people in
// the array with a matching zip code, or print the message
// ```No match found for zip code!``` if there is no match
//

Artist[2].famousSong="purple haze";
Artist[0].getBandandZip= function()
{
    return("Led Zepplin " + this.zipcode)
}