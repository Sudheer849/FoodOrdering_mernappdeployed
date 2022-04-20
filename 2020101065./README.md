## *DASS ASSIGNMENT-1* ##

- If a new buyer or vendor atempts to register then I appied findOne function in the backend to check whether a user with the same email id is there. If there is no such user then the details are stored into the database.

- If the combination of user's emailId and name is present in the database then the user can login

-  I stored name and email in localStorage from which I can retrieve all the information of the user in order to print in profile.For editing updateOne make sure to update the old details with new ones 

-  A vendor can add a food item(the same process as reigstration) and I listed all the food items belonging to that vendor(find function with vendor name gives all the food items beloging to that particular vendor). He can delete or edit the food items which can be done through deleteOne and UpdateOne respectively

-  For user all the food items are listed , he can buy the item with buy option , Buy button takes him to another page in which he can add quantity and place and order. If he places order then I decremented the value in the wallet by price*quantity

-  We can update the status of the order in the backend , if the vendor clicks on the move to next function , I updated the value of status in the backend using updateOne function.


