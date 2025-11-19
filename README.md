# Mobile App Project

모바일 웹 애플리케이션 정적 페이지 프로젝트입니다.

## 폴더 구조

```
mobile-app/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 스타일시트
├── js/
│   └── app.js         # JavaScript 파일
└── assets/
    ├── images/        # 일반 이미지 파일들
    ├── icons/         # 아이콘 파일들
    └── backgrounds/   # 배경 이미지 파일들
```

## 이미지 파일 추가 위치

- **디자인 PNG 파일**: `assets/images/` 폴더에 넣어주세요
- **아이콘 파일**: `assets/icons/` 폴더에 넣어주세요
- **배경 이미지**: `assets/backgrounds/` 폴더에 넣어주세요

## 사용 방법

1. 준비한 이미지 파일들을 해당 폴더에 넣어주세요
2. `index.html` 파일을 브라우저에서 열어 확인합니다
3. 필요에 따라 HTML/CSS를 수정합니다

## CSS에서 이미지 사용 예시

```css
/* 배경 이미지 */
.element {
    background-image: url('../assets/backgrounds/your-bg.png');
}

/* 아이콘 */
.icon-name {
    background-image: url('../assets/icons/your-icon.png');
}
```

## HTML에서 이미지 사용 예시

```html
<img src="assets/images/your-image.png" alt="설명">
```

## 모바일 최적화 기능

- 뷰포트 설정 완료
- 터치 이벤트 지원
- iOS Safe Area 대응
- 반응형 레이아웃
- 모바일 브라우저 주소창 높이 대응

## 지원 디바이스

- iOS (iPhone/iPad)
- Android
- 모든 모바일 브라우저