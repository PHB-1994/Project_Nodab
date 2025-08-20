# 👕 NODAB 패션 쇼핑몰 웹사이트

한국의 패션 이커머스 플랫폼을 모티브로 한 온라인 쇼핑몰 웹사이트입니다. 반응형 디자인과 동적 상품 관리 시스템을 구현하여 실제 쇼핑몰과 유사한 사용자 경험을 제공합니다.

## 라이브 데모

<div align="center">

###  **[배포된 웹사이트 보기](https://project-phb.vercel.app/)**

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://project-phb.vercel.app/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://project-phb.vercel.app/)

**별도 설치 없이 바로 체험 가능**

</div>

## 프로젝트 개요

이 프로젝트는 현대적인 패션 쇼핑몰의 기능을 구현한 풀스택 웹 애플리케이션입니다. 사용자 인증, 상품 관리, 검색 기능 등 실제 이커머스 사이트의 핵심 기능을 포함합니다.

### 주요 특징

- **반응형 웹 디자인**: 데스크톱, 태블릿, 모바일 최적화
- **동적 상품 시스템**: JSON 데이터 기반 실시간 상품 렌더링
- **사용자 인증**: 로그인/회원가입 시스템
- **상품 카테고리**: 5개 메인 카테고리 (상의, 하의, 운동복, 코트, 패딩)
- **검색 기능**: 실시간 상품 검색
- **Q&A 시스템**: 고객 문의 관리

## 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript (ES6+)**: 모던 JavaScript
- **jQuery 3.7.1**: DOM 조작 및 AJAX

### 디자인 & UI/UX
- **반응형 웹 디자인**: Mobile-First 접근법
- **CSS 미디어 쿼리**: 4단계 브레이크포인트 (320px, 460px, 768px, 1024px)
- **다크 테마**: 모던 네비게이션 바
- **호버 효과**: 인터랙티브 요소

### 데이터 관리
- **JSON**: 구조화된 데이터 저장
- **Local Storage**: 사용자 정보 저장
- **Session Storage**: 로그인 세션 관리
- **AJAX**: 비동기 데이터 로딩

## 프로젝트 구조

```
Project_PHB/
│
├── 📄 index.html                 # 메인 홈페이지
│
├── 🎨 css/                       # 스타일시트
│   ├── global.css               # 전역 스타일 & 헤더/네비게이션
│   ├── index.css                # 홈페이지 전용 (베스트 상품, 슬라이더)
│   ├── login.css                # 로그인 페이지 전용
│   ├── signup.css               # 회원가입 페이지 전용
│   ├── qna.css                  # Q&A 페이지 전용
│   ├── product-detail.css       # 상품 상세 페이지 전용
│   ├── product-shirt.css        # 상의 카테고리 페이지
│   ├── product-pants.css        # 하의 카테고리 페이지
│   ├── product-sport.css        # 운동복 카테고리 페이지
│   ├── product-coat.css         # 코트 카테고리 페이지
│   └── product-padding.css      # 패딩 카테고리 페이지
│
├── 🖼️ image/                     # 이미지 리소스
│   └── 25.png                   # 파비콘
│
├── ⚙️ js/                        # JavaScript 파일
│   ├── common.js                # 공통 기능 (인증, 검색, 네비게이션)
│   ├── index.js                 # 홈페이지 슬라이더 & 베스트 상품
│   ├── login.js                 # 로그인 시스템
│   ├── signup.js                # 회원가입 시스템
│   ├── qna.js                   # Q&A 시스템
│   ├── product-detail.js        # 상품 상세 페이지
│   ├── product-shirt.js         # 상의 카테고리 관리
│   ├── product-pants.js         # 하의 카테고리 관리
│   ├── product-sport.js         # 운동복 카테고리 관리
│   ├── product-coat.js          # 코트 카테고리 관리
│   └── product-padding.js       # 패딩 카테고리 관리
│
├── 📊 json/                      # 데이터 파일
│   ├── contents.json            # 베스트 상품 데이터 (29개 아이템)
│   ├── products.json            # 전체 상품 데이터 (520개 아이템)
│   ├── banner.json              # 푸터 정보 데이터
│   └── schedule.json            # 스케줄 데이터 (예약용)
│
└── 📃 pages/                     # 서브 페이지
    ├── login.html               # 로그인 페이지
    ├── signup.html              # 회원가입 페이지
    ├── qna.html                 # Q&A 페이지
    ├── product-detail.html      # 상품 상세 페이지
    ├── product-shirt.html       # 상의 카테고리 페이지
    ├── product-pants.html       # 하의 카테고리 페이지
    ├── product-sport.html       # 운동복 카테고리 페이지
    ├── product-coat.html        # 코트 카테고리 페이지
    └── product-padding.html     # 패딩 카테고리 페이지
```

