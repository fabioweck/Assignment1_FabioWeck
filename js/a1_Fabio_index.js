// @name: Assignment1
// @Course Code: SODV1201 - 23JANMNTR1
// @class: Web Programming
// @author: Fabio Augusto Weck 



//===================================================================
//--- Functions to display date and real time clock on the footer ---
//===================================================================

function realTime()
{
    let refresh = 1000; //set timer - 1000 milliseconds = 1 second
    setTimeout('showDateAndTime()', refresh); //calls the function do display time and date after 1 second
}



function showDateAndTime()
{
    let date = new Date();
    document.getElementById("right").innerHTML = "Fabio Augusto Weck &copy. All rights reserved.</br>" + date;
    realTime();
}//end of date and real time functions



//===================================================================
//------ Function to display main image name after 10 seconds -------
//===================================================================

function loadName()
{
    const mediaQuery = window.matchMedia('(min-width: 768px)'); //different bar sizes for each browser sizes
    const mediaQuery2 = window.matchMedia('(min-width: 470px)');

    const name = document.getElementById("name-bar");
    name.innerHTML = "";
    name.style.width = "0px";

    if (mediaQuery.matches) //load bar size for 768px or more (screen size)
    {
        var i = 0;
    
        if(i == 0)
        {
            i = 1;
            var width = 0;
            var delay = setInterval(() => {if (width >= 600)
                {
                    clearInterval(delay);//stops loading after filling all the white bar (reaching width 600px)
                    i = 0;
                    name.innerHTML = 'DELOREAN DMC-12 "TIME MACHINE"';                   
                }
                else 
                {
                    width += 1; //increases width size until reaching 600px
                    name.style.width = width + "px";
                }
            } , 16.6); //Delay in milliseconds to get smooth transition - 10,000 milliseconds divided by 600px
        }
    }//end of load bar size for 768px or more

    else if(mediaQuery2.matches) //load bar size for 470px or more (screen size)
    {
        var i = 0;
   
        if(i == 0)
        {
            i = 1;
            name.style.width = "450px";
            var width = 0;
            var delay = setInterval(() => {if (width >= 450)
                {
                    clearInterval(delay);//stops loading after filling all the white bar (reaching width 450px)
                    i = 0;
                    name.innerHTML = 'DELOREAN DMC-12 "TIME MACHINE"';
                }
                else 
                {
                    width += 1; //increases width size until reaching 450px
                    name.style.width = width + "px";
                }
            } , 22.22); //Delay in milliseconds to get smooth transition - 10,000 milliseconds divided by 450px
        }
    }//end of load bar size for 470px or more

    else //load bar size for less than 470px (screen size)
    {
        var i = 0;
   
        if(i == 0)
        {
            i = 1;
            name.style.width = "450px";
            var width = 0;
            var delay = setInterval(() => {if (width >= 320)
                {
                    clearInterval(delay);//stops loading after filling all the white bar
                    i = 0;
                    name.innerHTML = 'DELOREAN DMC-12 "TIME MACHINE"';
                }
                else 
                {
                    width += 1; //increases width size until reaching 320px
                    name.style.width = width + "px";
                }
            } , 31.25); //Delay in milliseconds to get smooth transition - 10,000 milliseconds divided by 320px 
        }

    } //end of load bar size for less than 470px

}//end of loadName function



//===================================================================
//--------- Function to display mark converted to grade -------------
//===================================================================

function MarkToGrade()
{   
    const grade = document.getElementById("grade").value;
    const result = document.getElementById("afterCheck");

    try //try-catch to avoid invalid entries from user
    {

        if(parseInt(grade) == 0) throw "Your grade is: F";                   //checks 0      
        if(isNaN(grade)) throw "It is not a number";                         //checks "not a number"
        if(grade < 0 || grade > 100) throw "Enter a number from 0 to 100";   //checks number out of range
        if(grade.trim() == "") throw "Empty - enter a number";               //checks empty field
        if(grade > 0 && grade <= 100) throw "Your grade is: ";               //throws the sentence to concatenate with grade

    }

    catch(msg)
    {
        if(grade > 0 && grade <= 100) //checks the mark and delivers proper grade
        { 
            switch(true) 
            {
                case grade > 0 && grade < 50 : result.innerHTML = msg + "F"; break; 
                case grade >= 50 && grade < 70: result.innerHTML = msg + "D"; break;
                case grade >= 70 && grade < 80: result.innerHTML = msg + "C"; break;
                case grade >= 80 && grade < 90: result.innerHTML = msg + "B"; break;
                case grade >= 90 && grade <= 100: result.innerHTML = msg + "A"; break;  
            }  
        }
        else
        {
            result.innerHTML = msg; //displays messages when the user input is invalid
        }  

    }//end of try-catch

}//end of mark to grade




