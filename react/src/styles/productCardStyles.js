const productCardStyles = {
    cards: {
        width: 250,
        height: 250,
        border: "1px solid black",
    },
    cardsInnerContainer: {
      margin: "auto"
    },
    auterContainer:{
      display: "flex"
    },
    container: {
        display: "grid",
        margin: "auto",
        width: 1200,
        gridTemplateColumns: "300px 300px 300px 300px",
        gridGap: 30,
    }
}

export default productCardStyles;