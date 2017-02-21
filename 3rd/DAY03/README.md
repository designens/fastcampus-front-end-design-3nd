###### Front-End Design CAMP

# DAY03

## 진행 내용

- **Design for Web** 환경 분석/이해
- **UI Kit** 스타일 가이드
- **HTML5** 문서 구조화
- **Learn by Doing** 웹 타이포그래피 디자인

---

## 단락(Paragraph): 글의 묶음

단락 요소(Eelement)는 영문 `Paragraph`를 단축하여 `<p>`를 아래와 같이 사용합니다.

```html
<p> 글의 묶음 </p>
<p> 글의 묶음 </p>
<p> 글의 묶음 </p>
```

## 제목(Headings)

제목 요소(Eelement)는 영문 `Headings`를 단축하여 `<h1>` ~ `<h6>`까지 총 6단계의 제목을 사용합니다.

```html
<h1> 수고했어 오늘도 </h1>
<h2> 수고했어 오늘도 </h2>
<h3> 수고했어 오늘도 </h3>
<h4> 수고했어 오늘도 </h4>
<h5> 수고했어 오늘도 </h5>
<h6> 수고했어 오늘도 </h6>
```

## 영역(Divistion)

의미는 가지지 않으나, 여러 요소를 블록(Block)으로 묶을 때 사용합니다. Pohotoshop의 Group Layer를 연상하시면 쉽게 이해되실 듯 하네요.

```html
<div></div>

<div>
  <p> 글의 묶음 </p>
  <p> 글의 묶음 </p>
  <p> 글의 묶음 </p>
</div>
```

## 웹 폰트

윈도우 사용성 문제를 고려하여 웹 폰트를 선택합니다.
이번 과정에서는 `본고딕, Spoqa Han Sans`를 사용하겠습니다.

웹폰트 다운 및 설정 : [스포카 한 산스(Spoqa Han Sans)](http://spoqa.github.io/spoqa-han-sans/)


## CSS

CSS(Cascading Style Sheet)는 HTML 문서를 꾸며줍니다. Photoshop과 함께 공부하면 좋습니다.

```css
/* 브라우저 스타일 초기화 */
body {
  /* 가운데 정렬 */
  width: 960px;
  /* width 값을 뺀 나머지 공간을 좌우로 나눈다. */
  margin: 0 auto;
  /* 래딩(Leading) 간격을 패턴으로 배경이미지로 그림 */
  background: url("../images/leading-24.png");
  /* 글자 모양(글꼴) */
  font-family: "Spoqa Han Sans";
  /* 행간 line height */
  line-height: 1.7; /* x1.5 */
  /* 글자 사이 간격 letter spacing */
  letter-spacing: -0.04em;
}

/* 멀티 컬럼 디자인 */
div {
  margin-top: 9em;
  column-count: 2;
  column-gap: 3em;
}

/* 단락(Paragraph) 디자인 */
p {
  /*단락 사이 간격 설정*/
  margin-top: 0;
  margin-bottom: 1.5em;
  /* 글자 색상 */
  color: #454545;
}
```