//===================================================================
//--- Collection of data and functions to display and sort table  ---
//===================================================================

var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

//Function to sort table

function sortTable(column)
{

    if(column == 5) //Number 5 calls the function to sort salary column
    { 

        if (localStorage.clickcount == 0) //condition added to allow users to click several times and sort in ascending or descending order
        {

            localStorage.clickcount = 1;  //value '1' leads to second sort method after first click  
            var comma = ',';

            for(let i = 0; i < dataSet.length; i++)
            {

                //This scope has a unique function to remove all commas from strings in order to deliver "pure" numbers to sort method

                dataSet[i][5] = dataSet[i][5].replace(comma , '');       //removes comma

                if(dataSet[i][5].length >= 9) //condition to remove 2 commas from million numbers
                {       
                    dataSet[i][5] = dataSet[i][5].replace(comma , '');   //removes comma
                }

            }//end of loop

            dataSet.sort(function(a,b) 
            {
                return a[5].substring(1) - b[5].substring(1) //substring method used to ignore '$' sign
            });
            
            for(let i = 0; i < dataSet.length; i++)
            {

                //This loop inserts back all the commas to strings

                if(dataSet[i][5].length == 6) //5 digits numbers
                {
                    dataSet[i][5] = dataSet[i][5].substring(0, 3) + comma + dataSet[i][5].substring(3, dataSet[i][5].length);
                }
                else if(dataSet[i][5].length == 7) //6 digits number
                {
                    dataSet[i][5] = dataSet[i][5].substring(0, 4) + comma + dataSet[i][5].substring(4, dataSet[i][5].length);
                }
                else //million number
                {
                    dataSet[i][5] = dataSet[i][5].substring(0, 2) + comma + dataSet[i][5].substring(2, dataSet[i][5].length);
                    dataSet[i][5] = dataSet[i][5].substring(0, 6) + comma + dataSet[i][5].substring(6, dataSet[i][5].length);
                } 

            }//end of loop

        }//end of if condition

        else if(localStorage.clickcount = 1)
        {
            localStorage.clickcount = 0; //value '0' leads to first sort method after second click
            var comma = ',';

            for(let i = 0; i < dataSet.length; i++)
            {

                //This scope has a unique function to remove all commas from strings in order to deliver "pure" numbers to sort method

                dataSet[i][5] = dataSet[i][5].replace(comma , '');        //removes comma

                if(dataSet[i][5].length >= 9) //condition to remove 2 commas from million numbers
                {       
                    dataSet[i][5] = dataSet[i][5].replace(comma , '');    //removes comma
                }

            }//end of loop

            dataSet.sort(function(a,b) {
                    return b[5].substring(1) - a[5].substring(1) //substring method used to ignore '$' sign
            });
            
            for(let i = 0; i < dataSet.length; i++)
            {
                //This loop inserts back all the commas to strings

                if(dataSet[i][5].length == 6) //5 digits numbers
                {
                    dataSet[i][5] = dataSet[i][5].substring(0, 3) + comma + dataSet[i][5].substring(3, dataSet[i][5].length);
                }
                else if(dataSet[i][5].length == 7) //6 digits number
                {
                    dataSet[i][5] = dataSet[i][5].substring(0, 4) + comma + dataSet[i][5].substring(4, dataSet[i][5].length);
                }
                else //million number
                {
                    dataSet[i][5] = dataSet[i][5].substring(0, 2) + comma + dataSet[i][5].substring(2, dataSet[i][5].length);
                    dataSet[i][5] = dataSet[i][5].substring(0, 6) + comma + dataSet[i][5].substring(6, dataSet[i][5].length);
                } 

            }//end of loop

        }//end of if else condition

    }//end of salary column function



    else
    {
        if (localStorage.clickcount == 1)
        {

            localStorage.clickcount = 0; //value '1' leads to second sort method after first click

            dataSet.sort(function compareFn(a, b) { //method to sort strings
            if (a[column] < b[column]) 
            {
            return -1;
            }
            if (a[column] > b[column])
            {
            return 1;
            }
            return 0;});

        }//end of if condition

        else if(localStorage.clickcount == 0)
        {

            localStorage.clickcount = 1; //value '0' leads to first sort method after second click

            dataSet.sort(function compareFn(a, b) { //method to sort strings
            if (a[column] > b[column]) 
            {
            return -1;
            }
            if (a[column] < b[column])
            {
            return 1;
            }
            return 0;});

        }//end of else if condition

    }//end of sort method

    displayTable(); //calls the function after sorting to draw the table on the webpage

}//end of sortTable function




