# JINWOO KIM Portfolio v2

취업용 GitHub Pages 정적 포트폴리오입니다.

## 구성
- `index.html`: 짧은 소개와 4개 프로젝트로 연결되는 메인 페이지
- `projects/`: 프로젝트별 상세 사례 페이지 4개
- `style.css`: 반응형 디자인
- `script.js`: 모바일 메뉴 동작
- `assets/favicon.svg`: 사이트 아이콘

## 연락처
Email, GitHub, LinkedIn 링크는 `index.html`의 Contact 영역에서 수정할 수 있습니다.

## 프로젝트 이미지 교체
상세 페이지의 `.figure-placeholder` 안에서 `.figure-frame`의 안내 문구 `<span>`을 실제 `<img>`로 교체하면 됩니다. 이미지는 `assets/` 아래에 보관하고 `alt`에 그림 내용을 설명하세요. `figcaption`은 그림 제목으로 유지할 수 있습니다.

메인 페이지에는 Figure를 두지 않습니다. 프로젝트 이미지는 상세 사례 페이지에만 표시합니다.

| 상세 페이지 | 첫 번째 이미지 | 두 번째 이미지 |
| --- | --- | --- |
| `projects/autonomous-xai.html` | System / Method Overview Figure | TTFF Result Figure |
| `projects/manufacturing-xgb.html` | Feature / Pipeline Figure | Confusion Matrix |
| `projects/ro-optimization.html` | Optimization Process | CIP / Objective Result Figure |
| `projects/defense-strategy.html` | Analysis Framework | Market / Scenario Diagram |

## GitHub Pages 배포
1. GitHub 새 repository 생성
2. 압축을 풀고 내용 전체를 repository 최상위에 업로드
3. Settings → Pages
4. Source: Deploy from a branch
5. Branch: main / root
6. Save

사용자 메인 주소(`username.github.io`)로 쓰고 싶으면 저장소 이름을 `username.github.io`로 만드세요.

## 다음 업그레이드 추천
- 실제 프로필 사진
- 자율비행 프로젝트 구조도 / 논문 Figure
- 공작기계 Confusion Matrix 이미지
- Purdue 결과 그래프
- 실제 GitHub / 논문 / PDF 링크
