import { Card, Title } from "react-native-paper";

const MeuCartao = () => {
    return(
        <Card>
            <Card.Title 
                title={"Foto Gallery"} 
                subtitle={"Tire uma foto sua"}
            />
            <Card.Content>
                <Title>AGORA</Title>
            </Card.Content>
        </Card>
    )
}
export default MeuCartao;