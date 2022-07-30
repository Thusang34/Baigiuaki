const arrayName = ['Phượng', 'Phương', 'Sang', 'Nguyên'];
document.getElementById("random").onclick=()=>{
  let index=Math.floor(Math.random()*arrayName.length);
  document.getElementById('title').textContent="Ai là người siêng nhất nhóm : "+arrayName[index];
}