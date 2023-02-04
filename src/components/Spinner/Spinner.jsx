import styled from 'styled-components'

const StyledSpinner = styled.div`
  position: relative;

.spinner-circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
}

.spinner-circle:before {
  z-index: 5;
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 3px dashed #000000;
  opacity: 0.7;
  width: 25px;
  height: 25px;
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  animation: loading 1s linear infinite;
}

.spinner-circle:after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 3px dashed #000000;
  opacity: 0.7;
  width: 25px;
  height: 25px;
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  animation: loading 1s ease infinite;
  z-index: 10;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

const Spinner = () => {
  return (
    <StyledSpinner aria-label='spinner-icon'>
      <div className='spinner-circle'></div>
    </StyledSpinner>
  )
}

export default Spinner