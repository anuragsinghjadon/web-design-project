// Calculate tip
/*var arr=[{radius:9},{radius:2},{radius:5}];

function cir_comp(rad1,rad2)
{
    return rad1.radius-rad2.radius; 
}



// finding the length of the array with undefined

var arr=[1,2,"anurag "];

function length(arr)
{
    var i=0;
    for(var p in arr)
        {
        
        }     
return i;        
}


// filer function use best to do  

function num_print(n,myfun)
{
    for(var i=0;i<=n;i++)
       if(myfun)
      {
           console.log(i);
}
}
/// is_odd
function(n){
    return n%2;
}
var i=5
function ()
{
    while(i)
    {
        console.log(i);
        i--;
    }
}


// for each function

[1,2,3,"string "].forEach(function(elme){console.log(elem);})

// function inside a funnction

function hypote(a,b)
{
 console.log(a);
 console.log(b);
    function squ(x)
    {
        return x*x;
    }
    
    
    return Math.sqrt(squ(a)+squ(b));
}

// filter function

[2,3,4,5,6,7,8,9].filter(iseven);

function iseven(elem,index,arr)
{
    console.log(elem+" : "+index+":"+arr);
   
    return elem%2;
}

function range(start,end,step)
{
    var res=[];
    var item = start;
    
    while(item<=end)
        {
            res.push(item);
            item=item+step;
        }
    return res;
}

function sum_natural(n)
{
    return range(1,n,1).reduce(function (prev,curr){return prev+curr;});
}

// square of the two function
var ar1=[1,2,3,4,5];
function squa(arr)
{
   var i=0;
    console.log(i++);
    return arr.reduce(function (prev,curr,index,arr){console.log("prev "+prev+"curr "+curr+"index  "+index+"arr "+arr); return prev+(curr*curr)},0);
}

function give(prev,curr)
{
    return prev+(curr*curr);
}

// even number program
var arr1=[1,2,3,4,5,"6",7,8,9,10];

function check(arr)
{
    return arr.filter(is_even)
}

function is_even(n)
{
    return n%2==0;
}

function see()*/


//************function as an object

var obj={radi:3, area:function (){return Math.PI*this.radi*this.radi;}}
var obj1={radi:3, area:function (){
    var radi=4;
    return Math.PI*radi*radi;}}
// CONSTRTUCTOR FNCCTION


function Circle(r)
{
    this.radi=r;
    this.area= function (){return Math.PI*this.radi*this.radi;}
}
/* change the css style */

var line=document.getElementById("line");
var attrib=document.getElementById("attrib");

line.style.color="red";
line.style.background="aqua";
attrib.style.boxShadow="2px 2px 5px 1px blue";


/**************Dom */
function calculate()
{
    var billamt = document.getElementById("billamt").value;
    var serviceQual=document.getElementById("serviceQual").value;
    var people =document.getElementById("peopleamt").value;
if(billamt===""|| serviceQual==0)
    {
        alert("bhar wrana bhag ");
    }
    
    if(people==="" || people<=1)
        {
        people = 1;
    
    document.getElementById("each").style.display = "none";}
else
    {
        document.getElementById("each").style.display="block";
    }

var total = (billamt*serviceQual)/people;
    total  =  Math.round(total*100)/100;
    total  = total.toFixed(2);
      document.getElementById("totalTip").style.display = "block";
 document.getElementById("tip").innerHTML = total;
}
 document.getElementById("totaltip").style.display="none";
 document.getElementById("each").style.display="none";

document.getElementById("claculate").onclick=function()
{
    calculate();
}

















