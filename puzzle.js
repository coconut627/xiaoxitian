(()=>{
 const host=document.querySelector('#puzzle');if(!host)return;
 const q=s=>host.querySelector(s),core=window.XxtPuzzle;
 let n=3,tiles=[],selected=null,moves=0,peek=false,won=false,photo=0;
 const photos=['images/hall-vivid.jpg','images/hall-front.jpg'];
 const key=()=>`xxt-puzzle-best-v1-${photo}-${n}`;
 function best(){try{const v=Number(localStorage.getItem(key()));return Number.isInteger(v)&&v>0?v:null}catch{return null}}
 function announce(s){q('#puzzleMessage').textContent=s}
 function draw(){
  q('#puzzleBoard').style.setProperty('--cells',n);q('#puzzleBoard').style.setProperty('--puzzle-image',`url("${photos[photo]}")`);
  q('#puzzleOriginal').src=photos[photo];q('#puzzleOriginal').hidden=!peek;q('#puzzleBoard').hidden=peek;
  q('#puzzlePeek').setAttribute('aria-pressed',String(peek));q('#puzzlePeek').textContent=peek?'返回拼图 →':'查看原图 ↗';
  q('#puzzleMoves').textContent=moves;q('#puzzlePlaced').textContent=`${tiles.filter((v,i)=>v===i).length} / ${n*n}`;q('#puzzleBest').textContent=best()===null?'尚无纪录':`${best()} 步`;
  const board=q('#puzzleBoard');board.replaceChildren();tiles.forEach((v,i)=>{const b=document.createElement('button');b.type='button';b.className='puzzle-piece';b.style.backgroundPosition=`${v%n/(n-1)*100}% ${Math.floor(v/n)/(n-1)*100}%`;b.classList.toggle('selected',i===selected);b.classList.toggle('placed',v===i);b.setAttribute('aria-label',`第${i+1}格，图块${v+1}${v===i?'，已归位':''}`);b.setAttribute('aria-pressed',String(i===selected));b.disabled=won;const label=document.createElement('span');label.textContent=String(v+1).padStart(2,'0');b.append(label);b.addEventListener('click',()=>pick(i));board.append(b)});
  q('#puzzleWin').hidden=!won;
 }
 function pick(i){if(won||peek)return;if(selected===null){selected=i;announce('已选中一块，再选另一块交换；再次点击可取消。')}else if(selected===i){selected=null;announce('已取消选择。')}else{tiles=core.swap(tiles,selected,i);selected=null;moves++;won=core.solved(tiles);if(won){const old=best();if(old===null||moves<old){try{localStorage.setItem(key(),String(moves))}catch{}}announce(`拼图完成！共交换 ${moves} 步。沿着屋檐与云纹，再细看这座立体世界。`);window.dispatchEvent(new CustomEvent('journey-award'))}else announce(`交换完成，已有 ${tiles.filter((v,j)=>v===j).length} 块归位。`)}draw();if(!won)q('#puzzleBoard').children[i].focus()}
 function reset(){tiles=core.shuffle(n);selected=null;moves=0;peek=false;won=false;draw();announce('新画卷已展开：点选两块交换位置，金色边框表示已归位。')}
 q('#puzzleDifficulty').addEventListener('change',e=>{n=Number(e.target.value);reset()});q('#puzzlePhoto').addEventListener('change',e=>{photo=Number(e.target.value);reset()});q('#puzzleReset').addEventListener('click',reset);q('#puzzlePeek').addEventListener('click',()=>{peek=!peek;selected=null;draw();announce(peek?'正在查看原图，不计步数。点击“返回拼图”继续。':won?'画卷已拼完整，可以再开一局。':'已返回拼图，继续寻找图块的衔接。')});reset();
})();
