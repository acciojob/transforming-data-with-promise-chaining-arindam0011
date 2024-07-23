//your JS code here. If required.
const start=document.getElementById("btn");

const output=document.getElementById("output")

start.addEventListener('click', (event)=>{
  const num=parseFloat(document.getElementById("ip").value);
	let promise=new Promise((resolve, reject)=>{
		setTimeout(()=>{
			output.innerText=`Result: ${num}`;
			resolve(num);
		}, 2000)
	});
	
	promise
	.then((num)=>{
		return new Promise((resolve)=>{
				setTimeout(()=>{
					output.innerText=`Result: ${num}`;
					resolve(num);
				}, 2000)
		})
		
	})
		.then((num)=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
					output.innerText=`Result: ${num*2}`;
					resolve(num*2) ;
				}, 1000)
      })
			
		})
		.then((num)=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
					output.innerText=`Result: ${num-3}`;
					resolve(num-3) ;
				}, 1000)
      })
			
		})
		.then((num)=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
					output.innerText=`Result: ${num/2}`;
					resolve(num/2) ;
				}, 1000)
      })
			
		})
		.then((num)=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
					output.innerText=`Result: ${num+10}`;
					resolve(num+10) ;
				}, 1000)
      })
			
		})
		.then((num)=>{
					output.innerText=`Final Result: ${num}`;
		})
})



