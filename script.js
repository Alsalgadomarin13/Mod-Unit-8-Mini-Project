

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/220110-encanto-main-bn-1145-3ac0f6.jpg", "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/220110-encanto-main-bn-1145-3ac0f6.jpg","https://img.dtcn.com/image/themanual/4ldpbxicygkkr8fghgjklphrfuc-500x500.jpg"];
	 let action =["https://i.ytimg.com/vi/bWMAWea2zRw/maxresdefault.jpg","https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-02263a86992462aa82d8f29846fb1760_screen.jpg?ts=1637037361","https://www.skillsetmag.com/wp-content/uploads/sites/14/2020/10/80saction1.jpg"];
	 let drama =["https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_3000,h_2032,c_limit/MSDTITA_FE057.jpg", "https://cdn.hiconsumption.com/wp-content/uploads/2014/08/The-Shawshank-Redemption.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gone_With_The_Wind_1967_re-release.jpg/220px-Gone_With_The_Wind_1967_re-release.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action){
    $(".shows").append("<img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
 comedy.push(suggestion);
     console.log(comedy);
    action.push( suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});