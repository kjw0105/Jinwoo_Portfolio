# JINWOO KIM Portfolio v2

취업용 GitHub Pages 정적 포트폴리오입니다.

## 구성
- `index.html`: 메인 포트폴리오
- `projects/`: 프로젝트 상세 페이지 4개
- `style.css`: 반응형 디자인
- `script.js`: 모바일 메뉴 동작
- `assets/favicon.svg`: 사이트 아이콘

## 연락처
현재 사이트의 연락 링크는 Git 원격 저장소에서 확인한 `github.com/kjw0105` 프로필을 사용합니다. 이메일과 LinkedIn은 확인된 주소가 없어 표시하지 않았습니다. 공개할 주소가 준비되면 `index.html`의 Contact 영역에 추가하세요.

## 프로젝트 이미지 교체
상세 페이지의 `.figure-placeholder` 안에서 `.figure-frame`의 안내 문구 `<span>`을 실제 `<img>`로 교체하면 됩니다. 이미지는 `assets/` 아래에 보관하고 `alt`에 그림 내용을 설명하세요. `figcaption`은 그림 제목으로 유지할 수 있습니다.

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
