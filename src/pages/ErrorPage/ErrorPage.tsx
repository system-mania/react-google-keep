import { useNavigate } from 'react-router-dom';
import { ButtonFill } from '../../styles/styles';
import { Container } from './ErrorPage.styles';
import img from '../../assets/errorImg.png';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="error__img">
        <img src={img} alt="pageNotFound" />
      </div>
      <div className="error__text">
        <h1>404</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <ButtonFill onClick={() => navigate('/')}>
          <span>처음으로 돌아가기</span>
        </ButtonFill>
      </div>
    </Container>
  );
};

export default ErrorPage;
