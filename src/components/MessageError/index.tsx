import * as C from './styles';

type Props = {
    message: string[];
    setMessage: (message: string[]) => void;
    showErro: boolean;
    closeErro: () => void;
}
export const MessageError = ({ message, setMessage, showErro, closeErro }: Props) => {

    return (
        <C.Container>
            <C.MessageArea showErro={showErro}>
                <C.CloseArea showErro={showErro}>
                    <C.Close onClick={closeErro}>❌</C.Close>
                    <C.CloseTitle>ERRO</C.CloseTitle>
                </C.CloseArea>
                <C.Message showErro={showErro}>
                    {message.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </C.Message>
            </C.MessageArea>
        </C.Container>
    );
}