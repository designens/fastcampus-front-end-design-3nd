# DAY 18

### 장치 별 사양 통계자료 확인

- [material.io/devices](https://material.io/devices/)
- [viewportsizes.com](http://viewportsizes.com/)
- [troy.labs.daum.net](http://troy.labs.daum.net/)

### CSS 스타일 가이드

- [[CSS방법론] SMACSS, BEM, OOCSS](http://wit.nts-corp.com/2015/04/16/3538)
- [BEM으로 사고하기 - BEM 문법 익히기](http://mytory.net/html-css-js/2015/05/07/mindbemding-getting-your-head-round-bem-syntax.html)

-

### 반응형 그리드 시스템 제작하기

```css
/*! rwd-grid.css © yamoo9.net, 2016 */

/*

 RWD = Responsive Web Design Layout
 Breakpoint ---------------------------------------------

 Mobile       : 0    - 767
 Tablet       : 768  - 1023
 Desktop      : 1024 - 1366
 Wide Screen  : 1367 - ...

 Keywords -----------------------------------------------
 Mobile       : xs | m
 Tablet       : md | t
 Desktop      : lg | d
 Wide Screen  : xl | w

*/
```

### 반응형 그리드 시스템(Responsive Grid System)

#### 워크프로세스

- __Mobile First__<br>
Mobile → Tablet → Desktop
- __Desktop First__<br>
Desktop → Tablet → Mobile

> Desktop First방식을 사용할 경우 문제점
> - CSS 를 불러올때 브라우저는 첫번재 줄부터 마지막 줄까지 순차적으로 코드를 읽는다.
> 이때 Desktop First 방식을 사용할경우 모바일사용자는 Desktop 코드를 모두 읽고난 후에야 Mobile 코드를 읽어 화면에 출력하게 된다. 이럴경우 데이터를 사용하는 모바일 사용자는 데이터를 낭비하게 된다.
> - hover기능은 마우스를 올렸을때 작동하는 기능인데 Mobile에서는 마우스를 올린다는 개념이 없기 때문에 hover의 효과를 어떻게 대처해야하는지를 다시한번 고려해야한다.

그렇기 때문에 Mobile First 방식을 권장한다.

-

### 유연한 그리드 시스템(Flexible Grid System)

#### 그리드 시스템 모듈

- `container`
- `row`(`grid`)
- `col`(`cell`)
- `gutters` | `gutter-before` | `gutter-after`

#### 컬럼 모듈

- `col-1of2`(`col--1-2`)
- `col-1of3`(`col--1-3`)
- `col-2of3`(`col--2-3`)
- `col-1of4`(`col--1-4`)
- `col-2of4`(`col--2-4`)
- `col-3of4`(`col--3-4`)

#### 유틸리티 모듈

- `offset`(`prefix`|`suffix`)
- `push`|`pull`
- `isolate`
