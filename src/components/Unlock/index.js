import {useState} from 'react'
import {Container, Image, Description, Button} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLockStatus] = useState(true)

  const onClickButton = () => {
    setLockStatus(prevState => !prevState)
  }
  return (
    <Container>
      <Image
        src={
          lockStatus
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={lockStatus ? 'lock' : 'unlock'}
      />
      <Description>
        {lockStatus ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Description>
      <Button onClick={onClickButton}>{lockStatus ? 'Unlock' : 'Lock'}</Button>
    </Container>
  )
}

export default Unlock
