# Fastcampas Site

이 프로젝트는 [조은의 프론트엔드 실무가이드 : 요구사항 분석과 적정 기술] 강의를 들으면서 제작되었습니다.

## Contributor

- @techhtml(조은)

## Tech Requirement (Tech Stack)

- Create-next-app
- Next.js
- Typescript
- ESLint
- Babel 설정 (IE11을 지원하기 위한 선택 사항(기본적으로 지원하긴 하지만 빌드 시 결과물이 달라짐))

## Docker

- Dockerfile을 이용하여 Docker Container
- Docker Compose를 사용하고 있습니다.

## Script

```
$ npm run build
$ npm run deploy
```

## 테스트

- jest
- npm run test

## 프로젝트 구성

## Fast Campas

**인증**

- 로그인
- 회원가입
- 로그아웃
- Profile
- 유저 정보

**글로벌 모듈**

- GNB
- 레이어
- 푸터

**내부 모듈**

- 배너
- 공지사항
- 강의 목록
- 강의 상세

**모바일 모듈**

- 카테고리 목록