## 실행 방법

### 온라인에서 바로 체험
**가장 쉬운 방법** 별도 설치 없이 바로 사용 가능합니다.

👉 **[https://project-phb.vercel.app/](https://project-phb.vercel.app/)**

### 로컬 환경에서 실행

#### 요구 사항
- 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 로컬 웹 서버 (개발 환경용)

#### 설치 및 실행 방법

1. **저장소 클론**
```bash
git clone https://github.com/Project_PHB/Project_Nodab.git
cd Project_PHB
```

2. **로컬 서버 실행**
**VS Code Live Server 사용:**
- VS Code에서 프로젝트 열기
- Live Server 확장 프로그램 설치
- `index.html` 우클릭 → "Open with Live Server"

3. **브라우저에서 접속**
```
http://localhost:5500
```

## 핵심 기능 구현

### 동적 상품 시스템 (common.js)
```javascript
// JSON 기반 동적 상품 검색
function searchInputFn() {
  const keyword = $("#searchInput").val().trim();
  const allProduct = Object.values(products);
  
  if (keyword) {
    result = allProduct.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.brand.toLowerCase().includes(keyword.toLowerCase())
    );
    displayResults(result, keyword);
  }
}
```

### 베스트 상품 슬라이더 (index.js)
```javascript
// 베스트 상품 자동 슬라이더
function nextFn() {
  const width = $(".best-img").outerWidth(true) * 3; // 한 페이지당 3개씩
  
  $.get("json/contents.json").done(function (data) {
    const filted = data.filter((b) => b.category === "베스트");
    let 이미지총개수 = Math.ceil(filted.length / 3);
    
    if (현재페이지 < 이미지총개수 - 1) {
      현재페이지++;
      $(".best-img").animate({ left: -width * 현재페이지 }, 500);
    }
  });
}
```

### 사용자 인증 시스템 (signup.js)
```javascript
// 회원가입 유효성 검사
function inputIdFn(e) {
  const inputId = $("#inputId").val().trim();
  const regExpId = /^[A-Za-z0-9]{4,12}$/;
  const isDup = userList.some((u) => u.id === inputId);
  
  if (!regExpId.test(inputId)) {
    $("#idResult").html(`<span style="color: orange">아이디는 영문과 숫자 조합의 4~12자여야 합니다.</span>`);
    return;
  }
  
  if (isDup) {
    $("#idResult").html(`<span style="color: red">이미 사용중인 아이디입니다.</span>`);
    return;
  }
}
```

## 주요 기능 하이라이트

### 1. 상품 카테고리 시스템
- **5개 메인 카테고리**: 상의, 하의, 운동복, 코트, 패딩
- **서브 카테고리**: 각 카테고리별 세부 분류 (반팔티/긴팔티/셔츠 등)
- **탭 기반 네비게이션**: 사용자 친화적 인터페이스

### 2. 실시간 검색 기능
```javascript
// 브랜드명 및 상품명 기반 실시간 검색
function searchInputFn() {
  const keyword = $("#searchInput").val().trim();
  const result = allProduct.filter(
    (product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.brand.toLowerCase().includes(keyword.toLowerCase())
  );
}
```

### 3. 상품 상세 페이지
- URL 파라미터 기반 상품 조회
- 다중 JSON 파일 지원 (contents.json, products.json)
- 사이즈/색상 선택 옵션
- 장바구니 및 구매 기능

### 4. 반응형 디자인
```css
@media (max-width: 460px) {
  .nav-menu {
    gap: 8px;
    padding: 0 8px;
    justify-content: center;
  }
  
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 5. 사용자 세션 관리
- **Local Storage**: 회원 정보 영구 저장
- **Session Storage**: 로그인 세션 임시 저장
- **자동 로그인 유지**: 페이지 새로고침 시에도 로그인 상태 유지

### 지원 브라우저
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### 주요 기능 호환성
- ✅ CSS Grid & Flexbox
- ✅ ES6+ JavaScript
- ✅ jQuery 3.7.1
- ✅ Local/Session Storage
- ✅ CSS 미디어 쿼리
- ✅ JSON 파싱

### 이미지 최적화
- WebP 포맷 지원
- Lazy Loading 구현
- 적응형 이미지 크기

### 코드 최적화
- 모듈식 JavaScript 구조
- CSS 클래스 재사용
- 효율적인 DOM 조작

## 📱 모바일에서 체험하기

모바일 기기에서 다음 URL을 입력하여 반응형 디자인을 직접 체험해보세요:

**🔗 https://project-phb.vercel.app/**

> 💡 **팁**: 크롬 개발자 도구에서 다양한 디바이스 크기로 테스트할 수 있습니다!