//Function to display table

function displayTable()
{

    const tableHeader = '<tr><th onclick="sortTable(0);">Employee Name</th><th onclick="sortTable(1);">Position</th><th onclick="sortTable(2);">Residence</th><th onclick="sortTable(3);">Employee ID</th><th onclick="sortTable(4);">Employment Date</th><th onclick="sortTable(5);">Salary</th></tr>';
    document.getElementById("table").innerHTML = tableHeader; //adds the above constant to staff div and draws headers of the table 

    var Table = "";
    var counter = 0; //counter added to draw each row with distinct background colors (white and grey)

    for(let i = 0; i < dataSet.length; i++) //first loop iterates rows
    {

        Table += "<tr>"; //opens the row to add data

        for(let j = 0; j < 6; j++) //second loop iterates attributes (columns)
        {

            if(counter % 2 == 0)//draws rows with grey background and white words
            {
                Table += '<td style="background-color: grey; color: white">' + dataSet[i][j] + "</td>";
            }
            else //draws rows with white background and black words
            {
                Table += '<td style="background-color: white;">' + dataSet[i][j] + "</td>";
            } 

        }//end of inner loop

        counter++; 
        Table += "</tr>"; //closes row tag

    }//end of outer loop

    document.getElementById("table").innerHTML += Table; //draws complete table on the staff page

}//end of displayTable function


$(document).ready(function()
{
    displayTable(); //calls the function to display unsorted table for the first page load
})




//===================================================================
//--------- Functions to display temperature converted --------------
//===================================================================


//Fahrenheit to Celsius
$("#convertTemp1").click(function() //reads the number from user input
{ 
    
    const temperature = $('#getTemp').val();

    try //try-catch to avoid invalid entries from user
    {

        if(isNaN(temperature)) throw "It is not a number";              //checks "not a number"
        if(temperature.trim() == "") throw "Empty - enter a number";    //checks if field is empty
        if(!isNaN(temperature)) throw temperature;                      //delivers message to catch

    }

    catch(msg)
    {

        if(msg == temperature) //Fahrenheit to Celsius
        {
            const FahrenheitToCelsius = (fah) => (fah - 32) * (5/9);
            $("#showTemp").html(temperature + " °F converted to Celsius is " + Math.trunc(FahrenheitToCelsius(temperature)) + " °C");

        }
        else
        {
            $("#showTemp").html(msg); //displays messages when the user input is invalid
        }
    }//end of catch
    
})//end of Fahrenheit to Celsius



//Celsius to Fahrenheit
$("#convertTemp2").click(function(){ 
    
    const temperature = $('#getTemp').val();

    try //try-catch to avoid invalid entries from user
    {

        if(isNaN(temperature)) throw "It is not a number";              //checks "not a number"
        if(temperature.trim() == "") throw "Empty - enter a number";    //checks if field is empty
        if(!isNaN(temperature)) throw temperature;                      //delivers message to catch

    }

    catch(msg)
    {

        if(msg == temperature) //Celsius to Fahrenheit
        {
            const CelsiusToFahrenheit = (celsius) => (celsius * (9/5)) + 32;
            $("#showTemp").html(temperature + " °C converted to Fahrenheit is " + + Math.trunc(CelsiusToFahrenheit(temperature)) + " °F");

        }
        else
        {
            $("#showTemp").html(msg); //displays messages when the user input is invalid
        }
    }//end of catch
    
})//end of Celsius to Fahrenheit



//Celsius to Kelvin
$("#convertTemp3").click(function(){
    
    const temperature = $('#getTemp').val();
    
    try //try-catch to avoid invalid entries from user
    {

        if(isNaN(temperature)) throw "It is not a number";             //checks "not a number"
        if(temperature.trim() == "") throw "Empty - enter a number";   //checks if field is empty
        if(!isNaN(temperature)) throw temperature;                     //delivers message to catch

    }

    catch(msg)
    {

        if(msg == temperature) //Celsius to Kelvin
        {
            const CelsiusToKelvin = (celsius) => parseInt(celsius) + 273.15;
            $("#showTemp").html(temperature + " °C converted to Kelvin is " + + Math.trunc(CelsiusToKelvin(temperature)) + " °K");

        }
        else
        {
            $("#showTemp").html(msg); //displays messages when the user input is invalid
        }
    }//end of catch
    
})//end of Celsius to Kelvin

