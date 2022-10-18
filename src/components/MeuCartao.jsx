import { Card, Title } from "react-native-paper";

const MeuCartao = () => {
    return(
        <Card>
            <Card.Title 
                title={"Meu Cartão"} 
                subtitle={"Dale rapaiz"}
            />
            <Card.Content>
                <Title>Conheça legals</Title>
            </Card.Content>
        </Card>
    )
}
export default MeuCartao;