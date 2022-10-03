async function main(){
    const url="data.json";
    const request = new Request(url);
    const resp= await fetch("./data/data.json");
    const days= await resp.json();
    fill_bars(days);
}

main();

function fill_bars(obj){

  let array=[];
  let bar_size;

  for(let i=0;i<obj.length;i++)
  {
    array.push(obj[i].amount);
  }

  let mayor=Math.max(...array);  
  const bar=document.querySelectorAll(".bar");
  const day=document.querySelectorAll(".day");

  for(let i=0;i<bar.length;i++)
    {
      bar_size=(150*obj[i].amount)/mayor;
      bar[i].style.height=""+bar_size+"px";
      if(obj[i].amount==mayor)
          bar[i].style.backgroundColor="var(--cyan)";
      

      bar[i].setAttribute("data-before","$"+obj[i].amount);
      day[i].innerHTML=obj[i].day;

      bar[i].addEventListener("mouseover",function(){
          this.style.setProperty("--disp","block");
          if(obj[i].amount==mayor)
            this.style.backgroundColor="hsl(186, 49%, 80%)";
      });

      bar[i].addEventListener("mouseout",function(){
          this.style.setProperty("--disp","none");
          if(obj[i].amount==mayor)
            this.style.backgroundColor="var(--cyan)";

      });
    }
  }