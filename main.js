var names=["Mini Banka", "Sudhanshu Banka", "Suresh Chandra Banka","Yashoda Banka", "me(Shambhavi Banka)"];
var images=["https://thumb7.shutterstock.com/image-photo/stock-vector-working-mom-450w-158801597.j",
"https://www.picgifs.com/graphics/f/fathers-day/graphics-fathers-day-530505.gif",
"http://getdrawings.com/vectors/grandpa-vector-1.jpg",
"https://clipground.com/images/grandmother-clipart-4.jpg",
"https://clipground.com/images/young-girl-clipart-15.jpg"] 

var i=0;
function update()
{
    i++;
    var number_of_family_member_in_array=5
    if(i>number_of_family_member_in_array)
{
    i=0; 
}
var updatedImage=images[i];
var updatedName=names[i];
document.getElementById("family").src=updatedImage;
document.getElementById("family_member_name").innerHTML=updatedName;
}
