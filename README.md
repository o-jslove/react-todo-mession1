# 📝 Todo App

## 기술 스택

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Context API** (전역 상태 관리)

---

## 프로젝트 구조

```
src/
├── main.jsx
├── index.css
├── App.jsx
├── context/
│   └── TodoContext.jsx       # 전역 상태 + useTodos 훅
└── components/
    ├── TodoStats.jsx          # 진행률 표시
    ├── TodoWriteForm.jsx      # 할 일 추가 폼
    ├── TodoFilter.jsx         # 전체/진행중/완료 필터
    ├── TodoList.jsx           # 목록 렌더링
    └── TodoItem.jsx           # 개별 항목 (수정/삭제/체크)
```

---

## 주요 기능

- 할 일 **추가 / 수정 / 삭제**
- **완료 체크** 토글
- **필터링** (전체 / 진행중 / 완료)
- **진행률** 프로그레스 바
