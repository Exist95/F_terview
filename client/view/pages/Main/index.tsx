import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, MainTitle } from "./style";

const Main = () => {
  return (
    <Container>
      <Header />
      <MainTitle>프터뷰</MainTitle>
      <Button />
      <StatusBar style="light" />
    </Container>
  );
};

export default Main;
