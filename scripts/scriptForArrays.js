var indexCounter = 0;
var arrayOfArrays;

function repopulateArrayOfArrays() {
	arrayOfArrays = [array1, array2, array3, array4, array5, array6, array7, array8, array9];
	shuffleArrayOfArays(arrayOfArrays);
}
repopulateArrayOfArrays();

/*
Display first element in array (array[0]) in the first array of arrayOfArrays
(arrayOfArrays[0]) until there is no more element. Then it repopulate arrays and
shuffle the arrayOfArrays.
*/
function arraySpeak(){
	var arrayX = arrayOfArrays[0];
	document.getElementById("text").innerHTML = arrayX[indexCounter];
		if(indexCounter >= arrayX.length -1){
			indexCounter = 0;
			if (arrayOfArrays.length <= 1){
				repopulateArrayOfArrays();
			}else{
				arrayOfArrays.shift();
			}
		}else{
			indexCounter++;
		}
}
/*
  Randomize array element.
  Using Durstenfeld shuffle algorithm.
 */
function shuffleArrayOfArays(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	return arrayOfArrays = array;
}