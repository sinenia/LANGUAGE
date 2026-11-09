'use strict';
(()=>{let promptEvent;const button=document.getElementById('installApp'),status=document.getElementById('installStatus');
const standalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
if(standalone()){document.getElementById('appInstall').hidden=true;}
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();promptEvent=event;button.hidden=false;});
button.addEventListener('click',async()=>{if(!promptEvent)return;await promptEvent.prompt();const choice=await promptEvent.userChoice;status.textContent=choice.outcome==='accepted'?'설치를 진행합니다. 홈 화면을 확인하세요.':'나중에 다시 설치할 수 있습니다.';promptEvent=null;button.hidden=true;});
window.addEventListener('appinstalled',()=>{document.getElementById('appInstall').hidden=true;promptEvent=null;});
if('serviceWorker' in navigator)window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{status.textContent='앱 등록을 완료하지 못했습니다. 인터넷 연결 후 다시 열어주세요. 웹 학습은 계속 사용할 수 있습니다.';});});
})();