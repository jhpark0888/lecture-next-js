## 📚 섹션 소개

<h4>라우팅 및 페이지 렌더링 - 심층 분석</h2>

<p>
  병렬 라우트, 중첩 라우트, 인터셉트 라우트 등 NextJS에서 사용되는 라우팅 방식에 대해 배웁니다. 
</p>

<details>
<summary>섹션 목차</summary>

<br>

<ol>
  <li>모듈 소개</li>
  <li>프로젝트 설정, 개요 및 연습!</li>
  <li>연습 솔루션 - 1부</li>
  <li>연습 솔루션 - 2부</li>
  <li>앱 스타일링 및 더미 데이터 사용</li>
  <li>"Not Found" 오류 처리 및 "Not Found" 페이지 표시하기</li>
  <li>병렬 라우트 설정 및 사용</li>
  <li>병렬 라우트 및 중첩 라우트로 작업하기</li>
  <li>Catch-All 라우트 구성</li>
  <li>Catch-All 폴백 라우트 및 여러 경로 세그먼트 처리하기</li>
  <li>Throwing ( 라우트 관련) 오류</li>
  <li>오류 페이지로 오류 처리하기</li>
  <li>서버 VS 클라이언트 컴포넌트</li>
  <li>동적 라우트 안에 중첩된 라우트</li>
  <li>내비게이션 가로채기 및 가로채기 라우트 사용</li>
  <li>병렬 및 인터셉트 라우트 결합하기</li>
  <li>page.js를 default.js로 대체하기</li>
  <li>프로그램 방식으로 탐색하기</li>
  <li>기본 HTML 문서 정의하기</li>
  <li>라우트 그룹 사용 및 이해</li>
  <li>라우트 핸들러로 API 구축하기</li>
  <li>미들웨어 사용하기</li>
  <li>모듈 요약하기</li>
</ol>

</details>

<br>

## 🖥️ 스크린샷

<table>
  <tr>
    <td align="center">페이지명</td>
    <td align="center">이미지</td>
  </tr>
  <tr>
    <td>메인 페이지</td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/30885bc1-6731-47e6-be8c-7e8727da94ba" width="1413" />
    </td>
  </tr>
  <tr>
    <td>뉴스 목록 페이지</td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/94b9249f-e042-4d21-81ac-e40ebf586712" width="1422" />
    </td>
  </tr>
  <tr>
    <td>아카이브 페이지</td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/c2c76552-c08a-4f6d-8a03-f54e059982ed" width="1429" />
    </td>
  </tr>
  <tr>
    <td>뉴스 상세 페이지</td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/44a2465f-a5f5-4cf7-88e5-094d1b403cd1" width="1429" />
    </td>
  </tr>
</table>

<br>

## 🛠️ 기술 스택

<div align="left">
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" height="30" alt="NextJS logo"  />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="30" alt="React logo"  />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" height="30" alt="Javascript logo"  />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="30" alt="Html logo"  />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="30" alt="CSS logo"  />
</div>

<br>

## ⚙️ 기능 목록

- 뉴스 목록 조회
- 뉴스 작성 년도, 월로 필터링
- 뉴스 상세 내용 조회

<br>

## 🔨 설치 및 실행 방법

```bash
git clone https://github.com/jhpark0888/lecture-next-js.git
cd section4-news-project
npm install
npm run dev
```

<br>

## 📁 폴더 구조

```
root/
├── app/                          # 화면 파일
│   ├── (content)/                # 뉴스 화면
│   │   ├── archive/              # 뉴스 아카이브 화면
│   │   │   ├── @archive/         # 년도별, 월별 뉴스 목록
│   │   │   ├── @latest/          # 최신 뉴스 목록
│   │   ├── news/                 # 전체 뉴스 목록 화면
│   │   │   ├── [slug]/           # 뉴스 상세 화면
│   │   │   │   ├── @modal/       # 이미지 모달
│   │   │   │   │   ├── (.)image  # 이미지 모달(인터셉트)
│   │   │   │   ├── image/        # 이미지 상세 화면
│   ├── (marketing)/              # 프로모션 화면
├── assets/                       # 정적 파일 (이미지, 폰트 등)
├── components/                   # 헤더, 뉴스 목록, 네비게이션 탭 컴포넌트
├── lib/                          # 뉴스 유틸 함수
├── .gitignore                    # Git 무시 설정 파일
├── dummy-news.js                 # 더미 데이터
├── package.json                  # 프로젝트 설정 및 의존성
└── README.md                     # 프로젝트 소개 문서
```

<br>
