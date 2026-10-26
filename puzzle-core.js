(function(root){
 const solved=a=>a.every((v,i)=>v===i);
 function shuffle(n,random=Math.random){const a=Array.from({length:n*n},(_,i)=>i);for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}if(solved(a))[a[0],a[1]]=[a[1],a[0]];return a}
 function swap(a,i,j){const next=a.slice();[next[i],next[j]]=[next[j],next[i]];return next}
 const api={solved,shuffle,swap};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.XxtPuzzle=api;
})(typeof window!=='undefined'?window:globalThis);
