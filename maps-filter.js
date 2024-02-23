const nums =[ 1, 3, 4, 5, 6, 7];
// find sum all the the array 


// shortuct to find the sum of all the aray .map

 const arr1= nums.map((n)=> {return n**2});
  console.log(arr1);


  const prices =[ '₹489','₹3829','₹93284'];
    
   const num2= prices.map((n)=>{ return parseInt(n.slice(1))});
  console.log(num2);


  const prices2=[3449999,300000,5000000,2344,876,90];
    const budgetprices=prices2.filter((q) => {return q >2000 && q <10000  });
    console.log(budgetprices);


    const names=['morphius','jack Daniel','JhonnieWalker','Chivas Regal','beer'];
    const darru= names.filter(q=>q.length<5);
     console.log(darru);

const nums3=[9827,89183,238283,27862183,2812];

const even = nums3.filter(n=> n%2==0);
console.log(even);

const phonelist=[
    {
        brand:"apple",
        model:"13 pro max",
        price:80000,
    },
    {
        brand:"iqoo",
        model:"iqoo Z7 pro",
        price:16999,
    },
    {
        brand:"vivo",
        model:"t3",
        price:15000,
    }
];





