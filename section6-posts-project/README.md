## 📚 섹션 소개

<h4>섹션 6: 데이터 변이 - 심층 분석</h2>

<p>
  서버 액션, useFormStatus, useFormState(React 19에서부터 useActionState로 교체됨), useOptimistic 사용하는 방법에 대해 배우고 Next.JS의 캐싱에 대항하여 revalidatePath를 사용하는 방법을 배웁니다.
</p>

<details>
<summary>섹션 목차</summary>

<br>

<ol>
    <li>모듈 소개</li>
    <li>프로젝트 시작 및 변이 옵션 분석</li>
    <li>폼 액션 설정</li>
    <li>서버 액션 생성</li>
    <li>데이터베이스에 데이터 저장</li>
    <li>useFormStatus 훅으로 사용자 피드백 제공하기</li>
    <li>useFormState() 훅 사용하기</li>
    <li>useFormState 훅으로 사용자 입력 유효성 검사하기</li>
    <li>useFormState에 대한 서버 액션 조정</li>
    <li>서버 액션을 별도의 파일에 저장</li>
    <li>“use server”는 서버 측 실행을 보장하지 않습니다!</li>
    <li>이미지 업로드 및 저장</li>
    <li>서버 액션을 사용, 구성 및 트리거하는 다른 방법</li>
    <li>캐싱 문제를 방지하기 위한 데이터 재검증</li>
    <li>NextJS로 낙관적 업데이트 수행하기</li>
    <li>캐싱의 차이점: 개발 VS 프로덕션</li>
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
      <img src="https://github.com/user-attachments/assets/fb09d224-35c5-4aea-8c7e-a0368385fd95" width="1413" />
    </td>
  </tr>
  <tr>
    <td>게시글 추가 페이지</td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/61f269fc-39d5-4f1e-9de0-afdea2d8f6d7" width="1422" />
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

- 게시글 목록 조회
- 새로운 게시글 추가
- 게시글 좋아요, 좋아요 취소

<br>

## 🔨 설치 및 실행 방법

```bash
git clone https://github.com/jhpark0888/lecture-next-js.git
cd section6-posts-project
npm install
npm run dev
```

<br>

## 📁 폴더 구조

```
root/
├── actions/                      # 서버 액션 파일
├── app/                          # 화면 파일
│   ├── feed/                     # 게시글 목록 화면
│   ├── new-post/                 # 게시글 추가 화면
├── assets/                       # 정적 파일 (이미지, 폰트 등)
├── components/                   # 헤더, 뉴스 목록, 네비게이션 탭 컴포넌트
├── lib/                          # s3, DB 유틸 함수
├── .gitignore                    # Git 무시 설정 파일
├── dummy-news.js                 # 더미 데이터
├── package.json                  # 프로젝트 설정 및 의존성
└── README.md                     # 프로젝트 소개 문서
```

<br>
