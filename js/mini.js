const DS = "/";

const $=e=>document.querySelector(e);
const $$=e=>document.querySelectorAll(e);
//const upFirst=(str)=>str.charAt(0).toUpperCase() + str.slice(1);

const pad = (num) => String(num).padStart(2, '0');

const ok=(v)=> Math.round(parseFloat(v)*10)/10; 
const okk=(v)=> Math.round(parseFloat(v)*100)/100; 
const okok=(v)=> Math.round(parseFloat(v)*1000)/10; 
const okpad=(v)=> {
    let out = Math.round(parseFloat(v)*10)/10; 
    if (out===0) return 0;
    let ret = String(out);//.padStart(2, '0');
    if (out<10) ret = "0"+ret;
    if (out===Math.round(out)) ret = ret+".0";
    return ret;
}

const setActive=(ten)=>{
      let parent = ten.parentElement;
      let keys   = parent.querySelectorAll("button");
      keys.forEach(key=>key.classList.remove("active"));
      ten.classList.add("active");
}

const asyncPostJson = async (u,action,name,content) => {
        console.log(u,action,name,content)
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
            },
            //body: new URLSearchParams({ username: "example", password: "password" }),
            //mode: 'cors',
            body: JSON.stringify({
                "name": name,
                "action": action,
                "content" : content
            })
        }
        const r = await fetch(u,config);
        const o = await r.json();
        return (o)
}
    
const asyncFetchJson = async (u) => {
    const config = {
        headers: {'Accept':'application/json'},
        mode: 'cors'
    }
    const r = await fetch(u);
    const o = await r.json();
    return (o)
}
    

function log() {
	var line = Array.prototype.slice.call(arguments).map(function(argument) {
		return typeof argument === 'string' ? argument : JSON.stringify(argument);
	}).join(' ');
	console.log(line);
	document.querySelector('#log').textContent += line + '\n';
}

const logo=(...arg)=>{
	console.log(arg);
	let line=arg.join("; ");
	document.querySelector('#log').textContent += line + '\n';
}

const timePL=(time="") => (new Date()).toLocaleString('pl-PL');
const time2PL=(time) => (new Date(time)).toLocaleString('pl-PL');

/* snipet snipet snipet snipet snipet snipet */  
/*
console.log(timePL());
  
console.log(
  new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Europe/Warsaw",
  }).format(new Date()),
);
*/



