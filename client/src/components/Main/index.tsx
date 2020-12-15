import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logo do React Avançado na esquerda da tela"
    />
    <S.Title>Desenvolvimento em React com Next</S.Title>
    <S.Description>
      criando uma applicação para conhecer o tal do next
    </S.Description>
    <S.illustration
      src="/img/hero-illustration.svg"
      alt="pessoa sentada na cadeira escrevendo no computador"
    />
  </S.Wrapper>
)

export default Main
