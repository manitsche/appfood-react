import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: 1216px;
    margin: 40px auto;
    display: flex;
    gap: 32px; /* Espaçamento entre as linhas */
`;

export const Board = styled.div`
    padding: 16px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 16px;
    display: flex;
    flex-direction: column; 
    align-items: center; /* Alinhamento Horizontal */
    flex: 1;

    header {
        padding: 8px;
        font-size: 14px;
        display: flex;
        align-items: center; /* Alinhamento Horizontal */
        gap: 8px; /* Espaçamento entre as linhas */
    }
`;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;

    button {
        background: #fff;
        border: 1px solid rgba(204, 204, 204, 0.4);
        height: 128px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center; /* Alinhamento Vertical */
        align-items: center; /* Alinhamento Horizontal */
        gap: 4px; /* Espaçamento entre as linhas */

        strong {
            font-weight: 500;
        }

        span {
            font-size: 14px;
            color: #666;
        }

        & + button { /* & atua como um IF, se o anterior for um botão, deixe a margem */
            margin-top: 24px;
        }
    }
`;