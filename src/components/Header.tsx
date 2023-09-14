import { styled } from "../../node_modules/styled-components/dist/constructors/constructWithOptions";

const Container = styled.header `
    background: #d73835;
`

export function Header() {
  return (
    <Container>
        <div className="page-details">
            <h1>Pedidos</h1>
            <h2>Acompanhamento de Pedidos</h2>
        </div>
    </Container>
  );
}
