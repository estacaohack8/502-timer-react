
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
    }
}

export default AppStyle;