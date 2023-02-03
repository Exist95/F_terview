import { useEffect } from "react";
import { NavigateLogin } from "../../pages/Auth/NavigateLogin";
import { LoginViewModel } from "../../vm/LoginViewModel";
import { Header } from "../components/Common/Header";
import { NoteList } from "./NoteList";
import * as S from "./style";

const dummy = [
  {
    question: "무엇이 문제인가요?",
    answer: "정답인가요?",
    part: "HTML",
  },
];

export const NoteTemp = () => {
  const { isLogin, loginNavigate } = LoginViewModel();

  useEffect(() => {
    loginNavigate();
  }, []);

  return (
    <>
      {isLogin ? (
        <S.Container>
          <Header />
          <S.TextBox>
            <S.NoteTitle>오답노트</S.NoteTitle>
            <S.NotePoint>40/900</S.NotePoint>
          </S.TextBox>
          {dummy.map((item: any, i) => {
            return <NoteList key={i} item={item} />;
          })}
        </S.Container>
      ) : (
        <NavigateLogin />
      )}
    </>
  );
};
