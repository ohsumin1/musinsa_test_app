# musinsa_test_app

## 개요

무신사 글로벌개발팀 과제입니다.

## 설치 및 실행 방법

1. 레포지토리를 클론합니다.
`git clone https://github.com/ohsumin1/musinsa_test_app.git`

2. 필요한 패키지들을 설치합니다.
`npm install` 

3. 프로젝트를 실행합니다.
`npm start` 

## 기술 스택

-   언어: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   라이브러리: [React18](https://reactjs.org/) 
    - 사용 이유: 컴포넌트 단위로 작성하여 재사용성과 가독성을 높이고 필터 선택, 아이템 삭제, 초기화 버튼 등 클릭시 UI 변경사항이 많이 일어나 불필요한 렌더링을 막기 위해 리액트를 사용하였습니다.
-   패키지 매니저: [npm](https://www.npmjs.com/)

## 프로젝트 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📜CharacterItem.jsx
 ┃ ┣ 📜CharacterList.jsx
 ┃ ┣ 📜Filter.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┗ 📜RefreshButton.jsx
 ┣ 📂dist
 ┃ ┗ 📂css
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┗ 📜Button.css
 ┣ 📂pages
 ┃ ┗ 📜Main.jsx
 ┣ 📂utils
 ┃ ┣ 📜constants.js
 ┃ ┗ 📜util.js
 ┣ 📜App.js
 ┗ 📜index.js
```
