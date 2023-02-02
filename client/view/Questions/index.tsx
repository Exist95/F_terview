import { Login } from "../../pages/Auth/Login";
import { LoginViewModel } from "../../vm/LoginViewModel";
import * as S from "./style";
const answers = ["파이썬", "자바스크립트", "자바", "타입스크립트"];

export const QuestionsTemp = () => {
  const { isLogin } = LoginViewModel();
  return (
    <>
      {isLogin ? (
        <S.Container>
          <S.QContainer>
            <S.Title>Q1.</S.Title>
            <S.QContent>질문입니다.</S.QContent>
          </S.QContainer>
          <S.AContainer>
            <S.Title>A.</S.Title>
            <S.ScrollView>
              <S.BtnContainer>
                {answers.map((answer) => {
                  return (
                    <S.Answer key={answer}>
                      <S.AContent>{answer}</S.AContent>
                    </S.Answer>
                  );
                })}
              </S.BtnContainer>
            </S.ScrollView>
          </S.AContainer>
        </S.Container>
      ) : (
        <Login />
      )}
    </>
  );
};
