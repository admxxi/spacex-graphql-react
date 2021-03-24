import styled from 'styled-components'

const CardList = styled.div`
  .container {
    display: grid;
    padding: 1em;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1em;
  }
`
export default CardList
