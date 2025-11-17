


일반적으로 NFT 제작은 ERC-721 기반.

json 파일 만들어서 metadata 올리고 / image 파일 만들어서 올려야 함.
    BaseURI(클라우드주소) + TokenID = TokenURI
    예시: image.AFK.com/nft/1

ipfs 서비스 : Pinata
    https://app.pinata.cloud/ipfs/files 이용
    크립토와 Web3 생태계에서 파일 저장 및 공유를 위한 플랫폼

ipfs 자체는 분산 저장 프로토콜.
얼마든지 프로토콜을 이용해서 업로드(정확히는 내 컴퓨터를 노드화 or 서버화)할 수 있음.
그러면 사람들이 내가 업로드한 컨텐츠의 hash값을 알고 있으면 해당 컨텐츠에 접속할 수 있음.
다만 이 경우 다른 컴퓨터에 저장되어있는 게 아니라서, 내 컴퓨터를 끄면 서버도 나감.

그래서 피닝이라는 서비스가 필요해짐.
내 파일을 누군가 대신 갖고 있어주는 것.
Pinata나 web3.storage, nft.storage 등이 해당함.

[어떻게 접속함?]
ipfs는 여러 게이트웨이를 제공함.
    (개중 하나는 cloudflare-ipfs.com/ipfs/해시값 이었는데... 2023-4년도에 public gateway 임의 차단을 ㅈㄴ게 늘려서 잘 안 들어가질 가능성 높음.)
그냥 pinata 쓸 거면 https://gateway.pinata.cloud/ipfs/해시값 으로 들어가는 게 편하다.

*ipfs 버전이 2개라서 일단은 0번 기준 설명. 1번 버전이면 조금 CID가 다를 수 있음.

[ipfs가 web3에서 또 어떻게 쓰이나?]
어떤 사이트들 같은 경우는 도메인 자체가 000.eth.link 이런 식으로 주소가 있기도 함.
-> ens 제공 기능인데, ens에서는 content hash라는 값을 받아서, 000.eth.link라는 값으로 접속하면 content hash라는 값으로 접속하게 됨.
-> 그럼 content hash에 html 파일을 피닝해둔 hash값을 올리고 html 파일에 블로그로 넘어가도록 코딩해두면 000.eth.link를 누르면 블로그로 넘어가게 할 수 있음.



# Solidity 개발환경 구축 방법


## Javascript
웹사이트를 짜는 언어.

웹사이트를 만드는 데는 HTML + CSS + Javascript가 필요함.
    HTML(뼈대) + CSS(꾸미기)만 있으면 정적인 페이지가 되는데, 여기에 Javascript를 넣으면 움직이고, 반응하고, 데이터를 주고받는 동적인 웹사이트가 됨.
    흔히 말하는 interactive 웹사이트 제작. Javascript가 없으면 그냥 그림+문서 페이지에 불과함.


## Node.js
Javascript를 실행할 수 있는 Runtime.
    Javascript로 만들어진 코드를 웹브라우저가 아니라 내 컴퓨터에서 실행할 수 있게 함.
    -> 서버 컴퓨터에서 돌아가는 것. + 웹서버를 구현할 수 있는 환경


[Package Manager]
개발자들이 여러 프로그램(package)을 올리고 다운받고 쉽게 설치할 수 있게 한 것.
    아이폰의 앱스토어/안드로이드의 playstore와 같음.

각각의 코딩 언어마다 package Manager가 하나 이상 존재함.
    python의 pip, linux의 apt

거대한 프로젝트를 위해 작은 프로그램들을 써야 하기 때문에... 이거저거 깔아서 조합함.

[brew]
MAC에서 쓰는 package Manager
    mac에서는 brew를 통해서 Node를 깔 수 있음.

[Node(npm)]
npm: node Package Manager. node.js용 패키지들의 매니저.
    npm으로 상당히 많은 프로그램을 설치할 수 있음.
    개중 하나가 hardhat임.
npx: npm에 포함된 패키지 실행기(Package Runner)
    패키지를 내 컴퓨터에 영구적으로 설치하지 않고, 일단 임시로 다운로드해서 실행한 뒤, 명령이 끝나면 사라지게 만듦.
    한 번 쓰고 말 명령어라면, npm으로 전역(global)에 설치하는 것보다 npx로 한 번 다운해서 실행하고 지우는 게 편함.

[Global vs Local]
Global 설치 (npm install -g ...):
    윈도우의 C:\Program Files에 프로그램을 설치하는 것과 비슷함.
    어느 폴더에 있든지 PowerShell을 열고 photoshop (만약 CLI가 있다면)을 치면 실행됨.
    컴퓨터 전체에 단 하나만 설치되고 모두가 공유함.

Local 설치 (npm install ...):
    특정 프로젝트 폴더(예: D:\MyProject\) 안에 있는 node_modules 폴더(npm의 경우)에 설치하는 것.
    이 도구는 D:\MyProject 폴더 안에서 작업할 때만 사용할 수 있음.
    다른 폴더(예: D:\AnotherProject\)에서는 이 도구가 설치되었는지조차 모름.


## hardhat
NomicFoundation이라는 회사에서 만든, Node.js용 패키지
    node.js로 npm 깔고 npm install hardhat
    -> node_modules라는 폴더에 설치 파일이 들어옴.
    -> 이거 하면 개많이 깔림. 왜? hardhat도 다른 여러 프로젝트에 의존하고 있음.(예를 들어 solc - 솔리디티 컴파일러)

[npx hardhat --init]
새로운 Hardhat 프로젝트를 시작(초기화)하겠다.
Hardhat이 '대화형 설치 마법사(setup wizard)'를 실행해서 새로운 스마트 컨트랙트 프로젝트에 필요한 기본 파일과 폴더 구조를 자동으로 만들어 줌.
-> 한마디로 “지금 이 폴더에 Hardhat 프로젝트 처음부터 끝까지 싹 다 만들어줘!” 라는 명령어

[npx hardhat]
실행 가능한 명령어들 리스트



## powershell
윈도우에 기본적으로 들어있는 CLI 도구.
컴퓨터를 기본적으로 GUI(graphic user interface)로 접속해서 쓰는데, 그걸 그냥 CLI(command line interface)로 접속한 것.
    * 예전에는 cmd (명령 프롬프트)를 사용했음. 아주 기본적인 명령어(파일 복사, 폴더 이동 등)만 가능한 오래된 도구임.
        powershell은 cmd의 모든 기능 + 더 많은 기능을 추가한 현대적 도구임.

[ls(MAC/리눅스. 리스트.) 혹은 dir(Windows용. 디렉토리.)]
현재 폴더(기본은 홈 위치)

[cd 폴더명]
change directory. 해당 폴더로 이동.
상위 폴더로 가고 싶으면 cd ..
예시) cd downloads : 다운로드 폴더로 이동.

[clear/cls(리눅스)]
터미널(CLI) 화면을 싹 지워줌.

[mkdir 폴더명]
mak directory : 현재 장소(directory)에 폴더명의 새 폴더 제작

[wsl]
window subsystem for linux : 위도우에서 매우 편하게 linux를 띄울 수 있음.
- 나가는 건 exit


[winget install --id GitHub.cli]
깃헙 CLI 설치


[gh repo create 리포지토리이름 --source=. --public --push]
리포지토리 생성



## IDE
통합 개발 환경.
코드를 편하게 짤 수 있게 에디터 및 관리 등을 한 프로그램으로 할 수 있게 해줌.

VScode, cursor 등.

















