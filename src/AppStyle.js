import App from "./App";

const cor = 'red';
const perfectCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const AppStyle = {
    divDeDentro: {
        ...perfectCenter,
        height: 500,
        width: 500,
        border: `2px solid ${cor}`,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    divDeFora: {
        ...perfectCenter,
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        backgroundColor: 'lightgrey'
    },
    titulo: {
        color: cor,
        fontSize: '30pt',
        margin: 0
    },
    timer: {
        color: cor,
        fontSize: '50pt',
        fontWeight: 'bolder'
    },
    botoesMenores: {
        borderRadius: '50%',
        height: 50,
        width: 50,
        border: `1px dotted ${cor}`,
        cursor: 'pointer'
    },
    botoesMaiores: {
        height: 50,
        width: 100,
        border: `1px dotted ${cor}`,
        borderRadius: 25,
        cursor: 'pointer'
    }
}

export default AppStyle;