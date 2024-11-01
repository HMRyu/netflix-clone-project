# Netflix-clone

![favicon-logo](https://github.com/user-attachments/assets/c01afd22-0341-4b87-96b1-e0aee7a8e648)

배포 주소  : https://netflix-clone-project-neon.vercel.app/

<br />

## Introduction

Netflix 클론 코딩

<details>
<summary>클론 코딩을 한 이유</summary>
<br>
 
- 실제 서비스와 유사한 기능을 구현하며 실무에서 요구되는 기술 습득
- 많이 사용되는 서비스를 구현하며 사용자 경험을 고려한 UI 설계의 중요성 습득

<br />

</details>

<details>
<summary>Netflix를 선택한 이유</summary>
<br>
  
- 데이터 중심의 서비스로 fetching 라이브러리를 활용해 캐싱 및 최적화 기능 학습
- 직관적이고 깔끔한 인터페이스

<br />

</details>

<br />

## Tech Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![swr](https://img.shields.io/badge/-SWR-000000?style=flat&logo=swr&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)


<br />

## Key Features

### 영상 재생

https://github.com/user-attachments/assets/46b070c5-112f-42c5-96d6-38bcc7e4eec6

### 영상 즐겨찾기 추가 

![저장](https://github.com/user-attachments/assets/a0762ff8-2c10-40c0-910e-c2c07606f7bc)

### 이메일 및 소셜로그인

![소셜로그인](https://github.com/user-attachments/assets/750fa116-22fc-4cda-9d12-a8e3d7fe3d83)

<br />

## Key Learnings

<details>
<summary>swr 사용하여 데이터 요청 최적화</summary>
<br>

```js
const { data, error, isLoading } = useSWR('/api/random', fetcher, {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
});
```

- swr의 상세 옵션을 이용하여 불필요한 데이터 요청 방지
    - revalidateIfStale: false ⇒ 이전 데이터가 유효하다면 revalidate 하지 않음
    - revalidateOnFocus: false ⇒ 브라우저의 다른 탭에서 돌아왔을 때 revalidate 하지 않음
    - revalidateOnReconnect: false ⇒ 네트워크가 다시 연결될 때 revalidate 하지 않음

- route handler 활용하여 저장 기능 구현

<br />

</details>

<details>
<summary>prisma + mongodb</summary>
<br>

- prisma schema를 통한 데이터 모델링
- mongodb의 유연한 스키마를 활용하여 변화하는 요구사항에 맞춘 데이터 구조 설계
- prisma client로 mongodb의 다양한 데이터 타입과 구조를 효율적으로 처리

```js
// ex) Movie model

model Movie {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  title String
  description String
  videoUrl String
  thumbnailUrl String
  genre String
  duration String
}
```

<br />

</details>

<details>
<summary>next-auth</summary>
<br>

- 이메일 및 소셜 로그인 기능 구현
- JWT를 활용한 토큰 기반 인증

```js
session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
```

<br />

</details>

<br />

## Quick Start

테스트 아이디와 테스트 비밀번호를 복사하셔서 로그인 하시면 됩니다.

<img width="443" alt="test-id" src="https://github.com/user-attachments/assets/79e3e1fc-e8d2-463c-beb6-06f6fd07ea9c">

### Clone
```
git clone https://github.com/HMRyu/netflix-clone-project.git
```

### Installation
```
npm install
```

### Run
```
npm run dev
```


